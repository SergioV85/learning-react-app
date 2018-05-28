import { mount, render, shallow } from 'enzyme';
import * as React from 'react';

import { StatusBarPanel } from './status-bar.component';

describe('Status Bar Panel component', () => {
  const mockOnChangeSortingOrderFn = jest.fn();
  const mockOnChangeSortingTypeFn = jest.fn();
  const statusBarPanel = shallow(
    <StatusBarPanel
      foundMovies={2}
      currentSortingOrder='asc'
      currentSortingType='release_date'
      onChangeSortingOrder={mockOnChangeSortingOrderFn}
      onChangeSortingType={mockOnChangeSortingTypeFn}
    />);

  it('should render status bar panel without throwing an error', () => {
    expect(statusBarPanel
      .find('.c-status-bar__movies-quantity')
      .text(),
    )
    .toMatch(/2 movies found/);
  });

  it('should be selectable by class "c-status-bar"', () => {
    expect(
      statusBarPanel
        .is('.c-status-bar'),
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(<StatusBarPanel
        foundMovies={2}
        currentSortingOrder='asc'
        currentSortingType='rating'
        onChangeSortingOrder={mockOnChangeSortingOrderFn}
        onChangeSortingType={mockOnChangeSortingTypeFn}
      />)
        .find('.c-status-bar').length,
      )
      .toBe(1);
  });

  it('should render movie details panel', () => {
    expect(
      render(<StatusBarPanel
        foundMovies={2}
        currentSortingOrder='asc'
        currentSortingType='rating'
        onChangeSortingOrder={mockOnChangeSortingOrderFn}
        onChangeSortingType={mockOnChangeSortingTypeFn}
      />)
      .text(),
    )
    .toMatch(/2 movies found/);
  });
});
