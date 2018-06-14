import * as moxios from 'moxios';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MovieDetailsActionTypes from './../action-types/movie-details.action-types';
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
    let store: any;
    beforeEach(() => {
      store = mockStore();
    });
    afterEach(() => {
      dispatch.mockClear();
    });
    it('should set selected movie to null', async () => {
      const mockedBackToList = {
        type: MovieDetailsActionTypes.BackToList,
      };
      await store.dispatch(MovieDetailsActions.backToListAction());
      const actions = store.getActions();
      expect(actions[0]).toEqual(mockedBackToList);
    });
  });
  describe('getMovie', () => {
    let store: any;
    beforeEach(() => {
      store = mockStore();
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
        type: MovieDetailsActionTypes.GetMovie,
      });
      expect(actions[1]).toEqual({
        payload: mockedMovieDetails,
        type: MovieDetailsActionTypes.GetMovieComplete,
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
        type: MovieDetailsActionTypes.GetMovie,
      });
      expect(actions[1]).toMatchObject({
        type: MovieDetailsActionTypes.GetMovieError,
      });
    });
  });
});
