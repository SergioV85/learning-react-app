import * as React from 'react';

import { ErrorBoundary } from './error-boundary/error-boundary.component';
import { Footer } from './footer/footer.component';
import { Header } from './header/header.component';
import { IMovieObject } from './movie-card/movie-card.component';
import { MovieDetails } from './movie-details/movie-details.component';
import { MoviesList } from './movies-list/movies-list.component';
import { SearchPanel } from './search-panel/search-panel.component';
import { StatusBarPanel } from './status-bar/status-bar.component';

export interface IMoviesPageProps {
  movies: {
    list: IMovieObject[];
    selectedMovie: IMovieObject | null;
  };
  search: {
    keyword: string;
    sortBy: string;
    type: string;
  };
  backToList(): void;
  changeSearchInput(): void;
  changeSearchType(): void;
  changeSortingType(): void;
  searchMovies(): void;
  selectMovie(): void;
}

export class MoviesPage extends React.Component<IMoviesPageProps, {}> {
  private backToList: () => void;
  private changeSortingType: () => void;
  private selectMovie: () => void;

  constructor(props: IMoviesPageProps) {
    super(props);
    this.backToList = props.backToList;
    this.changeSortingType = props.changeSortingType;
    this.selectMovie = props.selectMovie;
  }
  public render() {
    return (
    <div className='c-page'>
      <div className='c-page__header'>
        <div className='c-page__header-shadow'>
          <div className='p-2 container'>
            <Header
                showBackButton={this.props.movies.selectedMovie !== null}
                onBackToList={this.backToList}
            />
            {this.panelOrDetails}
          </div>
        </div>
      </div>
      <div className='c-page__status-bar'>
        <StatusBarPanel
            foundMovies={this.props.movies.list.length}
            currentSorting={this.props.search.sortBy}
            onChangeSorting={this.changeSortingType}
        />
      </div>
      <div className='c-page__movies'>
        <ErrorBoundary key='movies-list-wrapper' errorMessage='Unfortunately, we cant show movies list'>
          <MoviesList
              movies={this.props.movies.list}
              onMovieClick={this.selectMovie}
          />
        </ErrorBoundary>
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
          <MovieDetails selectedMovie={this.props.movies.selectedMovie} />
      </ErrorBoundary>
      : <ErrorBoundary
            key='search-panel-wrapper'
            errorMessage='Unfortunately, we can not show search panel'
      >
          <SearchPanel
              searchType={this.props.search.type}
              keyword={this.props.search.keyword}
              onChangeType={this.props.changeSearchType}
              onInputChange={this.props.changeSearchInput}
              onSearchMovies={this.props.searchMovies}
          />
      </ErrorBoundary>;
  }
}
