import { shallow } from 'enzyme';
import * as React from 'react';

import { mockedMovieDetails } from './../movies-list/mocked-details';
import { MovieCard } from './movie-card.component';

describe('Footer Component Snapshot', () => {
  const mockedOnMovieClick = jest.fn();

  it('should renders correctly', () => {
    const movieCardSnapshot = shallow(
      <MovieCard movie={mockedMovieDetails} onMovieClick={mockedOnMovieClick} />,
    );
    expect(movieCardSnapshot)
      .toMatchSnapshot();
  });
});
