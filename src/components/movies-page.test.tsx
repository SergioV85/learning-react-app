import { mount, shallow } from 'enzyme';
import * as React from 'react';

import { Footer } from './footer/footer.component';
import { Header } from './header/header.component';
import { MovieDetails } from './movie-details/movie-details.component';
import { MoviesEmptyList } from './movies-empty-list/movies-empty-list.component';
import { MoviesList } from './movies-list/movies-list.component';
import { MoviesPage } from './movies-page';
import { SearchPanel } from './search-panel/search-panel.component';
import { StatusBarPanel } from './status-bar/status-bar.component';

import { mockedMovieDetails } from './movies-list/mocked-details';
import { mockedMoviesList } from './movies-list/mocked-list';

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

const generateMoviesPage = (store: any) => {
  return shallow(<MoviesPage
    movies={store.movies}
    search={store.search}
    backToList={mockedProps.backToList}
    changeSearchInput={mockedProps.changeSearchInput}
    changeSearchType={mockedProps.changeSearchType}
    changeSortingOrder={mockedProps.changeSortingOrder}
    changeSortingType={mockedProps.changeSortingType}
    searchMovies={mockedProps.searchMovies}
    selectMovie={mockedProps.selectMovie}
  />);
};

describe('MoviesPage component', () => {
  const defaultMoviesPage = generateMoviesPage(mockedStore);

  describe('Init Rendering', () => {
    it('should render header', () => {
      expect(defaultMoviesPage.find(Header))
        .toHaveLength(1);
    });
    it('should render search panel', () => {
      expect(defaultMoviesPage.find(SearchPanel))
        .toHaveLength(1);
    });
    it('should render empty status bar', () => {
      expect(defaultMoviesPage
        .find(StatusBarPanel)
        .html(),
      )
      .toEqual('');
    });
    it('should render empty movies list', () => {
      expect(defaultMoviesPage
        .find(MoviesEmptyList)
        .dive()
        .find('.c-movies-list__no-found-title'),
      )
      .toHaveLength(1);
    });
    it('should render footer', () => {
      expect(defaultMoviesPage.find(Footer))
        .toHaveLength(1);
    });
    it('should mount in a full DOM', () => {
      expect(
        mount(<MoviesPage
          movies={mockedStore.movies}
          search={mockedStore.search}
          backToList={mockedProps.backToList}
          changeSearchInput={mockedProps.changeSearchInput}
          changeSearchType={mockedProps.changeSearchType}
          changeSortingOrder={mockedProps.changeSortingOrder}
          changeSortingType={mockedProps.changeSortingType}
          searchMovies={mockedProps.searchMovies}
          selectMovie={mockedProps.selectMovie}
        />)
          .find('.c-page').length,
        )
        .toBe(1);
    });
  });
  describe('SearchMovies', () => {
    const moviePageWithList = generateMoviesPage({
      movies: {
        list: mockedMoviesList,
        selectedMovie: null,
      },
      search: {
        search: 'abcd',
        searchBy: 'genres',
        sortBy: 'genres',
      },
    });
    it('should render a status bar with movie quantity', () => {
      expect(moviePageWithList
          .find(StatusBarPanel)
          .dive()
          .find('.c-status-bar__movies-quantity')
          .text(),
        )
        .toMatch(/5 movies found/);
    });
    it('should render a page with movies list', () => {
      expect(moviePageWithList
          .find(MoviesList)
          .dive()
          .find(MovieDetails),
        )
        .toHaveLength(5);
    });
  });
  describe('SelectMovie', () => {
    const moviePageWithDetails = generateMoviesPage({
      movies: {
        list: mockedMoviesList,
        selectedMovie: mockedMovieDetails,
      },
      search: {
        search: 'abcd',
        searchBy: 'genres',
        sortBy: 'genres',
      },
    });
    it('should render a movie details in header', () => {
      expect(moviePageWithDetails.find(MovieDetails))
        .toHaveLength(1);
    });
  });
});
