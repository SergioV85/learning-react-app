import { shallow } from 'enzyme';
import * as React from 'react';
import { SearchPanel } from './search-panel.component';

describe('Search Panel Component Snapshot', () => {
  const mockedFn = jest.fn();

  it('should renders correctly', () => {
    const searchPanelSnapshot = shallow(
      <SearchPanel
        searchBy='title'
        searchQuery=''
        search=''
        onChangeType={mockedFn}
        onInputChange={mockedFn}
        onSearchMovies={mockedFn}
        doSearchOnInit={mockedFn}
      />,
    );
    expect(searchPanelSnapshot)
      .toMatchSnapshot();
  });
});
