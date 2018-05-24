import { shallow } from 'enzyme';
import * as React from 'react';
import { MoviesPage } from './movies-page';

const mockedStore = {
  movies: {
    list: [],
    selectedMovie: null,
  },
  search: {
    search: '',
    searchBy: 'title',
    sortBy: 'rating',
    sortOrder: 'asc',
  },
};
const mockedProps = {
  backToList: jest.fn(),
  changeSearchInput: jest.fn(),
  changeSearchType: jest.fn(),
  changeSortingOrder: jest.fn(),
  changeSortingType: jest.fn(),
  searchMovies: jest.fn(),
  selectMovie: jest.fn(),
};

describe('Movies Page Snapshot', () => {
  it('should render default page', () => {
    const initMoviesPage = shallow(<MoviesPage
      movies={mockedStore.movies}
      search={mockedStore.search}
      backToList={mockedProps.backToList}
      changeSearchInput={mockedProps.changeSearchInput}
      changeSearchType={mockedProps.changeSearchType}
      changeSortingOrder={mockedProps.changeSortingOrder}
      changeSortingType={mockedProps.changeSortingType}
      searchMovies={mockedProps.searchMovies}
      selectMovie={mockedProps.selectMovie}
    />);
    expect(initMoviesPage)
      .toMatchSnapshot();
  });
});
