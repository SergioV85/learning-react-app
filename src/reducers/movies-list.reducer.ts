import { merge } from 'ramda';
import * as MoviesListActionTypes from './../action-types/movies-list.action-types';
import { IMovieObject } from './../components/movie-card/movie-card.component';

export interface IMoviesListStore {
  isLoading: boolean;
  error?: string;
  movies?: IMovieObject[];
  total?: number;
}

const defaultState = {
  isLoading: false,
};

export const moviesListReducer = (state: IMoviesListStore = defaultState, action: any) => {
  switch (action.type) {
    case MoviesListActionTypes.MoviesListActionTypes.GetMovies:
      return merge(state, { isLoading: true }) as IMoviesListStore;
    case MoviesListActionTypes.MoviesListActionTypes.GetMoviesComplete:
      const movies = action.payload.data;
      const total = action.payload.total;
      return merge(state, { isLoading: false, movies, total }) as IMoviesListStore;
    case MoviesListActionTypes.MoviesListActionTypes.GetMoviesError:
      const error = action.payload;
      return merge(state, { isLoading: false, error }) as IMoviesListStore;
    default:
      return state;
  }
};
