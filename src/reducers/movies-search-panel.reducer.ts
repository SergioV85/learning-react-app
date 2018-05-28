import { merge } from 'ramda';
import MoviesSearchPanelActionTypes from './../action-types/movies-search-panel.action-types';

export interface IMoviesSearchPanelStore {
  search?: string;
  searchBy?: string;
  sortBy?: string;
  sortOrder?: string;
}

const defaultState = {
  search: '',
  searchBy: 'title',
  sortBy: 'rating',
  sortOrder: 'desc',
};

export const moviesSearchPanelReducer = (
    state: IMoviesSearchPanelStore = defaultState,
    action: any) => {
  switch (action.type) {
    case MoviesSearchPanelActionTypes.UpdateSearchKeyword:
      const search = action.payload;
      return merge(state, { search });
    case MoviesSearchPanelActionTypes.UpdateSearchType:
      const searchBy = action.payload;
      return merge(state, { searchBy });
    case MoviesSearchPanelActionTypes.UpdateSortOrder:
      const sortOrder = action.payload;
      return merge(state, { sortOrder });
    case MoviesSearchPanelActionTypes.UpdateSortType:
      const sortBy = action.payload;
      return merge(state, { sortBy });
    default:
      return state;
  }
};
