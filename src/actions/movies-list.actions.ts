import * as MoviesListActionTypes from './../action-types/movies-list.action-types';
import { getMoviesList } from './../services/movies.service';

const searchMovies = () => {
  return (dispatch: any, getState: any) => {
    const { searchParams } = getState();
    dispatch({
      payload: searchParams,
      type: MoviesListActionTypes.MoviesListActionTypes.GetMovies,
    });

    return getMoviesList(searchParams)
      .then((list) => dispatch({
        payload: list.data,
        type: MoviesListActionTypes.MoviesListActionTypes.GetMoviesComplete,
      }))
      .catch((err) => dispatch({
        payload: err,
        type: MoviesListActionTypes.MoviesListActionTypes.GetMoviesError,
      }));
  };
};

export const MoviesListActions = {
  searchMovies,
};
