import { shallow } from 'enzyme';
import * as React from 'react';
import { Footer } from './footer.component';

describe('Footer Component Snapshot', () => {
  it('should renders correctly', () => {
    const footerSnapshot = shallow(
      <Footer />,
    );
    expect(footerSnapshot)
      .toMatchSnapshot();
  });
});
