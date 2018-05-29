import { DateTime } from 'luxon';
import * as React from 'react';

export interface IMovieObject {
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

interface IMovieDetailsProps {
  movie: IMovieObject;
  viewType: 'card' | 'full';
  onMovieClick(movieId: number): void;
}

export class MovieDetails extends React.Component<IMovieDetailsProps, {}> {
  constructor(props: IMovieDetailsProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return <div className={`c-movie-details-${this.props.viewType}`} onClick={this.handleClick}>
      <img
          className={`c-movie-details-${this.props.viewType}__poster`}
          src={this.props.movie.poster_path}
      />
      <div className={`c-movie-details-${this.props.viewType}__data`}>
        <div className={`c-movie-details-${this.props.viewType}__title`}>
          <h4 className={`c-movie-details-${this.props.viewType}__name`}>{this.props.movie.title}</h4>
          <span className={`c-movie-details-${this.props.viewType}__rating`}>{this.props.movie.vote_average}</span>
          <span className={`c-movie-details-${this.props.viewType}__year`}>
            {DateTime.fromISO(this.props.movie.release_date).year}
          </span>
        </div>
        <div className={`c-movie-details-${this.props.viewType}__info`}>
          <p className={`c-movie-details-${this.props.viewType}__tagline`}>
            {this.props.movie.tagline}
          </p>
          <p>
            <span className={`c-movie-details-${this.props.viewType}__year`}>
              {DateTime.fromISO(this.props.movie.release_date).year}
            </span>
            <span className={`c-movie-details-${this.props.viewType}__duration`}>
              {this.props.movie.runtime} min
            </span>
          </p>
          <div className={`c-movie-details-${this.props.viewType}__description`}>
            {this.props.movie.overview}
          </div>
        </div>
        <div className={`c-movie-details-${this.props.viewType}__genres`}>
          {this.props.movie.genres.join(', ')}
        </div>
      </div>
    </div>;
  }

  public handleClick() {
    this.props.onMovieClick(this.props.movie.id);
  }
}
