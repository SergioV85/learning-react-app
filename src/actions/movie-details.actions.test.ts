import * as moxios from 'moxios';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as MovieDetailsActionTypes from './../action-types/movie-details.action-types';
import { mockedMovieDetails } from './../components/movies-list/mocked-details';
import { MovieDetailsActions } from './movie-details.actions';

const dispatch = jest.fn();
const mockStore = createMockStore([thunk]);

describe('Movie details actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  describe('backToListAction', () => {
    afterEach(() => {
      dispatch.mockClear();
    });
    it('should set selected movie to null', () => {
      const mockedBackToList = {
        type: MovieDetailsActionTypes.MovieDetailsActionTypes.BackToList,
      };

      dispatch(MovieDetailsActions.backToListAction());
      expect(dispatch).toBeCalledWith(mockedBackToList);
    });
  });
  describe('getMovie', () => {
    let store: any;
    beforeEach(() => {
      store = mockStore();
    });
    afterEach(() => {
      // dispatch.mockClear();
    });
    it('should dispatch request with selected movie id and save movie details to store', async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: mockedMovieDetails,
          status: 200,
        });
      });
      await store.dispatch(MovieDetailsActions.getMovie(123));
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        payload: 123,
        type: MovieDetailsActionTypes.MovieDetailsActionTypes.GetMovie,
      });
      expect(actions[1]).toEqual({
        payload: mockedMovieDetails,
        type: MovieDetailsActionTypes.MovieDetailsActionTypes.GetMovieComplete,
      });
    });
    it('should dispatch an error', async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: { error: 'Not found' },
          status: 404,
        });
      });
      await store.dispatch(MovieDetailsActions.getMovie(321));
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        payload: 321,
        type: MovieDetailsActionTypes.MovieDetailsActionTypes.GetMovie,
      });
      expect(actions[1]).toMatchObject({
        type: MovieDetailsActionTypes.MovieDetailsActionTypes.GetMovieError,
      });
    });
  });
});
