import movieListReducer from './movieListReducer';
import {
  movieListReducerInitialState,
  getMovieListSuccessState,
  getMovieListSuccessAction,
  getMovieSuccessState,
  getMovieFailureState,
  getMovieFailureAction,
  getMovieSuccessAction,
  addMovieSuccessState,
  addMovieSuccessAction,
  addMovieFailureState,
  addMovieFailureAction,
  updateMovieSuccessState,
  updateMovieSuccessAction,
  updateMovieFailureState,
  updateMovieFailureAction,
  deleteMovieSuccessState,
  deleteMovieSuccessAction,
  deleteMovieFailureState,
  deleteMovieFailureAction,
} from 'utils/mocks';

describe('Movie List Reducer', () => {
  it('should return the initial state', () => {
    expect(movieListReducer(undefined, {})).toEqual(
      movieListReducerInitialState
    );
  });

  it('should handle GET_MOVIE_LIST_SUCCESS after fetching movie list', () => {
    expect(
      movieListReducer(movieListReducerInitialState, getMovieListSuccessAction)
    ).toEqual(getMovieListSuccessState);
  });

  it('should handle GET_MOVIE_SUCCESS after fetching movie by id', () => {
    expect(
      movieListReducer(getMovieListSuccessState, getMovieSuccessAction)
    ).toEqual(getMovieSuccessState);
  });

  it('should handle MOVIE_API_FAILURE after fetching movie by id failed', () => {
    expect(
      movieListReducer(movieListReducerInitialState, getMovieFailureAction)
    ).toEqual(getMovieFailureState);
  });

  it('should handle GET_MOVIE_LIST_SUCCESS after adding a movie', () => {
    expect(
      movieListReducer(getMovieListSuccessState, addMovieSuccessAction)
    ).toEqual(addMovieSuccessState);
  });

  it('should handle MOVIE_API_FAILURE after adding a movie failed', () => {
    expect(
      movieListReducer(getMovieListSuccessState, addMovieFailureAction)
    ).toEqual(addMovieFailureState);
  });

  it('should handle GET_MOVIE_LIST_SUCCESS after updating a movie', () => {
    expect(
      movieListReducer(getMovieListSuccessState, updateMovieSuccessAction)
    ).toEqual(updateMovieSuccessState);
  });

  it('should handle MOVIE_API_FAILURE after updating a movie failed', () => {
    expect(
      movieListReducer(getMovieListSuccessState, updateMovieFailureAction)
    ).toEqual(updateMovieFailureState);
  });

  it('should handle GET_MOVIE_LIST_SUCCESS after deleting a movie', () => {
    expect(
      movieListReducer(getMovieListSuccessState, deleteMovieSuccessAction)
    ).toEqual(deleteMovieSuccessState);
  });

  it('should handle MOVIE_API_FAILURE after deleting a movie failed', () => {
    expect(
      movieListReducer(getMovieListSuccessState, deleteMovieFailureAction)
    ).toEqual(deleteMovieFailureState);
  });
});
