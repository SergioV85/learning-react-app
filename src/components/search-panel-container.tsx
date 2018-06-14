import { drop, pathOr, pipe } from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import { MoviesListActions } from './../actions/movies-list.actions';
import { MoviesSearchPanelActions } from './../actions/movies-search-panel.actions';
import { IMoviesPageStore } from './../reducers/root.reducer';
import { SearchPanel } from './search-panel/search-panel.component';

const mapStateToProps = (state: IMoviesPageStore) => ({
  search: pathOr('', ['searchParams', 'search'], state),
  searchBy: pathOr('', ['searchParams', 'searchBy'], state),
  searchQuery: pipe(
    pathOr('', ['router', 'location', 'search']),
    drop(1) as any,
    decodeURI,
  )(state),
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
