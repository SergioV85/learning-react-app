import * as React from 'react';

import { ErrorBoundary } from './../error-boundary/error-boundary.component';

import { IMovieObject } from './../movie-details/movie-details.component';
import { MoviesEmptyList } from './../movies-empty-list/movies-empty-list.component';
import { MoviesList } from './../movies-list/movies-list.component';

export interface IMoviesPageProps {
  movies: IMovieObject[];
  selectMovie(id: number): void;
}

export class MoviesPage extends React.Component<IMoviesPageProps, {}> {
  constructor(props: IMoviesPageProps) {
    super(props);
  }
  public render() {
    return (
      <div className='c-page__movies'>
        {this.moviesListOrMessage}
      </div>
    );
  }

  private get moviesListOrMessage() {
    return this.props.movies.length !== 0
      ? <ErrorBoundary key='movies-list-wrapper' errorMessage='Unfortunately, we cant show movies list'>
          <MoviesList
              movies={this.props.movies}
              onMovieClick={this.props.selectMovie}
          />
        </ErrorBoundary>
      : <ErrorBoundary key='movies-empty-message-wrapper' errorMessage='Unfortunately, we cant show message'>
          <MoviesEmptyList />
        </ErrorBoundary>;
  }
}
