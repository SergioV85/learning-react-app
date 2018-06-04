import MoviesListActionTypes from './../action-types/movies-list.action-types';
import { moviesListReducer } from './movies-list.reducer';

const mockedState = {
  isLoading: false,
};

describe('Movies List Reducer', () => {
  it('should return the initial state', () => {
    const currentState = moviesListReducer(mockedState, {});
    const newState = { isLoading: false };
    expect(currentState).toEqual(newState);
  });
  it('should handle MoviesListActions.GetMovies', () => {
    const action = {
      type: MoviesListActionTypes.GetMovies,
    };
    const currentState = moviesListReducer(mockedState, action);
    const newState = { isLoading: true };
    expect(currentState).toEqual(newState);
  });
  it('should handle MoviesListActions.GetMoviesComplete', () => {
    const action = {
      payload: {
        data: [
          {
            title: 'The Movie',
          },
          {
            title: 'The Movie 2',
          },
        ],
        total: 2,
      },
      type: MoviesListActionTypes.GetMoviesComplete,
    };
    const currentState = moviesListReducer(mockedState, action);
    const newState = { isLoading: false, movies: [{ title: 'The Movie' }, { title: 'The Movie 2' }], total: 2 };
    expect(currentState).toEqual(newState);
  });
  it('should handle MoviesListActions.GetMoviesError', () => {
    const action = {
      payload: { message: 'Error' },
      type: MoviesListActionTypes.GetMoviesError,
    };
    const currentState = moviesListReducer(mockedState, action);
    const newState = { isLoading: false, error: { message: 'Error' } };
    expect(currentState).toEqual(newState);
  });
});
