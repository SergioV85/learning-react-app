import * as React from 'react';

interface IStatusBarProps {
  foundMovies: number;
  currentSorting: string;
  onChangeSorting(): void;
}

export class StatusBarPanel extends React.Component<IStatusBarProps, {}> {
  constructor(props: IStatusBarProps) {
    super(props);
  }

  public render() {
    if (this.props.foundMovies > 0) {
      return <div className='c-status-bar p-2 container'>
        <span className='c-status-bar__movies-quantity'>{this.props.foundMovies} movies found</span>
        <div className='c-status-bar__sorting-type'>
          <span className='c-status-bar__sort-type-title'>
            Sort by
          </span>
          <div className='c-status-bar__sort-type-buttons btn-group btn-group-toggle' data-toggle='buttons'>
            <label
                // tslint:disable-next-line:max-line-length
                className={`c-status-bar__sort-type-button c-status-bar__sort-type-button--release-date btn btn-link ${this.getActiveButton('release-date')}`}
            >
              <input
                  type='radio'
                  name='sort-type'
                  value='release-date'
                  onChange={this.props.onChangeSorting}
                  checked={this.props.currentSorting === 'release-date'}
              />
                Title
            </label>
            <label
                // tslint:disable-next-line:max-line-length
                className={`c-status-bar__sort-type-button c-status-bar__sort-type-button--rating btn ${this.getActiveButton('rating')}`}
            >
              <input
                  type='radio'
                  name='search-type'
                  value='rating'
                  onChange={this.props.onChangeSorting}
                  checked={this.props.currentSorting === 'rating'}
              />
              Genre
            </label>
          </div>
        </div>
      </div>;
    }
    return null;
  }
  public getActiveButton(type: string): string {
    return this.props.currentSorting === type ? 'active' : '';
  }
}
