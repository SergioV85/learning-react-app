import { shallow } from 'enzyme';
import * as React from 'react';
import { mockedMovieDetails } from './../movies-list/mocked-details';
import { MovieDetails } from './movie-details.component';

describe('Movie Details Component Snapshot', () => {
  it('should renders correctly', () => {
    const movieDetailsSnapshot = shallow(
      <MovieDetails selectedMovie={mockedMovieDetails} />,
    );
    expect(movieDetailsSnapshot)
      .toMatchSnapshot();
  });
});
