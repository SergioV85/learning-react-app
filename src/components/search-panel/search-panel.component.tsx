import * as React from 'react';
import { ToggleSwitcher } from './../../shared-components/toggle-switcher/toggle-switcher.component';

interface ISearchPanelProps {
  searchType: string;
  search: string;
  onChangeType(): void;
  onInputChange(): void;
  onSearchMovies(): void;
}

export class SearchPanel extends React.Component<ISearchPanelProps, {}> {
  private searchToggleButtons = [
    {
      label: 'Title',
      value: 'title',
    },
    {
      label: 'Genres',
      value: 'genres',
    },
  ];

  constructor(props: ISearchPanelProps) {
    super(props);
  }

  public render() {
    return <div className='c-search-panel'>
      <h2 className='c-search-panel__title'>Find your movie</h2>
      <input
          type='text'
          className='c-search-panel__input'
          placeholder='Find your movie'
          value={this.props.search}
          onChange={this.props.onInputChange}
      />
      <div className='c-search-panel__controls-row'>
        <ToggleSwitcher
            title='Search by'
            buttonViewClass='c-search-panel__search-type-button--title'
            buttons={this.searchToggleButtons}
            currentValue={this.props.searchType}
            name='search-type'
            type='radio'
            onToggleChange={this.props.onChangeType}
        />
        <button
            className='c-search-panel__search-button'
            onClick={this.props.onSearchMovies}
        >
          Search
        </button>
      </div>
    </div>;
  }
}
