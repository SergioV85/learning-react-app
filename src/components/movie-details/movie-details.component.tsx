import * as React from 'react';
import { DateTime } from 'luxon';
import { MovieObject } from './../movie-card/movie-card.component';

interface MovieDetailsProps {
  selectedMovie: MovieObject
}

interface MovieDetailsState {}

export class MovieDetails extends React.Component<MovieDetailsProps, MovieDetailsState> {
  constructor(props: MovieDetailsProps) {
    super(props);
  }

  public render() {
    return <div className="c-movie-details">
      <img className="c-movie-details__poster" src={this.props.selectedMovie.poster_path} />
      <div className="c-movie-details__info">
        <h4 className="c-movie-details__header">
          <span className="c-movie-details__title">{this.props.selectedMovie.title}</span>
          <span className="c-movie-details__rating">{this.props.selectedMovie.vote_average}</span>
        </h4>
        <p className="c-movie-details__tagline">
          {this.props.selectedMovie.tagline}
        </p>
        <p>
          <span className="c-movie-details__year">
            { DateTime.fromISO(this.props.selectedMovie.release_date).year }
          </span>
          <span className="c-movie-details__duration">
            {this.props.selectedMovie.runtime} min
          </span>
        </p>
        <div className="c-movie-details__description">
          {this.props.selectedMovie.overview}
        </div>
      </div>
    </div>;
  }
}