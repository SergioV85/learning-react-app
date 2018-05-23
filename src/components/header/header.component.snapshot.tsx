import { shallow } from 'enzyme';
import * as React from 'react';
import { Header } from './header.component';

describe('Header Component Snapshot', () => {
  const mockedBackToList = jest.fn();

  it('should renders correctly', () => {
    const headerSnapshot = shallow(
      <Header showBackButton={true} onBackToList={mockedBackToList} />,
    );
    expect(headerSnapshot)
      .toMatchSnapshot();
  });
});
