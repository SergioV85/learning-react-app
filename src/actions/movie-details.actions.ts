import { push } from 'connected-react-router';
import MovieDetailsActionTypes from './../action-types/movie-details.action-types';
import { getMovieDetails } from './../services/movies.service';

const backToListAction = () => {
  return (dispatch: any) => {
    dispatch({
      type: MovieDetailsActionTypes.BackToList,
    });
    dispatch(push(`/search`));
  };
};
const getMovie = (selectedMovieId: number) => {
  return (dispatch: any) => {
    dispatch({
      payload: selectedMovieId,
      type: MovieDetailsActionTypes.GetMovie,
    });

    return getMovieDetails(selectedMovieId)
      .then((details) => dispatch({
        payload: details.data,
        type: MovieDetailsActionTypes.GetMovieComplete,
      }))
      .catch((err) => dispatch({
        payload: err,
        type: MovieDetailsActionTypes.GetMovieError,
      }));
  };
};

export const MovieDetailsActions = {
  backToListAction,
  getMovie,
};
