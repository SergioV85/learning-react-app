import * as React from 'react';
import { shallow } from 'enzyme';
import { MoviesList } from './movies-list.component';
import { mockedMoviesList } from './mocked-list';

describe('Movies List Component Snapshot', () => {
  it('should renders correctly', () => {
    const moviesListSnapshot = shallow(
      <MoviesList movies={mockedMoviesList} onMovieClick={() => {}} />
    );
    expect(moviesListSnapshot)
      .toMatchSnapshot();
  });
});