import * as React from 'react';
import { connect } from 'react-redux';
import { MoviesListActions } from './../actions/movies-list.actions';
import { MoviesSearchPanelActions } from './../actions/movies-search-panel.actions';
import { getMoviesList } from './../reducers/movies-list.reducer';
import { getSearchBy, getSearchKeyword } from './../reducers/movies-search-panel.reducer';
import { getSearchQuery, IMoviesPageStore } from './../reducers/root.reducer';
import { SearchPanel } from './search-panel/search-panel.component';

const mapStateToProps = (state: IMoviesPageStore) => ({
  movies: getMoviesList(state),
  search: getSearchKeyword(state),
  searchBy: getSearchBy(state),
  searchQuery: getSearchQuery(state),
});
​
const mapDispatchToProps = (dispatch: any) => ({
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(MoviesSearchPanelActions.updateKeyword(event.currentTarget.value)),

  onChangeType: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(MoviesSearchPanelActions.updateType(event.currentTarget.value)),

  onSearchMovies: () =>
    dispatch(MoviesListActions.searchMovies()),

  doSearchOnInit: (searchQuery: string) => {
    dispatch(MoviesSearchPanelActions.updateKeyword(searchQuery));
    dispatch(MoviesListActions.searchMovies());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPanel);
