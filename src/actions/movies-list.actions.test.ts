import * as moxios from 'moxios';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MoviesListActionTypes from './../action-types/movies-list.action-types';
import { mockedMoviesList } from './../components/movies-list/mocked-list';
import { MoviesListActions } from './movies-list.actions';

// const dispatch = jest.fn();
// const getState = jest.fn();
const mockStore = createMockStore([thunk]);

describe('Movie List actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  describe('Search Movies', () => {
    let store: any;
    beforeEach(() => {
      store = mockStore();
    });
    it('should dispatch request with search parameters and save movies list to store', async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: mockedMoviesList,
          status: 200,
        });
      });
      await store.dispatch(MoviesListActions.searchMovies());
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        payload: undefined,
        type: MoviesListActionTypes.GetMovies,
      });
      expect(actions[1]).toEqual({
        payload: mockedMoviesList,
        type: MoviesListActionTypes.GetMoviesComplete,
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
      await store.dispatch(MoviesListActions.searchMovies());
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        payload: undefined,
        type: MoviesListActionTypes.GetMovies,
      });
      expect(actions[1]).toMatchObject({
        type: MoviesListActionTypes.GetMoviesError,
      });
    });
  });
});
