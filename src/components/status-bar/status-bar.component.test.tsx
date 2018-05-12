import * as React from 'react';
import { shallow, mount, render } from 'enzyme';

import { StatusBarPanel } from './status-bar.component';

describe('Status Bar Panel component', () => {
  const mockOnChangeSortingFn = jest.fn();
  const statusBarPanel = shallow(<StatusBarPanel foundMovies={2} currentSorting="release-date" onChangeSorting={mockOnChangeSortingFn} />);
  const statusBarPanelInstance = statusBarPanel.instance() as StatusBarPanel;

  it('should render status bar panel without throwing an error', () => {
    expect(statusBarPanel
      .find('.c-status-bar__movies-quantity')
      .text()
    )
    .toMatch(/2 movies found/);
  });

  it('should be selectable by class "c-status-bar"', () => {
    expect(
      statusBarPanel
        .is('.c-status-bar')
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(<StatusBarPanel foundMovies={2} currentSorting="genre" onChangeSorting={mockOnChangeSortingFn} />)
        .find('.c-status-bar').length
      )
      .toBe(1);
  });

  it('should render movie details panel', () => {
    expect(
      render(<StatusBarPanel foundMovies={2} currentSorting="genre" onChangeSorting={mockOnChangeSortingFn} />)
      .text()
    )
    .toMatch(/2 movies found/);
  });
  it('should emit output event on sorting change', () => {
    statusBarPanel.find('.c-status-bar__sort-type-button--rating').find('input').simulate('change');
    expect(mockOnChangeSortingFn).toBeCalled();
  });
  describe('getActiveButton', () => {
    it('should return className "active" for active buttons', () => {
      statusBarPanelInstance.getActiveButton('release-date');
      expect(statusBarPanel
        .find('.c-status-bar__sort-type-button--release-date')
        .hasClass('active')
      )
      .toBeTruthy();
    });
    it('should return className "" for not-active buttons', () => {
      statusBarPanelInstance.getActiveButton('rating');
      expect(statusBarPanel
        .find('.c-status-bar__sort-type-button--rating')
        .hasClass('active')
      )
      .toBeFalsy();
    })
  });

});