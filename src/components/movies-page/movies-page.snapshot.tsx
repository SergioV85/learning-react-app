import { shallow } from 'enzyme';
import * as React from 'react';
import { MoviesPage } from './movies-page';

const mockedStore = {
  movies: [],
};
const mockedProps = {
  selectMovie: jest.fn(),
};

describe('Movies Page Snapshot', () => {
  it('should render default page', () => {
    const initMoviesPage = shallow(<MoviesPage
      movies={mockedStore.movies}
      selectMovie={mockedProps.selectMovie}
    />);
    expect(initMoviesPage)
      .toMatchSnapshot();
  });
});
