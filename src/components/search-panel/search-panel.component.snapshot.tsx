import * as React from 'react';
import { shallow } from 'enzyme';
import { SearchPanel } from './search-panel.component';

describe('Search Panel Component Snapshot', () => {
  it('should renders correctly', () => {
    const searchPanelSnapshot = shallow(
      <SearchPanel searchType="tilte"
        keyword=""
        onChangeType={() => {}}
        onInputChange={() => {}}
        onSearchMovies={() => {}} />
    );
    expect(searchPanelSnapshot)
      .toMatchSnapshot();
  });
});