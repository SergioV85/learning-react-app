import { shallow } from 'enzyme';
import * as React from 'react';
import { MoviesEmptyList } from './movies-empty-list.component';

describe('Movies Empty List Component Snapshot', () => {
  it('should renders correctly', () => {
    const moviesEmptyListSnapshot = shallow(
      <MoviesEmptyList />,
    );
    expect(moviesEmptyListSnapshot)
      .toMatchSnapshot();
  });
});
