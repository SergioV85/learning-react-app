import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { MoviesPage } from './movies-page';
import { Header } from './header/header.component';
import { SearchPanel } from './search-panel/search-panel.component';
import { StatusBarPanel } from './status-bar/status-bar.component';
import { MoviesList } from './movies-list/movies-list.component';
import { MovieCard } from './movie-card/movie-card.component';
import { MovieDetails } from './movie-details/movie-details.component';
import { Footer } from './footer/footer.component';

import { mockedMoviesList } from './movies-list/mocked-list';
import { mockedMovieDetails } from './movies-list/mocked-details';

const mockedState = {
  movies: {
    list: [],
    selectedMovie: null
  },
  search: {
    keyword: '',
    sortBy: 'rating',
    type: 'title',
  }
};

describe('MoviesPage component', () => {
  const moviesPage = shallow(<MoviesPage />);
  const moviePageInstance = moviesPage.instance() as MoviesPage;

  describe('Init Rendering', () => {
    it('should render header', () => {
      expect(moviesPage.find(Header))
        .toHaveLength(1);
    });
    it('should render search panel', () => {
      expect(moviesPage.find(SearchPanel))
        .toHaveLength(1);
    });
    it('should render empty status bar', () => {
      expect(moviesPage
        .find(StatusBarPanel)
        .html()
      )
      .toEqual('');
    });
    it('should render empty movies list', () => {
      expect(moviesPage
        .find(MoviesList)
        .dive()
        .find('.c-movies-list__no-found-title')
      )
      .toHaveLength(1);
    });
    it('should render footer', () => {
      expect(moviesPage.find(Footer))
        .toHaveLength(1);
    });
    it('should mount in a full DOM', () => {
      expect(
        mount(<MoviesPage />)
          .find('.c-page').length
        )
        .toBe(1);
    });
  });
  describe('ChangeSearchInput', () => {
    beforeAll(() => {
      const event = {
        currentTarget: {
          value: 'abcd'
        }
      } as React.ChangeEvent<HTMLInputElement>;
      moviePageInstance.changeSearchInput(event);
    });
    afterAll(() => {
      moviesPage.setState(mockedState);
    });
    it('should update state', () => {
      expect(moviesPage.state().search.keyword)
        .toEqual('abcd');
    });
  });
  describe('ChangeSearchType', () => {
    beforeAll(() => {
      const event = {
        currentTarget: {
          value: 'genre'
        }
      } as React.ChangeEvent<HTMLInputElement>;
      moviePageInstance.changeSearchType(event);
    });
    afterAll(() => {
      moviesPage.setState(mockedState);
    });
    it('should update state', () => {
      expect(moviesPage.state().search.type)
        .toEqual('genre');
    });
  });
  describe('ChangeSortingType', () => {
    beforeAll(() => {
      const event = {
        currentTarget: {
          value: 'genre'
        }
      } as React.ChangeEvent<HTMLInputElement>;
      moviePageInstance.changeSortingType(event);
    });
    afterAll(() => {
      moviesPage.setState(mockedState);
    });
    it('should update state', () => {
      expect(moviesPage.state().search.sortBy)
        .toEqual('genre');
    });
  });
  describe('SearchMovies', () => {
    beforeAll(() => {
      moviesPage.setState({
        search: {
          keyword: 'abcd',
          type: 'genre',
          sortBy: 'genre'
        }
      });
      moviePageInstance.searchMovies();
      moviesPage.update();
    });
    afterAll(() => {
      moviesPage.setState(mockedState);
    });
    it('should update state', () => {
      expect(moviesPage.state().movies.list)
        .toEqual(mockedMoviesList);
    });
    it('should render a status bar with movie quantity', () => {
      expect(moviesPage
          .find(StatusBarPanel)
          .dive()
          .find('.c-status-bar__movies-quantity')
          .text()
        )
        .toMatch(/5 movies found/);
    });
    it('should render a page with movies list', () => {
      expect(moviesPage
          .find(MoviesList)
          .dive()
          .find(MovieCard)
        )
        .toHaveLength(5);
    });
  });
  describe('SelectMovie', () => {
    beforeAll(() => {
      moviesPage.setState({
        movies: {
          list: mockedMoviesList
        }
      });
      moviePageInstance.selectMovie(1)
    });
    afterAll(() => {
      moviesPage.setState(mockedState);
    });
    it('should update state', () => {
      expect(moviesPage.state().movies.selectedMovie)
        .toEqual(mockedMovieDetails);
    });
    it('should render a movie details in header', () => {
      expect(moviesPage.find(MovieDetails))
        .toHaveLength(1);
    });
  });
  describe('BackToList', () => {
    beforeAll(() => {
      moviesPage.setState({
        movies: {
          list: mockedMoviesList,
          selectedMovie: mockedMovieDetails
        }
      });
      moviePageInstance.backToList();
      moviesPage.update();
    });
    afterAll(() => {
      moviesPage.setState(mockedState);
    });
    it('should set movie details to null', () => {
      expect(moviesPage.state().movies.selectedMovie)
        .toEqual(null);
    });
    it('should render search panel', () => {
      expect(moviesPage.find(SearchPanel))
        .toHaveLength(1);
    });
    it('should not render movie details', () => {
      expect(moviesPage.find(MovieDetails))
        .toHaveLength(0);
    });
  });
});