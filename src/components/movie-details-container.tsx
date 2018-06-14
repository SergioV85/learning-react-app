import { last, pathOr, pipe, split } from 'ramda';
import { connect } from 'react-redux';
import { MovieDetailsActions } from './../actions/movie-details.actions';
import { IMoviesPageStore } from './../reducers/root.reducer';
import { MovieDetailsHeader } from './movie-details-header/movie-details-header.component';

const mapStateToProps = (state: IMoviesPageStore) => ({
  selectedMovie: pathOr(null, ['movieDetails', 'movieDetails'], state),
  selectedMovieId: pipe(
    pathOr('', ['router', 'location', 'pathname']),
    split('/'),
    last,
    parseInt,
  )(state),
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
