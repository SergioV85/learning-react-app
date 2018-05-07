import * as React from 'react';

interface SearchPanelProps {
  searchType: string;
  keyword: string;
  onChangeType(): void;
  onInputChange(): void;
  onSearchMovies(): void;
}

interface SearchPanelState {}

export class SearchPanel extends React.Component<SearchPanelProps, SearchPanelState> {
  constructor(props: SearchPanelProps) {
    super(props);
  }

  public render() {
    return <div className="c-search-panel">
      <h2 className="c-search-panel__title">Find your movie</h2>
      <input type="text"
          className="c-search-panel__input"
          placeholder="Find your movie"
          onChange={this.props.onInputChange}/>
      <div className="c-search-panel__controls-row">
        <div className="c-search-panel__search-type">
          <span className="c-search-panel__search-type-title">
            Search by
          </span>
          <div className="c-search-panel__search-type-buttons btn-group btn-group-toggle" data-toggle="buttons">
            <label className={`c-search-panel__search-type-button btn ${this.getActiveButton('title')}`}>
              <input type="radio"
                  name="search-type"
                  value="title"
                  onChange={this.props.onChangeType}
                  checked={this.props.searchType === 'title'} />
                Title
            </label>
            <label className={`c-search-panel__search-type-button btn ${this.getActiveButton('genre')}`}>
              <input type="radio"
                  name="search-type"
                  value="genre"
                  onChange={this.props.onChangeType}
                  checked={this.props.searchType === 'genre'} 
                  />
              Genre
            </label>
          </div>
        </div>
        <button className="c-search-panel__search-button"
            onClick={this.props.onSearchMovies}>
          Search
        </button>
      </div>
    </div>
  }

  private getActiveButton(type: string): string {
    return this.props.searchType === type ? 'active' : '';
  }
}