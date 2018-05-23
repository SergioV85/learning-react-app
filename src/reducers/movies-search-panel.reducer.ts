import { merge } from 'ramda';
import * as MoviesSearchPanelActionTypes from './../action-types/movies-search-panel.action-types';

export interface IMoviesSearchPanelStore {
  keyword?: string;
  sortBy?: string;
  type?: string;
}

const defaultState = {
  keyword: '',
  sortBy: 'rating',
  type: 'title',
};

export const moviesSearchPanelReducer = (
    state: IMoviesSearchPanelStore = defaultState,
    action: any) => {
  switch (action.type) {
    case MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSearchKeyword:
      const keyword = action.payload;
      return merge(state, { keyword });
    case MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSearchType:
      const type = action.payload;
      return merge(state, { type });
    case MoviesSearchPanelActionTypes.MoviesSearchPanelActionTypes.UpdateSortType:
      const sortBy = action.payload;
      return merge(state, { sortBy });
    default:
      return state;
  }
};
