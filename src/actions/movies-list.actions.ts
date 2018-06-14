import { push } from 'connected-react-router';
import MoviesListActionTypes from './../action-types/movies-list.action-types';
import { getMoviesList } from './../services/movies.service';

const searchMovies = () => {
  return (dispatch: any, getState: any) => {
    const { searchParams } = getState();
    dispatch({
      payload: searchParams,
      type: MoviesListActionTypes.GetMovies,
    });

    dispatch(push(`/search?${searchParams.search}`));

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

const navigateToMovie = (movieId: number) => {
  return (dispatch: any) => {
    dispatch({
      payload: movieId,
      type: MoviesListActionTypes.NavigateToMovie,
    });
    dispatch(push(`/film/${movieId}`));
  };
};

export const MoviesListActions = {
  navigateToMovie,
  searchMovies,
};
