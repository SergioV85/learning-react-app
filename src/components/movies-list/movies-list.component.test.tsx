import { mount, render, shallow } from 'enzyme';
import * as React from 'react';
import { mockedMoviesList } from './mocked-list';
import { MoviesList } from './movies-list.component';

describe('Movies List component', () => {
  const mockOnMovieClickFn = jest.fn();

  const moviesListComponent = shallow(
    <MoviesList movies={mockedMoviesList} onMovieClick={mockOnMovieClickFn} />,
  );

  it('should render empty panel without throwing an error', () => {
    const emptyMoviesListComponent = shallow(
      <MoviesList movies={[]} onMovieClick={mockOnMovieClickFn} />,
    );
    expect(emptyMoviesListComponent.find('.c-movies-list__no-found-title'))
      .toHaveLength(1);
    expect(emptyMoviesListComponent.find('.c-movies-list__collection'))
      .toHaveLength(0);
  });
  it('should render movies list without throwing an error', () => {
    expect(moviesListComponent.find('.c-movies-list__no-found-title'))
      .toHaveLength(0);
    expect(moviesListComponent.find('.c-movies-list__collection'))
      .toHaveLength(1);
  });

  it('should be selectable by class "c-movies-list"', () => {
    expect(
      moviesListComponent
        .is('.c-movies-list'),
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(<MoviesList movies={mockedMoviesList} onMovieClick={mockOnMovieClickFn} />,
      ).find('.c-movies-list').length,
      )
      .toBe(1);
  });

  it('should render empty movies panel', () => {
    expect(
      render(<MoviesList movies={[]} onMovieClick={mockOnMovieClickFn} />)
      .text(),
    )
    .toMatch(/No films found/);
  });
  it('should render movies panel with cards', () => {
    expect(
      render(<MoviesList movies={mockedMoviesList} onMovieClick={mockOnMovieClickFn} />)
      .html(),
    )
    .toMatch(/c-movies-list__collection/);
  });
});
