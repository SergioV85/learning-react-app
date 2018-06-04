import { merge } from 'ramda';
import MoviesSearchPanelActionTypes from './../action-types/movies-search-panel.action-types';
import { moviesSearchPanelReducer } from './movies-search-panel.reducer';

const mockedState = {
  search: '',
  searchBy: 'title',
  sortBy: 'rating',
  sortOrder: 'desc',
};

describe('Movies Search Panel Reducer', () => {
  it('should return the initial state', () => {
    const currentState = moviesSearchPanelReducer(mockedState, {});
    const newState = { search: '', searchBy: 'title', sortBy: 'rating', sortOrder: 'desc' };
    expect(currentState).toEqual(newState);
  });
  it('should handle MoviesSearchPanelActions.UpdateSearchKeyword', () => {
    const action = {
      payload: 'test',
      type: MoviesSearchPanelActionTypes.UpdateSearchKeyword,
    };
    const currentState = moviesSearchPanelReducer(mockedState, action);
    const newState = merge(mockedState, { search: 'test' });
    expect(currentState).toEqual(newState);
  });
  it('should handle MoviesSearchPanelActions.UpdateSearchType', () => {
    const action = {
      payload: 'genres',
      type: MoviesSearchPanelActionTypes.UpdateSearchType,
    };
    const currentState = moviesSearchPanelReducer(mockedState, action);
    const newState = merge(mockedState, { searchBy: 'genres' });
    expect(currentState).toEqual(newState);
  });
  it('should handle MoviesSearchPanelActions.UpdateSortOrder', () => {
    const action = {
      payload: 'desc',
      type: MoviesSearchPanelActionTypes.UpdateSortOrder,
    };
    const currentState = moviesSearchPanelReducer(mockedState, action);
    const newState = merge(mockedState, { sortOrder: 'desc' });
    expect(currentState).toEqual(newState);
  });
  it('should handle MoviesSearchPanelActions.UpdateSortType', () => {
    const action = {
      payload: 'release_date',
      type: MoviesSearchPanelActionTypes.UpdateSortType,
    };
    const currentState = moviesSearchPanelReducer(mockedState, action);
    const newState = merge(mockedState, { sortBy: 'release_date' });
    expect(currentState).toEqual(newState);
  });
});
