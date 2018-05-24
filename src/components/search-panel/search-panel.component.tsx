import * as React from 'react';

interface ISearchPanelProps {
  searchType: string;
  search: string;
  onChangeType(): void;
  onInputChange(): void;
  onSearchMovies(): void;
}

export class SearchPanel extends React.Component<ISearchPanelProps, {}> {
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
        <div className='c-search-panel__search-type'>
          <span className='c-search-panel__search-type-title'>
            Search by
          </span>
          <div className='c-search-panel__search-type-buttons btn-group btn-group-toggle' data-toggle='buttons'>
            <label
                // tslint:disable-next-line:max-line-length
                className={`c-search-panel__search-type-button c-search-panel__search-type-button--title btn ${this.getActiveButton('title')}`}
            >
              <input
                  type='radio'
                  name='search-type'
                  value='title'
                  onChange={this.props.onChangeType}
                  checked={this.props.searchType === 'title'}
              />
                Title
            </label>
            <label
                // tslint:disable-next-line:max-line-length
                className={`c-search-panel__search-type-button c-search-panel__search-type-button--genre btn ${this.getActiveButton('genres')}`}
            >
              <input
                  type='radio'
                  name='search-type'
                  value='genres'
                  onChange={this.props.onChangeType}
                  checked={this.props.searchType === 'genres'}
              />
              Genres
            </label>
          </div>
        </div>
        <button
            className='c-search-panel__search-button'
            onClick={this.props.onSearchMovies}
        >
          Search
        </button>
      </div>
    </div>;
  }

  public getActiveButton(type: string): string {
    return this.props.searchType === type ? 'active' : '';
  }
}
