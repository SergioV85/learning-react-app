import { merge } from 'ramda';
import MovieDetailsActionTypes from './../action-types/movie-details.action-types';
import MoviesListActionTypes from './../action-types/movies-list.action-types';
import { IMovieObject } from './../components/movie-details/movie-details.component';

export interface IMovieDetailsStore {
  isLoading: boolean;
  selectedMovieId?: number;
  movieDetails?: IMovieObject;
}

const defaultState = {
  isLoading: false,
};

export const movieDetailsReducer = (state: IMovieDetailsStore = defaultState, action: any) => {
  switch (action.type) {
    case MoviesListActionTypes.NavigateToMovie:
      const movieId = action.payload;
      return merge(state, { movieDetails: null, selectedMovieId: movieId });
    case MovieDetailsActionTypes.BackToList:
      return merge(state, { movieDetails: null, selectedMovieId: null });
    case MovieDetailsActionTypes.GetMovie:
      return merge(state, { isLoading: true }) as IMovieDetailsStore;
    case MovieDetailsActionTypes.GetMovieComplete:
      const movieDetails = action.payload;
      return merge(state, { isLoading: false, movieDetails }) as IMovieDetailsStore;
    case MovieDetailsActionTypes.GetMovieError:
      const error = action.payload;
      return merge(state, { isLoading: false, error }) as IMovieDetailsStore;
    default:
      return state;
  }
};
