import * as React from 'react';
import { ErrorBoundary } from './../error-boundary/error-boundary.component';
import { IMovieObject, MovieCard } from './../movie-card/movie-card.component';
interface IMoviesListProps {
  movies: IMovieObject[];
  onMovieClick(): void;
}

export class MoviesList extends React.Component<IMoviesListProps, {}> {
  constructor(props: IMoviesListProps) {
    super(props);
  }

  public render() {
    return <div className={`c-movies-list ${this.props.movies.length === 0 ? 'c-movies-list--empty' : ''}`}>
      {this.listOrMessage}
    </div>;
  }

  private get listOrMessage() {
    return this.props.movies.length === 0
    ? <h1 className='c-movies-list__no-found-title'>No films found</h1>
    : <ul className='c-movies-list__collection container'>
        {this.props.movies.map((movie) => this.getMovieCard(movie))}
      </ul>;
  }

  private getMovieCard(movie: IMovieObject) {
    return <ErrorBoundary
      key={`movie-card-wrapper-${movie.id}`}
      errorMessage={`Unfortunately, we can't show ${movie.title} preview`}
    >
      <MovieCard key={movie.id} movie={movie} onMovieClick={this.props.onMovieClick} />
    </ErrorBoundary>;
  }
}
