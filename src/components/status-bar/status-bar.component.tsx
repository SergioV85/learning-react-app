import * as React from 'react';

interface IStatusBarProps {
  foundMovies: number;
  currentSortingOrder: string;
  currentSortingType: string;
  onChangeSortingOrder(): void;
  onChangeSortingType(): void;
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
                className={`c-status-bar__sort-type-button c-status-bar__sort-type-button--release-date btn btn-link ${this.getActiveSortTypeButton('release_date')}`}
            >
              <input
                  type='radio'
                  name='sort-type'
                  value='release_date'
                  onChange={this.props.onChangeSortingType}
                  checked={this.props.currentSortingType === 'release_date'}
              />
                Release date
            </label>
            <label
                // tslint:disable-next-line:max-line-length
                className={`c-status-bar__sort-type-button c-status-bar__sort-type-button--rating btn ${this.getActiveSortTypeButton('rating')}`}
            >
              <input
                  type='radio'
                  name='search-type'
                  value='rating'
                  onChange={this.props.onChangeSortingType}
                  checked={this.props.currentSortingType === 'rating'}
              />
              Rating
            </label>
          </div>
        </div>
        <div className='c-status-bar__sorting-order'>
          <span className='c-status-bar__sort-order-title'>
            Sort by
          </span>
          <div className='c-status-bar__sort-order-buttons btn-group btn-group-toggle' data-toggle='buttons'>
            <label
                // tslint:disable-next-line:max-line-length
                className={`c-status-bar__sort-order-button c-status-bar__sort-order-button--asc btn ${this.getActiveSortOrderButton('asc')}`}
            >
              <input
                  type='radio'
                  name='sort-order'
                  value='asc'
                  onChange={this.props.onChangeSortingOrder}
                  checked={this.props.currentSortingOrder === 'asc'}
              />
                <i className='icon-arrow-up' />
            </label>
            <label
                // tslint:disable-next-line:max-line-length
                className={`c-status-bar__sort-order-button c-status-bar__sort-order-button--desc btn ${this.getActiveSortOrderButton('desc')}`}
            >
              <input
                  type='radio'
                  name='search-order'
                  value='desc'
                  onChange={this.props.onChangeSortingOrder}
                  checked={this.props.currentSortingOrder === 'desc'}
              />
              <i className='icon-arrow-down' />
            </label>
          </div>
        </div>
      </div>;
    }
    return null;
  }
  public getActiveSortTypeButton(type: string): string {
    return this.props.currentSortingType === type ? 'active' : '';
  }
  public getActiveSortOrderButton(type: string): string {
    return this.props.currentSortingOrder === type ? 'active' : '';
  }
}
