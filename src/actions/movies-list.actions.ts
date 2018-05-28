import MoviesListActionTypes from './../action-types/movies-list.action-types';
import { getMoviesList } from './../services/movies.service';

const searchMovies = () => {
  return (dispatch: any, getState: any) => {
    const { searchParams } = getState();
    dispatch({
      payload: searchParams,
      type: MoviesListActionTypes.GetMovies,
    });

    return getMoviesList(searchParams)
      .then((list) => dispatch({
        payload: list.data,
        type: MoviesListActionTypes.GetMoviesComplete,
      }))
      .catch((err) => dispatch({
        payload: err,
        type: MoviesListActionTypes.GetMoviesError,
      }));
  };
};

export const MoviesListActions = {
  searchMovies,
};
