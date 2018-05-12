import * as React from 'react';
import { shallow } from 'enzyme';
import { MovieDetails } from './movie-details.component';
import { mockedMovieDetails } from './../movies-list/mocked-details';

describe('Movie Details Component Snapshot', () => {
  it('should renders correctly', () => {
    const movieDetailsSnapshot = shallow(
      <MovieDetails selectedMovie={mockedMovieDetails} />
    );
    expect(movieDetailsSnapshot)
      .toMatchSnapshot();
  });
});