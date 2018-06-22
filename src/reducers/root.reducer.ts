import { drop, head, ifElse, isEmpty, last, pathOr, pipe, split } from 'ramda';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { IMovieDetailsStore, movieDetailsReducer } from './movie-details.reducer';
import { IMoviesListStore, moviesListReducer } from './movies-list.reducer';
import { IMoviesSearchPanelStore, moviesSearchPanelReducer } from './movies-search-panel.reducer';

export interface IMoviesPageStore {
  moviesList: IMoviesListStore;
  movieDetails: IMovieDetailsStore;
  router: any;
  searchParams: IMoviesSearchPanelStore;
}
​
export const rootReducer = combineReducers({
  movieDetails: movieDetailsReducer,
  moviesList: moviesListReducer,
  searchParams: moviesSearchPanelReducer,
});

const routerSelector = (state: IMoviesPageStore) => state.router;
export const getSearchQuery = createSelector(
  routerSelector,
  pipe(
    pathOr('', ['location', 'pathname']),
    split('/'),
    drop(2),
    ifElse(
      isEmpty,
      () => '',
      head,
    ),
    decodeURI,
  ),
);
export const getSelectedMovieId = createSelector(
  routerSelector,
  pipe(
    pathOr('', ['location', 'pathname']),
    split('/'),
    last,
    parseInt,
  ),
);
