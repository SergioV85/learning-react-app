import { shallow } from 'enzyme';
import * as React from 'react';
import { StatusBarPanel } from './status-bar.component';

describe('Status Bar Panel Component Snapshot', () => {
  const mockedChangeSorting = jest.fn();

  it('should renders correctly', () => {
    const statusBarPanelSnapshot = shallow(
      <StatusBarPanel foundMovies={2} currentSorting='genre' onChangeSorting={mockedChangeSorting} />,
    );
    expect(statusBarPanelSnapshot)
      .toMatchSnapshot();
  });
});
