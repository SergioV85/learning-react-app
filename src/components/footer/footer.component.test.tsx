import { mount, render, shallow } from 'enzyme';
import * as React from 'react';

import { Footer } from './footer.component';

describe('Footer component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<Footer />)
        .contains(<div className='c-footer'><span className='c-footer__logo'>netflixroulette</span></div>))
        .toBe(true);
  });

  it('should be selectable by class "c-page__footer"', () => {
    expect(
      shallow(<Footer />)
        .is('.c-page__footer'))
        .toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(
      mount(<Footer />)
      .find('.c-footer').length)
      .toBe(1);
  });

  it('should render to static HTML', () => {
    expect(
      render(<Footer />)
      .text())
      .toEqual('netflixroulette');
  });
});
