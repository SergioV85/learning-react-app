import { pathOr } from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import { MovieDetailsActions } from './../actions/movie-details.actions';
import { MoviesListActions } from './../actions/movies-list.actions';
import { MoviesSearchPanelActions } from './../actions/movies-search-panel.actions';
import { IMoviesPageStore } from './../reducers/root.reducer';
import { MoviesPage } from './movies-page';

const mapStateToProps = (state: IMoviesPageStore) => ({
  movies: {
    list: pathOr([], ['moviesList', 'movies'], state),
    selectedMovie: pathOr(null, ['movieDetails', 'movieDetails'], state),
  },
  search: {
    search: pathOr('', ['searchParams', 'search'], state),
    searchBy: pathOr('', ['searchParams', 'searchBy'], state),
    sortBy: pathOr('', ['searchParams', 'sortBy'], state),
    sortOrder: pathOr('', ['searchParams', 'sortOrder'], state),
  },
});
​
const mapDispatchToProps = (dispatch: any) => ({
  backToList: () =>
    dispatch(MovieDetailsActions.backToListAction()),

  changeSearchInput: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(MoviesSearchPanelActions.updateKeyword(event.currentTarget.value)),

  changeSearchType: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(MoviesSearchPanelActions.updateType(event.currentTarget.value)),

  changeSortingOrder: (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(MoviesSearchPanelActions.updateSortingOrder(event.currentTarget.value));
    dispatch(MoviesListActions.searchMovies());
  },
  changeSortingType: (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(MoviesSearchPanelActions.updateSortingType(event.currentTarget.value));
    dispatch(MoviesListActions.searchMovies());
  },

  searchMovies: () =>
    dispatch(MoviesListActions.searchMovies()),

  selectMovie: (movieId: number) =>
    dispatch(MovieDetailsActions.getMovie(movieId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesPage);
