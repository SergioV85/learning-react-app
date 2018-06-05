const enum MoviesListActionTypes {
  GetMovies = '[Movies List] Request movies list',
  GetMoviesComplete = '[Movies List] Movies successfully retrieved from server',
  GetMoviesError = '[Movies List] Error happened during request',
  NavigateToMovie = '[Movies List] Navigate to movie details',
}

export default MoviesListActionTypes;
