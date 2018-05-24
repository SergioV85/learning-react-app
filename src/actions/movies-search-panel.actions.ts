import * as MoviesSearchPanelActionTypes from './../action-types/movies-search-panel.action-types';

const updateKeyword = (keyword: string) => ({
  payload: keyword,
  type: MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSearchKeyword,
});
const updateSortingOrder = (sortOrder: string) => ({
  payload: sortOrder,
  type: MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSortOrder,
});
const updateSortingType = (sortType: string) => ({
  payload: sortType,
  type: MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSortType,
});
const updateType = (searchType: string) => ({
  payload: searchType,
  type: MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSearchType,
});

export const MoviesSearchPanelActions = {
  updateKeyword,
  updateSortingOrder,
  updateSortingType,
  updateType,
};
