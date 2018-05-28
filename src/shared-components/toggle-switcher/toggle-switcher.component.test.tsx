import { mount, render, shallow } from 'enzyme';
import * as React from 'react';

import { ToggleSwitcher } from './toggle-switcher.component';

describe('Toggle Switcher component', () => {
  const mockedButtons = [
    {
      label: 'Rating',
      value: 'rating',
    },
    {
      label: 'Release Date',
      value: 'release_date',
    },
  ];
  const mockOnToggleChangeFn = jest.fn();
  const toggleSwitcher = shallow(
    <ToggleSwitcher
      buttonViewClass='btn-link'
      buttons={mockedButtons}
      currentValue='rating'
      name='sort-by'
      title='Sort By'
      type='radio'
      onToggleChange={mockOnToggleChangeFn}
    />);
  const toggleSwitcherInstance = toggleSwitcher.instance() as ToggleSwitcher;

  it('should render toggle switcher without throwing an error', () => {
    expect(toggleSwitcher
      .find('.c-toggle-switcher-title')
      .length,
    )
    .toEqual(1);
  });

  it('should be selectable by class "c-toggle-switcher"', () => {
    expect(
      toggleSwitcher
        .is('.c-toggle-switcher'),
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(<ToggleSwitcher
        buttonViewClass='btn-link'
        buttons={mockedButtons}
        currentValue='rating'
        name='sort-by'
        title='Sort By'
        type='radio'
        onToggleChange={mockOnToggleChangeFn}
      />)
        .find('.c-toggle-switcher').length,
      )
      .toBe(1);
  });

  it('should render toggle switcher', () => {
    expect(
      render(<ToggleSwitcher
        buttonViewClass='btn-link'
        buttons={mockedButtons}
        currentValue='rating'
        name='sort-by'
        title='Sort By'
        type='radio'
        onToggleChange={mockOnToggleChangeFn}
      />)
      .text(),
    )
    .toMatch(/Sort ByRatingRelease Date/);
  });
  it('should emit output event on toggle change', () => {
    toggleSwitcher.find('.c-toggle-switcher-button.release_date').find('input').simulate('change');
    expect(mockOnToggleChangeFn).toBeCalled();
  });
  describe('getActiveButton', () => {
    it('should return className "active" for active buttons', () => {
      toggleSwitcherInstance.getActiveButtonClass('release_date');
      expect(toggleSwitcher
        .find('.c-toggle-switcher-button.release_date')
        .hasClass('active'),
      )
      .toBeFalsy();
    });
    it('should return className "" for not-active buttons', () => {
      toggleSwitcherInstance.getActiveButtonClass('rating');
      expect(toggleSwitcher
        .find('.c-toggle-switcher-button.rating')
        .hasClass('active'),
      )
      .toBeTruthy();
    });
  });

});
