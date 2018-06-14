import * as React from 'react';
import { ErrorBoundary } from '../error-boundary/error-boundary.component';
import { ToggleSwitcher } from './../../shared-components/toggle-switcher/toggle-switcher.component';
import { Topbar } from './../top-bar/top-bar.component';

interface ISearchPanelProps {
  searchBy: string;
  searchQuery: string;
  search: string;
  onChangeType(): void;
  onInputChange(): void;
  onSearchMovies(): void;
  doSearchOnInit(query: string): void;
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

    this.handlePanelClick = this.handlePanelClick.bind(this);
  }

  public componentDidMount() {
    this.props.doSearchOnInit(this.props.searchQuery);
  }

  public render() {
    return (
      <div className='c-page__header'>
        <div className='c-page__header-shadow'>
          <div className='p-2 container'>
            <Topbar
                showBackButton={false}
                onBackToList={this.handlePanelClick}
            />
            <ErrorBoundary
                key='search-panel-wrapper'
                errorMessage='Unfortunately, we can not show search panel'
            >
            <div className='c-search-panel'>
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
                    currentValue={this.props.searchBy}
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
            </ErrorBoundary>
          </div>
        </div>
      </div>
    );
  }

  // tslint:disable-next-line:no-empty
  private handlePanelClick() {}
}
