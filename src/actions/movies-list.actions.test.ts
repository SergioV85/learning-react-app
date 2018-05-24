// import fetchMock from 'fetch-mock';
// import configureMockStore from 'redux-mock-store';
/// import thunk from 'redux-thunk';

import * as MovieDetailsActionTypes from './../action-types/movie-details.action-types';
import { MovieDetailsActions } from './movie-details.actions';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

const dispatch = jest.fn();

describe('Movie details actions', () => {
  describe('backToListAction', () => {
    it('should set selected movie to null;', () => {
      const mockedBackToList = {
        type: MovieDetailsActionTypes.MovieDetailsActionTypes.BackToList,
      };

      dispatch(MovieDetailsActions.backToListAction());
      expect(dispatch).toBeCalledWith(mockedBackToList);
    });
  });
});
