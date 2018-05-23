import { pathOr } from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import { MovieDetailsActions } from './../actions/movie-details.actions';
import { MoviesSearchPanelActions } from './../actions/movies-search-panel.actions';
import { IMoviesPageStore } from './../reducers/root.reducer';
import { MoviesPage } from './movies-page';

const mapStateToProps = (state: IMoviesPageStore) => ({
  movies: {
    list: pathOr([], ['moviesList', 'movies'], state),
    selectedMovie: pathOr(null, ['movieDetails', 'selectedMovie'], state),
  },
  search: {
    keyword: pathOr('', ['searchParams', 'keyword'], state),
    sortBy: pathOr('', ['searchParams', 'sortBy'], state),
    type: pathOr('', ['searchParams', 'type'], state),
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

  changeSortingType: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(MoviesSearchPanelActions.updateSorting(event.currentTarget.value)),

  searchMovies: () =>
    dispatch(MovieDetailsActions.backToListAction()),

  selectMovie: () =>
    dispatch(MovieDetailsActions.backToListAction()),

  /*
  searchMovies: () => dispatch

  public searchMovies() {
    this.setState({
      movies: {
        ...this.state.movies,
        list: mockedMoviesList
      }
    })
  }
  public selectMovie(movieId: number) {
    this.setState({
      movies: {
        ...this.state.movies,
        selectedMovie: mockedMovieDetails
      }
    });
    console.log('selected movieId', movieId);
  }
  */
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesPage);
