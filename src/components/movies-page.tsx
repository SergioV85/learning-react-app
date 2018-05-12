import * as React from 'react';

import { Header } from './header/header.component';
import { SearchPanel } from './search-panel/search-panel.component';
import { StatusBarPanel } from './status-bar/status-bar.component';
import { MovieDetails } from './movie-details/movie-details.component';
import { MoviesList } from './movies-list/movies-list.component';
import { MovieObject } from './movie-card/movie-card.component';
import { Footer } from './footer/footer.component';
import { ErrorBoundary } from './error-boundary/error-boundary.component';

import { mockedMoviesList } from './movies-list/mocked-list';
import { mockedMovieDetails } from './movies-list/mocked-details';


interface MoviesPageProps {}
interface MoviesPageState {
  movies: {
    list: MovieObject[];
    selectedMovie: MovieObject | null;
  };
  search: {
    keyword: string;
    sortBy: string;
    type: string;
  };
  showBackButton?: boolean;
}

export class MoviesPage extends React.Component<MoviesPageProps, MoviesPageState> {
  constructor(props: MoviesPageProps) {
    super(props);
    this.state = {
      movies: {
        list: [],
        selectedMovie: null
      },
      search: {
        keyword: '',
        sortBy: 'rating',
        type: 'title',
      }
    };
  }
  public render() {
    return <div className="c-page">
      <div className="c-page__header">
        <div className="c-page__header-shadow">
          <div className="p-2 container">
            <Header showBackButton={this.state.movies.selectedMovie !== null}
                onBackToList={this.backToList.bind(this)} />
            {
              this.state.movies.selectedMovie !== null
              ? <ErrorBoundary key="movie-details-wrapper" errorMessage="Unfortunally, error happens during showing details of selected movie">
                  <MovieDetails selectedMovie={this.state.movies.selectedMovie} />
                </ErrorBoundary>
              : <ErrorBoundary key="search-panel-wrapper" errorMessage="Unfortunally, we can't show search panel">
                  <SearchPanel
                      searchType={this.state.search.type}
                      keyword={this.state.search.keyword}
                      onChangeType={this.changeSearchType.bind(this)}
                      onInputChange={this.changeSearchInput.bind(this)}
                      onSearchMovies={this.searchMovies.bind(this)} />
                </ErrorBoundary>
            }
          </div>
        </div>
      </div>
      <div className="c-page__status-bar">
        <StatusBarPanel
            foundMovies={this.state.movies.list.length}
            currentSorting={this.state.search.sortBy}
            onChangeSorting={this.changeSortingType.bind(this)} />
      </div>
      <div className="c-page__movies">
        <ErrorBoundary key="movies-list-wrapper" errorMessage="Unfortunally, we can't show movies list">
          <MoviesList
              movies={this.state.movies.list}
              onMovieClick={this.selectMovie.bind(this)} />
        </ErrorBoundary>
      </div>
      <div className="c-page__footer">
        <div className="p-2 container">
          <Footer />
        </div>
      </div>
    </div>
  }

  public backToList() {
    this.setState({
      movies: {
        ...this.state.movies,
        selectedMovie: null
      }
    });
  }
  public changeSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      search: {
        ...this.state.search,
        keyword: event.currentTarget.value
      }
    })
  }
  public changeSearchType(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      search: {
        ...this.state.search,
        type: event.currentTarget.value
      }
    })
  }
  public changeSortingType(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      search: {
        ...this.state.search,
        sortBy: event.currentTarget.value
      }
    })
  }
  public searchMovies() {
    this.setState({
      movies: {
        ...this.state.movies,
        list: mockedMoviesList
      }
    })
  }
  public selectMovie(movieId: number) {
    this.setState({
      movies: {
        ...this.state.movies,
        selectedMovie: mockedMovieDetails
      }
    });
    console.log('selected movieId', movieId);
  }
}