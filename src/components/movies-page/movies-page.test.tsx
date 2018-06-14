import { mount, shallow } from 'enzyme';
import * as React from 'react';

import { MoviesEmptyList } from './../movies-empty-list/movies-empty-list.component';
import { MoviesList } from './../movies-list/movies-list.component';
import { MoviesPage } from './movies-page';

import { MovieDetails } from './../movie-details/movie-details.component';
import { mockedMoviesList } from './../movies-list/mocked-list';

const mockedStore = {
  movies: [],
};
const mockedProps = {
  selectMovie: jest.fn(),
};

const generateMoviesPage = (store: any) => {
  return shallow(<MoviesPage
    movies={store.movies}
    selectMovie={mockedProps.selectMovie}
  />);
};

describe('MoviesPage component', () => {
  const defaultMoviesPage = generateMoviesPage(mockedStore);

  describe('Init Rendering', () => {
    it('should render empty movies list', () => {
      expect(defaultMoviesPage
        .find(MoviesEmptyList)
        .dive()
        .find('.c-movies-list__no-found-title'),
      )
      .toHaveLength(1);
    });
    it('should mount in a full DOM', () => {
      expect(
        mount(<MoviesPage
          movies={mockedStore.movies}
          selectMovie={mockedProps.selectMovie}
        />)
          .find('.c-page__movies').length,
        )
        .toBe(1);
    });
  });
  describe('Show movies list', () => {
    const moviePageWithList = generateMoviesPage({
      movies: mockedMoviesList,
    });
    it('should render a page with movies list', () => {
      expect(moviePageWithList
          .find(MoviesList)
          .dive()
          .find(MovieDetails),
        )
        .toHaveLength(5);
    });
  });
});
