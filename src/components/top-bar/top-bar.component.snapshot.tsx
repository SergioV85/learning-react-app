import { shallow } from 'enzyme';
import * as React from 'react';
import { Topbar } from './top-bar.component';

describe('Topbar Component Snapshot', () => {
  const mockedBackToList = jest.fn();

  it('should renders correctly', () => {
    const topbarSnapshot = shallow(
      <Topbar showBackButton={true} onBackToList={mockedBackToList} />,
    );
    expect(topbarSnapshot)
      .toMatchSnapshot();
  });
});
