import * as React from 'react';
import { ToggleSwitcher } from './../../shared-components/toggle-switcher/toggle-switcher.component';

interface IStatusBarProps {
  foundMovies: number;
  currentSortingOrder: string;
  currentSortingType: string;
  onChangeSortingOrder(): void;
  onChangeSortingType(): void;
}

export class StatusBarPanel extends React.Component<IStatusBarProps, {}> {
  private sortingOrderButtons = [
    {
      icon: 'icon-arrow-up',
      value: 'asc',
    },
    {
      icon: 'icon-arrow-down',
      value: 'desc',
    },
  ];
  private sortingTypeButtons = [
    {
      label: 'Release date',
      value: 'release_date',
    },
    {
      label: 'Rating',
      value: 'rating',
    },
  ];

  constructor(props: IStatusBarProps) {
    super(props);
  }

  public render() {
    if (this.props.foundMovies > 0) {
      return <div className='c-status-bar p-2 container'>
        <span className='c-status-bar__movies-quantity'>{this.props.foundMovies} movies found</span>
        <ToggleSwitcher
            cssClass='c-status-bar__sorting-type'
            title='Sort by'
            buttonViewClass='btn-link'
            buttons={this.sortingTypeButtons}
            currentValue={this.props.currentSortingType}
            name='sort-type'
            type='radio'
            onToggleChange={this.props.onChangeSortingType}
        />
        <ToggleSwitcher
            cssClass='c-status-bar__sorting-order'
            title='Sort order'
            buttonViewClass=''
            buttons={this.sortingOrderButtons}
            currentValue={this.props.currentSortingOrder}
            name='sort-order'
            type='radio'
            onToggleChange={this.props.onChangeSortingOrder}
        />
      </div>;
    }
    return null;
  }
}
