import { MovieDetailsActions } from './../actions/movie-details.actions';
import { movieDetailsReducer } from './movie-details.reducer';

const mockedState = {
  isLoading: false,
};

const initialState = movieDetailsReducer(mockedState, {} as any);

describe('Movie Details Reducer', () => {
  describe('initial state', () => {
    it('should match a snapshot', () => {
      expect(initialState).toMatchSnapshot();
    });
  });
});
