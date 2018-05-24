import * as MoviesSearchPanelActionTypes from './../action-types/movies-search-panel.action-types';
import { MoviesSearchPanelActions } from './movies-search-panel.actions';

const dispatch = jest.fn();

describe('Movies Search Panel actions', () => {
  afterEach(() => {
    dispatch.mockClear();
  });
  it('should set new search keyword', () => {
    const mockedPayload = {
      payload: '123',
      type: MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSearchKeyword,
    };

    dispatch(MoviesSearchPanelActions.updateKeyword('123'));
    expect(dispatch).toBeCalledWith(mockedPayload);
  });
  it('should set new search type', () => {
    const mockedPayload = {
      payload: 'genres',
      type: MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSearchType,
    };

    dispatch(MoviesSearchPanelActions.updateType('genres'));
    expect(dispatch).toBeCalledWith(mockedPayload);
  });
  it('should set new sort order', () => {
    const mockedPayload = {
      payload: 'asc',
      type: MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSortOrder,
    };

    dispatch(MoviesSearchPanelActions.updateSortingOrder('asc'));
    expect(dispatch).toBeCalledWith(mockedPayload);
  });
  it('should set new sort type', () => {
    const mockedPayload = {
      payload: 'rating',
      type: MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSortType,
    };

    dispatch(MoviesSearchPanelActions.updateSortingType('rating'));
    expect(dispatch).toBeCalledWith(mockedPayload);
  });
});
