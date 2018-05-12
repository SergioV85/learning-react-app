import * as React from 'react';
import { shallow, mount, render } from 'enzyme';

import { MovieDetails } from './movie-details.component';
import { mockedMovieDetails } from './../movies-list/mocked-details';

describe('Movie Details component', () => {
  const movieDetails = shallow(<MovieDetails selectedMovie={mockedMovieDetails} />);

  it('should render movie card without throwing an error', () => {
    expect(movieDetails
      .find('.c-movie-details__title')
      .html()
    )
    .toMatch(/I Kill Giants/);
  });

  it('should be selectable by class "c-movie-details"', () => {
    expect(
      movieDetails
        .is('.c-movie-details')
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(<MovieDetails selectedMovie={mockedMovieDetails} />)
        .find('.c-movie-details').length
      )
      .toBe(1);
  });

  it('should render movie details panel', () => {
    expect(
      render(<MovieDetails selectedMovie={mockedMovieDetails} />)
      .text()
    )
    .toMatch(/I Kill Giants/);
  });
});