import * as React from 'react';
import { ErrorBoundary } from './../error-boundary/error-boundary.component';
import { MovieCard, MovieObject } from './../movie-card/movie-card.component';
interface MoviesListProps {
  movies: MovieObject[];
  onMovieClick(): void;
}

interface MoviesListState {}

export class MoviesList extends React.Component<MoviesListProps, MoviesListState> {
  constructor(props: MoviesListProps) {
    super(props);
  }

  public render() {
    return <div className={`c-movies-list ${this.props.movies.length === 0 ? 'c-movies-list--empty' : ''}`}>
      {
        this.props.movies.length === 0
        ? <h1 className="c-movies-list__no-found-title">No films found</h1>
        : <ul className="c-movies-list__collection container">
            {this.props.movies.map(
              (movie) => 
                <ErrorBoundary key={`movie-card-wrapper-${movie.id}`} errorMessage={`Unfortunally, we can't show ${movie.title} preview`}>
                  <MovieCard key={movie.id} movie={movie} onMovieClick={this.props.onMovieClick} />
                </ErrorBoundary>
            )}
          </ul>
      }
    </div>;
  }
}