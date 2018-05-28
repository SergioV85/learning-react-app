import { shallow } from 'enzyme';
import * as React from 'react';
import { ToggleSwitcher } from './toggle-switcher.component';

describe('Toggle Switcher Component Snapshot', () => {
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

  it('should renders correctly', () => {
    const toggleSwitcherSnapshot = shallow(
      <ToggleSwitcher
        buttonViewClass='btn-link'
        buttons={mockedButtons}
        currentValue='rating'
        name='sort-by'
        title='Sort By'
        type='radio'
        onToggleChange={mockOnToggleChangeFn}
      />,
    );
    expect(toggleSwitcherSnapshot)
      .toMatchSnapshot();
  });
});
