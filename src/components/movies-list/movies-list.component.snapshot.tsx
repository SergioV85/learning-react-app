import { shallow } from 'enzyme';
import * as React from 'react';
import { mockedMoviesList } from './mocked-list';
import { MoviesList } from './movies-list.component';

describe('Movies List Component Snapshot', () => {
  const mockedOnMovieClick = jest.fn();

  it('should renders correctly', () => {
    const moviesListSnapshot = shallow(
      <MoviesList movies={mockedMoviesList} onMovieClick={mockedOnMovieClick} />,
    );
    expect(moviesListSnapshot)
      .toMatchSnapshot();
  });
});
