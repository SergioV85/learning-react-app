import * as React from 'react';

interface StatusBarProps {
  foundMovies: number;
  currentSorting: string;
  onChangeSorting(): void;
}
  
interface StatusBarState {}
  
export class StatusBarPanel extends React.Component<StatusBarProps, StatusBarState> {
  constructor(props: StatusBarProps) {
    super(props);
  }

  public render() {
    if (this.props.foundMovies > 0) {
      return <div className="c-status-bar p-2 container">
        <span className="c-status-bar__movies-quantity">{this.props.foundMovies} movies found</span>
        <div className="c-status-bar__sorting-type">
          <span className="c-status-bar__sort-type-title">
            Sort by
          </span>
          <div className="c-status-bar__sort-type-buttons btn-group btn-group-toggle" data-toggle="buttons">
            <label className={`c-status-bar__sort-type-button btn btn-link ${this.getActiveButton('release-date')}`}>
              <input type="radio"
                  name="sort-type"
                  value="release-date"
                  onChange={this.props.onChangeSorting}
                  checked={this.props.currentSorting === 'release-date'} />
                Title
            </label>
            <label className={`c-status-bar__sort-type-button btn ${this.getActiveButton('rating')}`}>
              <input type="radio"
                  name="search-type"
                  value="rating"
                  onChange={this.props.onChangeSorting}
                  checked={this.props.currentSorting === 'rating'} 
                  />
              Genre
            </label>
          </div>
        </div>
      </div>
    }
    return null;
  }
  private getActiveButton(type: string): string {
    return this.props.currentSorting === type ? 'active' : '';
  }
}