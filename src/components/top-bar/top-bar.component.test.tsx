import { mount, render, shallow } from 'enzyme';
import * as React from 'react';

import { Topbar } from './top-bar.component';

describe('Topbar component', () => {
  const mockBackToListFn = jest.fn();
  const simpleTopbar = shallow(<Topbar onBackToList={mockBackToListFn} />);
  const topbarForDetailsPage = shallow(<Topbar showBackButton={true} onBackToList={mockBackToListFn} />);

  it('should render simple logo without throwing an error', () => {
    expect(
      simpleTopbar
        .contains(
          <div className='c-topbar'>
            <span className='c-topbar__logo'>netflixroulette</span>
          </div>,
        ),
      )
      .toBe(true);
  });
  it('should show "Back to list" button on Movie details page', () => {
    expect(topbarForDetailsPage
      .find('.c-topbar__back-button')
      .length,
    )
    .toEqual(1);
  });

  it('should be selectable by class "c-topbar"', () => {
    expect(
      simpleTopbar
        .is('.c-topbar'),
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(<Topbar onBackToList={mockBackToListFn} />)
        .find('.c-topbar').length,
      )
      .toBe(1);
  });

  it('should render only logo for default view', () => {
    expect(
      render(<Topbar onBackToList={mockBackToListFn} />)
      .text(),
    )
    .toEqual('netflixroulette');
  });
  it('should render logo and button for movie details page', () => {
    expect(
      render(<Topbar showBackButton={true} onBackToList={mockBackToListFn} />)
      .text(),
    )
    .toEqual('netflixroulette Search ');
  });

  it('should emit output event on click "Back to list button', () => {
    topbarForDetailsPage.find('button').simulate('click');
    expect(mockBackToListFn).toBeCalled();
  });
});
