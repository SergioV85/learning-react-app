import * as React from 'react';
import { ErrorBoundary } from './../error-boundary/error-boundary.component';
import { IMovieObject, MovieDetails } from './../movie-details/movie-details.component';
import { Topbar } from './../top-bar/top-bar.component';

export interface ITopbarProps {
  selectedMovieId: number;
  selectedMovie: IMovieObject;
  onBackToList(): void;
  requestMovieOnInit(movieId: number): void;
}

export class MovieDetailsHeader extends React.Component<ITopbarProps, {}> {
  constructor(props: ITopbarProps) {
    super(props);

    this.handlePanelClick = this.handlePanelClick.bind(this);
  }
  public render() {
    return (
      <div className='c-page__header'>
        <div className='c-page__header-shadow'>
          <div className='p-2 container'>
            <Topbar
                showBackButton={this.props.selectedMovie !== null}
                onBackToList={this.props.onBackToList}
            />
            <ErrorBoundary
                key='movie-details-wrapper'
                errorMessage='Unfortunately, error happens during showing details of selected movie'
            >
              {this.panelOrLoader}
            </ErrorBoundary>
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    if (this.props.selectedMovieId && !this.props.selectedMovie) {
      this.props.requestMovieOnInit(this.props.selectedMovieId);
    }
  }
  public componentDidUpdate(prevProps: ITopbarProps) {
    if (prevProps.selectedMovieId !== this.props.selectedMovieId) {
      this.props.requestMovieOnInit(this.props.selectedMovieId);
    }
  }

  private get panelOrLoader() {
    return !this.props.selectedMovie
      ? <div className='c-page__loader' />
      : <MovieDetails movie={this.props.selectedMovie} viewType='full' onMovieClick={this.handlePanelClick} />;
  }

  // tslint:disable-next-line:no-empty
  private handlePanelClick() {}
}
