import * as React from 'react';
import { shallow } from 'enzyme';
import { MovieCard } from './movie-card.component';
import { mockedMovieDetails } from './../movies-list/mocked-details';

describe('Footer Component Snapshot', () => {
  it('should renders correctly', () => {
    const movieCardSnapshot = shallow(
      <MovieCard movie={mockedMovieDetails} onMovieClick={() => {}} />
    );
    expect(movieCardSnapshot)
      .toMatchSnapshot();
  });
});