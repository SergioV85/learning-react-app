import * as MovieDetailsActionTypes from './../action-types/movie-details.action-types';

const backToListAction = () => ({
  type: MovieDetailsActionTypes.MovieDetailsActionTypes.BackToList,
});

export const MovieDetailsActions = {
  backToListAction,
};
