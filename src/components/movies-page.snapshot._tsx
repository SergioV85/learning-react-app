import * as React from 'react';
import { shallow } from 'enzyme';
import { MoviesPage } from './movies-page';

describe('Movies Page Snapshot', () => {
  it('should render default page', () => {
    const initMoviesPage = shallow(<MoviesPage />);
    expect(initMoviesPage)
      .toMatchSnapshot();
  });
});