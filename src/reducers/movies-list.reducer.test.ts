// import { MoviesListActions } from './../actions/movies-list.actions';
import { moviesListReducer } from './movies-list.reducer';

const mockedState = {
  isLoading: false,
};

const initialState = moviesListReducer(mockedState, {} as any);

describe('Movies List Reducer', () => {
  describe('initial state', () => {
    it('should match a snapshot', () => {
      expect(initialState).toMatchSnapshot();
    });
  });
});
