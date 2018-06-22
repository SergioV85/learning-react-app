import { connect } from 'react-redux';
import { MoviesListActions } from './../actions/movies-list.actions';
import { getMoviesList } from './../reducers/movies-list.reducer';
import { IMoviesPageStore } from './../reducers/root.reducer';
import { MoviesPage } from './movies-page/movies-page';

const mapStateToProps = (state: IMoviesPageStore) => ({
  movies: getMoviesList(state),
});
​
const mapDispatchToProps = (dispatch: any) => ({
  selectMovie: (movieId: number) => dispatch(MoviesListActions.navigateToMovie(movieId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesPage);
