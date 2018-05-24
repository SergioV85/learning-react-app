import { MoviesSearchPanelActions } from './../actions/movies-search-panel.actions';
import { moviesSearchPanelReducer } from './movies-search-panel.reducer';

const mockedState = {
  search: '',
  searchBy: 'title',
  sortBy: 'rating',
  sortOrder: 'desc',
};

const initialState = moviesSearchPanelReducer(mockedState, {} as any);

describe('Movies Search Panel Reducer', () => {
  describe('initial state', () => {
    it('should match a snapshot', () => {
      expect(initialState).toMatchSnapshot();
    });
  });
});
