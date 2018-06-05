import { mount, shallow } from 'enzyme';
import * as React from 'react';

import { MovieDetails } from './../movie-details/movie-details.component';
import { mockedMovieDetails } from './../movies-list/mocked-details';
import { Topbar } from './../top-bar/top-bar.component';

import { MovieDetailsHeader } from './movie-details-header.component';

const mockedStore = {
  selectedMovie: mockedMovieDetails,
  selectedMovieId: 123,
};
const mockedProps = {
  backToList: jest.fn(),
  requestMovieOnInit: jest.fn(),
};

const generateHeader = (store: any) => {
  return shallow(<MovieDetailsHeader
    selectedMovieId={store.selectedMovieId}
    selectedMovie={store.selectedMovie}
    onBackToList={mockedProps.backToList}
    requestMovieOnInit={mockedProps.requestMovieOnInit}
  />);
};

describe('Header component', () => {
  const defaultMoviesPage = generateHeader(mockedStore);

  describe('Init Rendering', () => {
    it('should render topbar', () => {
      expect(defaultMoviesPage.find(Topbar))
        .toHaveLength(1);
    });
    it('should render a movie details in header', () => {
      expect(defaultMoviesPage.find(MovieDetails))
        .toHaveLength(1);
    });
    it('should mount in a full DOM', () => {
      expect(
        mount(<MovieDetailsHeader
          selectedMovieId={mockedStore.selectedMovieId}
          selectedMovie={mockedStore.selectedMovie}
          onBackToList={mockedProps.backToList}
          requestMovieOnInit={mockedProps.requestMovieOnInit}
        />)
          .find('.c-page__header').length,
        )
        .toBe(1);
    });
  });
});
