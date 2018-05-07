import * as React from 'react';
import { DateTime } from 'luxon';

export interface MovieObject {
  budget: number;
  genres: string[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

interface MovieCardProps {
  movie: MovieObject;
  onMovieClick(id: number): void;
}

interface MovieCardState {}

export class MovieCard extends React.Component<MovieCardProps, MovieCardState> {
  constructor(props: MovieCardProps) {
    super(props);
  }

  public render() {
    return <div className="c-movie-card" onClick={() => this.props.onMovieClick(this.props.movie.id)}>
      <img className="c-movie-card__poster" src={this.props.movie.poster_path} />
      <div className="c-movie-card__title-and-year">
        <span className="c-movie-card__title">{this.props.movie.title}</span>
        <span className="c-movie-card__year">
          { DateTime.fromISO(this.props.movie.release_date).year }
        </span>
      </div>
      <div className="c-movie-card__genres">
        { this.props.movie.genres.join(', ') }
      </div>
    </div>;
  }
}