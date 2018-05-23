import { shallow } from 'enzyme';
import * as React from 'react';
import { SearchPanel } from './search-panel.component';

describe('Search Panel Component Snapshot', () => {
  const mockedFn = jest.fn();

  it('should renders correctly', () => {
    const searchPanelSnapshot = shallow(
      <SearchPanel
        searchType='tilte'
        keyword=''
        onChangeType={mockedFn}
        onInputChange={mockedFn}
        onSearchMovies={mockedFn}
      />,
    );
    expect(searchPanelSnapshot)
      .toMatchSnapshot();
  });
});
