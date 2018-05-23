import { mount, render, shallow } from 'enzyme';
import * as React from 'react';
import { mockedMovieDetails } from './../movies-list/mocked-details';
import { MovieCard } from './movie-card.component';

describe('Movie Card component', () => {
  const mockOnMovieClickFn = jest.fn();
  const movieCard = shallow(<MovieCard movie={mockedMovieDetails} onMovieClick={mockOnMovieClickFn} />);

  it('should render movie card without throwing an error', () => {
    expect(movieCard
        .find('.c-movie-card__title')
        .html(),
      )
      .toMatch(/I Kill Giants/);
  });

  it('should be selectable by class "c-movie-card"', () => {
    expect(
      movieCard
        .is('.c-movie-card'),
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(<MovieCard movie={mockedMovieDetails} onMovieClick={mockOnMovieClickFn} />)
        .find('.c-movie-card').length,
      )
      .toBe(1);
  });
  it('should render movie card', () => {
    expect(
      render(<MovieCard movie={mockedMovieDetails} onMovieClick={mockOnMovieClickFn} />)
      .text(),
    )
    .toMatch(/I Kill Giants/);
  });

  it('should emit output event on click card', () => {
    movieCard.simulate('click');
    expect(mockOnMovieClickFn).toBeCalled();
  });
});
