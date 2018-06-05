import { pathOr } from 'ramda';
import { connect } from 'react-redux';
import { MoviesListActions } from './../actions/movies-list.actions';
import { IMoviesPageStore } from './../reducers/root.reducer';
import { MoviesPage } from './movies-page/movies-page';

const mapStateToProps = (state: IMoviesPageStore) => ({
  movies: pathOr([], ['moviesList', 'movies'], state),
});
​
const mapDispatchToProps = (dispatch: any) => ({
  selectMovie: (movieId: number) => dispatch(MoviesListActions.navigateToMovie(movieId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesPage);
