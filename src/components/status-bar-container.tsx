import { length, pathOr, pipe } from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import { MoviesListActions } from './../actions/movies-list.actions';
import { MoviesSearchPanelActions } from './../actions/movies-search-panel.actions';
import { IMoviesPageStore } from './../reducers/root.reducer';
import { StatusBarPanel } from './status-bar/status-bar.component';

const mapStateToProps = (state: IMoviesPageStore) => ({
  currentSortingOrder: pathOr('', ['searchParams', 'sortOrder'], state),
  currentSortingType: pathOr('', ['searchParams', 'sortBy'], state),
  foundMovies: pipe(
    pathOr([], ['moviesList', 'movies']),
    length,
  )(state),
});
​
const mapDispatchToProps = (dispatch: any) => ({
  onChangeSortingOrder: (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(MoviesSearchPanelActions.updateSortingOrder(event.currentTarget.value));
    dispatch(MoviesListActions.searchMovies());
  },
  onChangeSortingType: (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(MoviesSearchPanelActions.updateSortingType(event.currentTarget.value));
    dispatch(MoviesListActions.searchMovies());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusBarPanel);
