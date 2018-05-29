import { shallow } from 'enzyme';
import * as React from 'react';
import { mockedMovieDetails } from './../movies-list/mocked-details';
import { MovieDetails } from './movie-details.component';

describe('Movie Details Component Snapshot', () => {
  const mockOnMovieClickFn = jest.fn();

  it('should renders correctly', () => {
    const movieDetailsSnapshot = shallow(
      <MovieDetails  movie={mockedMovieDetails} viewType='card' onMovieClick={mockOnMovieClickFn} />,
    );
    expect(movieDetailsSnapshot)
      .toMatchSnapshot();
  });
});
