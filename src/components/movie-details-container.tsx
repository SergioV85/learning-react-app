import { connect } from 'react-redux';
import { MovieDetailsActions } from './../actions/movie-details.actions';
import { getSelectedMovie } from './../reducers/movie-details.reducer';
import { getSelectedMovieId, IMoviesPageStore } from './../reducers/root.reducer';
import { MovieDetailsHeader } from './movie-details-header/movie-details-header.component';

const mapStateToProps = (state: IMoviesPageStore) => ({
  selectedMovie: getSelectedMovie(state),
  selectedMovieId: getSelectedMovieId(state),
});
​
const mapDispatchToProps = (dispatch: any) => ({
  onBackToList: () => dispatch(MovieDetailsActions.backToListAction()),
  requestMovieOnInit: (movieId: number) => dispatch(MovieDetailsActions.getMovie(movieId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetailsHeader);
