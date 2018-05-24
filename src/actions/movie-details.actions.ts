import * as MovieDetailsActionTypes from './../action-types/movie-details.action-types';
import { getMovieDetails } from './../services/movies.service';

const backToListAction = () => ({
  type: MovieDetailsActionTypes.MovieDetailsActionTypes.BackToList,
});
const getMovie = (selectedMovieId: number) => {
  return (dispatch: any) => {
    dispatch({
      payload: selectedMovieId,
      type: MovieDetailsActionTypes.MovieDetailsActionTypes.GetMovie,
    });

    return getMovieDetails(selectedMovieId)
      .then((details) => dispatch({
        payload: details.data,
        type: MovieDetailsActionTypes.MovieDetailsActionTypes.GetMovieComplete,
      }))
      .catch((err) => dispatch({
        payload: err,
        type: MovieDetailsActionTypes.MovieDetailsActionTypes.GetMovieError,
      }));
  };
};

export const MovieDetailsActions = {
  backToListAction,
  getMovie,
};
