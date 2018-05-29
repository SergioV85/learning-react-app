import * as React from 'react';

import { ErrorBoundary } from './error-boundary/error-boundary.component';
import { Footer } from './footer/footer.component';
import { Header } from './header/header.component';
import { IMovieObject, MovieDetails } from './movie-details/movie-details.component';
import { MoviesEmptyList } from './movies-empty-list/movies-empty-list.component';
import { MoviesList } from './movies-list/movies-list.component';
import { SearchPanel } from './search-panel/search-panel.component';
import { StatusBarPanel } from './status-bar/status-bar.component';

export interface IMoviesPageProps {
  movies: {
    list: IMovieObject[];
    selectedMovie: IMovieObject | null;
  };
  search: {
    searchBy: string;
    search: string;
    sortBy: string;
    sortOrder: string;
  };
  backToList(): void;
  changeSearchInput(): void;
  changeSearchType(): void;
  changeSortingOrder(): void;
  changeSortingType(): void;
  searchMovies(): void;
  selectMovie(id: number): void;
}

export class MoviesPage extends React.Component<IMoviesPageProps, {}> {
  constructor(props: IMoviesPageProps) {
    super(props);

    this.handlePanelClick = this.handlePanelClick.bind(this);
  }
  public render() {
    return (
    <div className='c-page'>
      <div className='c-page__header'>
        <div className='c-page__header-shadow'>
          <div className='p-2 container'>
            <Header
                showBackButton={this.props.movies.selectedMovie !== null}
                onBackToList={this.props.backToList}
            />
            {this.panelOrDetails}
          </div>
        </div>
      </div>
      <div className='c-page__status-bar'>
        <StatusBarPanel
            foundMovies={this.props.movies.list.length}
            currentSortingOrder={this.props.search.sortOrder}
            currentSortingType={this.props.search.sortBy}
            onChangeSortingOrder={this.props.changeSortingOrder}
            onChangeSortingType={this.props.changeSortingType}
        />
      </div>
      <div className='c-page__movies'>
        {this.moviesListOrMessage}
      </div>
      <div className='c-page__footer'>
        <div className='p-2 container'>
          <Footer />
        </div>
      </div>
    </div>
    );
  }

  private get panelOrDetails() {
    return this.props.movies.selectedMovie !== null
      ? <ErrorBoundary
            key='movie-details-wrapper'
            errorMessage='Unfortunately, error happens during showing details of selected movie'
      >
          <MovieDetails movie={this.props.movies.selectedMovie} viewType='full' onMovieClick={this.handlePanelClick} />
      </ErrorBoundary>
      : <ErrorBoundary
            key='search-panel-wrapper'
            errorMessage='Unfortunately, we can not show search panel'
      >
          <SearchPanel
              searchType={this.props.search.searchBy}
              search={this.props.search.search}
              onChangeType={this.props.changeSearchType}
              onInputChange={this.props.changeSearchInput}
              onSearchMovies={this.props.searchMovies}
          />
      </ErrorBoundary>;
  }
  private get moviesListOrMessage() {
    return this.props.movies.list.length !== 0
      ? <ErrorBoundary key='movies-list-wrapper' errorMessage='Unfortunately, we cant show movies list'>
          <MoviesList
              movies={this.props.movies.list}
              onMovieClick={this.props.selectMovie}
          />
        </ErrorBoundary>
      : <ErrorBoundary key='movies-empty-message-wrapper' errorMessage='Unfortunately, we cant show message'>
          <MoviesEmptyList />
        </ErrorBoundary>;
  }

  // tslint:disable-next-line:no-empty
  private handlePanelClick() {}
}
