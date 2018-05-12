import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header.component';

describe('Header Component Snapshot', () => {
  it('should renders correctly', () => {
    const headerSnapshot = shallow(
      <Header showBackButton={true} onBackToList={() => {}} />
    );
    expect(headerSnapshot)
      .toMatchSnapshot();
  });
});