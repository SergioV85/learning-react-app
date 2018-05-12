import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import { SearchPanel } from './search-panel.component';

describe('Search Panel component', () => {
  const mockOnChangeTypeFn = jest.fn();
  const mockOnInputChangeFn = jest.fn();
  const mockOnSearchMoviesFn = jest.fn();

  const searchPanelComponent = shallow(
    <SearchPanel searchType="tilte"
      keyword=""
      onChangeType={mockOnChangeTypeFn}
      onInputChange={mockOnInputChangeFn}
      onSearchMovies={mockOnSearchMoviesFn} />
  );
  const searchPanelInstance = searchPanelComponent.instance() as SearchPanel;

  it('should render search panel without throwing an error', () => {
    expect(searchPanelComponent
      .find('.c-search-panel')
      .html()
    )
    .toMatch(/Find your movie/);
  });

  it('should be selectable by class "c-search-panel"', () => {
    expect(
      searchPanelComponent
        .is('.c-search-panel')
      )
      .toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(
      mount(<SearchPanel searchType="tilte"
        keyword=""
        onChangeType={() => {}}
        onInputChange={() => {}}
        onSearchMovies={() => {}} />
      ).find('.c-search-panel').length
      )
      .toBe(1);
  });

  it('should render search panel', () => {
    expect(
      render(<SearchPanel searchType="tilte"
        keyword=""
        onChangeType={() => {}}
        onInputChange={() => {}}
        onSearchMovies={() => {}} />
      )
      .text()
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