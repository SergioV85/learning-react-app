import { mount, render, shallow } from 'enzyme';
import * as React from 'react';

import { mockedMovieDetails } from './../movies-list/mocked-details';
import { MovieDetails } from './movie-details.component';

describe('Movie Details component', () => {
  const mockOnMovieClickFn = jest.fn();
  const movieDetails = shallow(
    <MovieDetails movie={mockedMovieDetails} viewType='card' onMovieClick={mockOnMovieClickFn} />,
  );

  it('should render movie card without throwing an error', () => {
    expect(movieDetails
      .find('.c-movie-details-card__title')
      .html(),
    )
    .toMatch(/I Kill Giants/);
  });

  it('should be selectable by class "c-movie-details-card"', () => {
    expect(
      movieDetails
        .is('.c-movie-details-card'),
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(<MovieDetails movie={mockedMovieDetails} viewType='card' onMovieClick={mockOnMovieClickFn} />)
        .find('.c-movie-details-card').length,
      )
      .toBe(1);
  });

  it('should render movie details panel', () => {
    expect(
      render(<MovieDetails movie={mockedMovieDetails} viewType='card' onMovieClick={mockOnMovieClickFn} />)
      .text(),
    )
    .toMatch(/I Kill Giants/);
  });

  it('should emit output event on card click', () => {
    movieDetails.find('.c-movie-details-card').simulate('click');
    expect(mockOnMovieClickFn).toBeCalled();
  });
});
