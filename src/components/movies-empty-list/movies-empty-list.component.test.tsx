import { mount, render, shallow } from 'enzyme';
import * as React from 'react';
import { MoviesEmptyList } from './movies-empty-list.component';

describe('Movies Empty List component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<MoviesEmptyList />)
        .contains(
          <div className='c-movies-list c-movies-list--empty'>
            <h1 className='c-movies-list__no-found-title'>No films found</h1>
          </div>))
        .toBe(true);
  });

  it('should be selectable by class "c-movies-list--empty"', () => {
    expect(
      shallow(<MoviesEmptyList />)
        .is('.c-movies-list--empty'))
        .toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(
      mount(<MoviesEmptyList />)
      .find('.c-movies-list--empty').length)
      .toBe(1);
  });

  it('should render to static HTML', () => {
    expect(
      render(<MoviesEmptyList />)
      .text())
      .toEqual('No films found');
  });
});
