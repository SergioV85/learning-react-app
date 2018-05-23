import { combineReducers } from 'redux';
import { IMovieDetailsStore, movieDetailsReducer } from './movie-details.reducer';
import { IMoviesListStore, moviesListReducer } from './movies-list.reducer';
import { IMoviesSearchPanelStore, moviesSearchPanelReducer } from './movies-search-panel.reducer';

export interface IMoviesPageStore {
  moviesList: IMoviesListStore;
  movieDetails: IMovieDetailsStore;
  searchParams: IMoviesSearchPanelStore;
}
​
export const rootReducer = combineReducers({
  movieDetails: movieDetailsReducer,
  moviesList: moviesListReducer,
  searchParams: moviesSearchPanelReducer,
});
