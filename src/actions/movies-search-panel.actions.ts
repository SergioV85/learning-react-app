import MoviesSearchPanelActionTypes from './../action-types/movies-search-panel.action-types';

const updateKeyword = (keyword: string) => ({
  payload: keyword,
  type: MoviesSearchPanelActionTypes.UpdateSearchKeyword,
});
const updateSortingOrder = (sortOrder: string) => ({
  payload: sortOrder,
  type: MoviesSearchPanelActionTypes.UpdateSortOrder,
});
const updateSortingType = (sortType: string) => ({
  payload: sortType,
  type: MoviesSearchPanelActionTypes.UpdateSortType,
});
const updateType = (searchType: string) => ({
  payload: searchType,
  type: MoviesSearchPanelActionTypes.UpdateSearchType,
});

export const MoviesSearchPanelActions = {
  updateKeyword,
  updateSortingOrder,
  updateSortingType,
  updateType,
};
