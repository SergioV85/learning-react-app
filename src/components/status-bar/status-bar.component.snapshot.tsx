import { shallow } from 'enzyme';
import * as React from 'react';
import { StatusBarPanel } from './status-bar.component';

describe('Status Bar Panel Component Snapshot', () => {
  const mockedChangeSortingOrder = jest.fn();
  const mockedChangeSortingType = jest.fn();

  it('should renders correctly', () => {
    const statusBarPanelSnapshot = shallow(
      <StatusBarPanel
          foundMovies={2}
          currentSortingOrder='asc'
          currentSortingType='rating'
          onChangeSortingOrder={mockedChangeSortingOrder}
          onChangeSortingType={mockedChangeSortingType}
      />,
    );
    expect(statusBarPanelSnapshot)
      .toMatchSnapshot();
  });
});
