import { Response } from 'express';
import * as fs from 'fs';
import { createLocation } from 'history';
import { join, resolve } from 'path';
import { curry, drop, head, ifElse, isEmpty, last, pipe, prop, split, test } from 'ramda';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import { AppContainer } from './../src/app';
import { getMovieDetails, getMoviesList, IMoviesListRequest } from './../src/services/movies.service';
import { createLocalStore } from './../src/store';

const generateHTML = (html: string, styleTags: string, renderedApp: string, preState: any) =>
  html
    .replace(
      '<div id="root"></div>',
      `
        <div id="root">${renderedApp}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preState).replace(/</g, '\\u003c')}
        </script>
      `,
    )
    .replace(
      '</title>',
      ` ${styleTags}</title>`,
    );

const createApp = (req: Request, htmlData: string, store: any) => {
  const sheet = new ServerStyleSheet();
  const context = {};

  const renderedApp = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <StyleSheetManager sheet={sheet.instance}>
          <AppContainer />
        </StyleSheetManager>
      </StaticRouter>
    </Provider>,
  );
  const styleTags = sheet.getStyleTags();
  return generateHTML(htmlData, styleTags, renderedApp, store.getState());
};

const prepareStoreAndApp = (req: Request, htmlData: string, preStore: {}) =>
  pipe(
    curry(createLocalStore)(req.url),
    prop('store'),
    curry(createApp)(req, htmlData),
  )(preStore);

export const render = (req: Request, res: Response) => {
  const DIST_FOLDER = join(process.cwd(), 'dist');
  fs.readFile(
    resolve(join(DIST_FOLDER, 'index.html')),
    'utf8',
    (err, htmlData) => {
      if (err) {
        // tslint:disable-next-line:no-console
        console.error('Read error', err);
        return res.status(404).end();
      }

      const location = createLocation(req.url);

      switch (true) {
        case test(/^\/film/g, location.pathname): {
          const filmId = pipe(
            split('/'),
            last,
            parseInt,
          )(location.pathname);
          return getMovieDetails(filmId)
            .then(({ data }) => prepareStoreAndApp(
              req,
              htmlData,
              { movieDetails: { movieDetails: data, selectedMovieId: filmId } },
            ))
            .then((page) => res.send(page))
            .catch((requestError: any) => res.status(404).send(requestError));
        }
        case test(/^\/search/g, location.pathname): {
          const searchString = pipe(
            split('/'),
            drop(2),
            ifElse(
              isEmpty,
              () => '',
              head,
            ),
            decodeURI,
          )(location.pathname);
          const searchParams = {
            search: searchString,
            searchBy: 'title',
          } as IMoviesListRequest;
          return getMoviesList(searchParams)
            .then(({ data }) => prepareStoreAndApp(
              req,
              htmlData,
              {
                moviesList: {
                  movies: data.data,
                  total: data.total,
                },
                searchParams,
              },
            ))
            .then((page) => res.send(page))
            .catch((requestError: any) => res.status(404).send(requestError));
        }
        default: {
          return getMoviesList({})
            .then(({ data }) => prepareStoreAndApp(
              req,
              htmlData,
              {
                moviesList: {
                  movies: data.data,
                  total: data.total,
                },
              },
            ))
            .then((page) => res.send(page))
            .catch((requestError: any) => res.status(404).send(requestError));
        }
      }
    },
  );
};
