import { shallow } from 'enzyme';
import * as React from 'react';
import { mockedMovieDetails } from './../movies-list/mocked-details';
import { MovieDetailsHeader } from './movie-details-header.component';

const mockedStore = {
  selectedMovie: mockedMovieDetails,
  selectedMovieId: 123,
};
const mockedProps = {
  backToList: jest.fn(),
  requestMovieOnInit: jest.fn(),
};

describe('Movie Details Header Snapshot', () => {
  it('should render the header', () => {
    const movieDetailsHeader = shallow(<MovieDetailsHeader
      selectedMovieId={mockedStore.selectedMovieId}
      selectedMovie={mockedStore.selectedMovie}
      onBackToList={mockedProps.backToList}
      requestMovieOnInit={mockedProps.requestMovieOnInit}
    />);
    expect(movieDetailsHeader)
      .toMatchSnapshot();
  });
});
