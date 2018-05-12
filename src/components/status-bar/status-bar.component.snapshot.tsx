import * as React from 'react';
import { shallow } from 'enzyme';
import { StatusBarPanel } from './status-bar.component';

describe('Status Bar Panel Component Snapshot', () => {
  it('should renders correctly', () => {
    const statusBarPanelSnapshot = shallow(
      <StatusBarPanel foundMovies={2} currentSorting="genre" onChangeSorting={() => {}} />
    );
    expect(statusBarPanelSnapshot)
      .toMatchSnapshot();
  });
});