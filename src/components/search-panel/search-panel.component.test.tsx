import { mount, render, shallow } from 'enzyme';
import * as React from 'react';
import { SearchPanel } from './search-panel.component';

describe('Search Panel component', () => {
  const mockOnChangeTypeFn = jest.fn();
  const mockOnInputChangeFn = jest.fn();
  const mockOnSearchMoviesFn = jest.fn();

  const searchPanelComponent = shallow(
    <SearchPanel
        searchType='title'
        keyword=''
        onChangeType={mockOnChangeTypeFn}
        onInputChange={mockOnInputChangeFn}
        onSearchMovies={mockOnSearchMoviesFn}
    />,
  );

  it('should render search panel without throwing an error', () => {
    expect(searchPanelComponent
      .find('.c-search-panel')
      .html(),
    )
    .toMatch(/Find your movie/);
  });

  it('should be selectable by class "c-search-panel"', () => {
    expect(
      searchPanelComponent
        .is('.c-search-panel'),
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(
      <SearchPanel
          searchType='title'
          keyword=''
          onChangeType={mockOnChangeTypeFn}
          onInputChange={mockOnInputChangeFn}
          onSearchMovies={mockOnSearchMoviesFn}
      />,
      ).find('.c-search-panel').length,
      )
      .toBe(1);
  });

  it('should render search panel', () => {
    expect(
      render(<SearchPanel
        searchType='title'
        keyword=''
        onChangeType={mockOnChangeTypeFn}
        onInputChange={mockOnInputChangeFn}
        onSearchMovies={mockOnSearchMoviesFn}
      />,
      )
      .text(),
    )
    .toMatch(/Find your movie/);
  });
  it('should emit output event on type change', () => {
    searchPanelComponent.find('.c-search-panel__search-type-button--genre').find('input').simulate('change');
    expect(mockOnChangeTypeFn).toBeCalled();
  });
  it('should emit output event on input change', () => {
    searchPanelComponent.find('.c-search-panel__input').simulate('change', { currentTarget: { value: 'abcd' } });
    expect(mockOnInputChangeFn).toBeCalledWith({ currentTarget: { value: 'abcd' } });
  });
  it('should emit output event on search request', () => {
    searchPanelComponent.find('.c-search-panel__search-button').simulate('click');
    expect(mockOnSearchMoviesFn).toBeCalled();
  });

});
