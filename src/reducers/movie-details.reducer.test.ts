import MovieDetailsActionTypes from './../action-types/movie-details.action-types';
import { movieDetailsReducer } from './movie-details.reducer';

const mockedState = {
  isLoading: false,
};

describe('Movie Details Reducer', () => {
  it('should return the initial state', () => {
    const currentState = movieDetailsReducer(mockedState, {});
    const newState = { isLoading: false };
    expect(currentState).toEqual(newState);
  });
  it('should handle MovieDetailsActions.BackToList', () => {
    const action = {
      type: MovieDetailsActionTypes.BackToList,
    };
    const currentState = movieDetailsReducer(mockedState, action);
    const newState = { isLoading: false, movieDetails: null, selectedMovieId: null };
    expect(currentState).toEqual(newState);
  });
  it('should handle MovieDetailsActions.GetMovie', () => {
    const action = {
      payload: 123,
      type: MovieDetailsActionTypes.GetMovie,
    };
    const currentState = movieDetailsReducer(mockedState, action);
    const newState = { isLoading: true, selectedMovieId: 123 };
    expect(currentState).toEqual(newState);
  });
  it('should handle MovieDetailsActions.GetMovieComplete', () => {
    const action = {
      payload: {
        title: 'The Movie',
      },
      type: MovieDetailsActionTypes.GetMovieComplete,
    };
    const currentState = movieDetailsReducer(mockedState, action);
    const newState = { isLoading: false, movieDetails: { title: 'The Movie' } };
    expect(currentState).toEqual(newState);
  });
  it('should handle MovieDetailsActions.GetMovieError', () => {
    const action = {
      payload: { message: 'Error' },
      type: MovieDetailsActionTypes.GetMovieError,
    };
    const currentState = movieDetailsReducer(mockedState, action);
    const newState = { isLoading: false, error: { message: 'Error' } };
    expect(currentState).toEqual(newState);
  });
});
