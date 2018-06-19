import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import MovieDetailsContainer from './components/movie-details-container';
import MoviesListContainer from './components/movies-container';
import { NotFoundPage } from './components/not-found-page/not-found.component';
import SearchPanelContainer from './components/search-panel-container';
import StatusBarContainer from './components/status-bar-container';

export const Routes = () => (
  <Switch>
    <Route exact={true} path='/'>
      <div>
        <SearchPanelContainer />
        <StatusBarContainer />
        <MoviesListContainer />
      </div>
    </Route>
    <Route path='/search/:param?'>
      <div>
        <SearchPanelContainer />
        <StatusBarContainer />
        <MoviesListContainer />
      </div>
    </Route>
    <Route path='/film/:id'>
      <div>
        <MovieDetailsContainer />
        <StatusBarContainer />
        <MoviesListContainer />
      </div>
    </Route>
    <Route path='*' component={NotFoundPage} />
  </Switch>
);
