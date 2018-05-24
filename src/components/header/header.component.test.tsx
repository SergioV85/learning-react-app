import { mount, render, shallow } from 'enzyme';
import * as React from 'react';

import { Header } from './header.component';

describe('Header component', () => {
  const mockBackToListFn = jest.fn();
  const simpleHeader = shallow(<Header onBackToList={mockBackToListFn} />);
  const headerForDetailsPage = shallow(<Header showBackButton={true} onBackToList={mockBackToListFn} />);

  it('should render simple logo without throwing an error', () => {
    expect(
      simpleHeader
        .contains(
          <div className='c-header'>
            <span className='c-header__logo'>netflixroulette</span>
          </div>,
        ),
      )
      .toBe(true);
  });
  it('should show "Back to list" button on Movie details page', () => {
    expect(headerForDetailsPage
      .find('.c-header__back-button')
      .length,
    )
    .toEqual(1);
  });

  it('should be selectable by class "c-header"', () => {
    expect(
      simpleHeader
        .is('.c-header'),
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(<Header onBackToList={mockBackToListFn} />)
        .find('.c-header').length,
      )
      .toBe(1);
  });

  it('should render only logo for default view', () => {
    expect(
      render(<Header onBackToList={mockBackToListFn} />)
      .text(),
    )
    .toEqual('netflixroulette');
  });
  it('should render logo and button for movie details page', () => {
    expect(
      render(<Header showBackButton={true} onBackToList={mockBackToListFn} />)
      .text(),
    )
    .toEqual('netflixroulette Search ');
  });

  it('should emit output event on click "Back to list button', () => {
    headerForDetailsPage.find('button').simulate('click');
    expect(mockBackToListFn).toBeCalled();
  });
});
