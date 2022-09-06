import axios from 'axios';
import { configureMockStoreWithInitialState } from 'utils/testFunctions';

import {
  movieListReducerInitialState,
  getMovieListSuccessState,
  getMovieListSuccessAction,
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

import {
  getMovieList,
  getMovie,
  addMovie,
  editMovie,
  deleteMovie,
  movieApiFailure,
} from './movieListActions';

import { defaultQueryState } from 'utils/constants';

jest.mock('axios');

describe('Movie List Actions', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates GET_MOVIE_LIST_SUCCESS when fetching movies has been done', async () => {
    axios.get.mockResolvedValue({
      data: { data: getMovieListSuccessAction.payload },
    });

    const expectedActions = [getMovieListSuccessAction];
    const store = configureMockStoreWithInitialState(
      movieListReducerInitialState
    );
    return store.dispatch(getMovieList(defaultQueryState)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_MOVIE_SUCCESS when fetching movie by id has been done', async () => {
    const id = 1;

    axios.get.mockResolvedValue({ data: getMovieSuccessAction.payload });

    const expectedActions = [getMovieSuccessAction];
    const store = configureMockStoreWithInitialState(getMovieListSuccessState);
    return store.dispatch(getMovie(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates MOVIE_API_FAILURE when fetching movie by invalid id', async () => {
    const id = 1;

    axios.get.mockRejectedValue({
      response: { status: 404, data: getMovieFailureAction.payload },
    });

    const expectedActions = [getMovieFailureAction];
    const store = configureMockStoreWithInitialState(
      movieListReducerInitialState
    );
    return store.dispatch(getMovie(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_MOVIE_LIST_SUCCESS when new movie is added', async () => {
    axios.post.mockResolvedValue({ data: addMovieSuccessState.movieList[0] });
    axios.get.mockResolvedValue({
      data: { data: addMovieSuccessState.movieList },
    });

    const expectedActions = [addMovieSuccessAction];
    const store = configureMockStoreWithInitialState(getMovieListSuccessState);

    return store
      .dispatch(addMovie(addMovieSuccessState.movieList[0]))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates MOVIE_API_FAILURE when new movie is added with validation errors', async () => {
    axios.post.mockRejectedValue({
      response: {
        status: 400,
        data: { messages: addMovieFailureAction.payload },
      },
    });

    const expectedActions = [addMovieFailureAction];
    const store = configureMockStoreWithInitialState(getMovieListSuccessState);

    return store
      .dispatch(addMovie(addMovieFailureState.movieList[0]))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates GET_MOVIE_LIST_SUCCESS when movie is updated', async () => {
    axios.put.mockResolvedValue({ data: updateMovieSuccessState.movieList[1] });
    axios.get.mockResolvedValue({
      data: { data: updateMovieSuccessState.movieList },
    });

    const expectedActions = [updateMovieSuccessAction];
    const store = configureMockStoreWithInitialState(getMovieListSuccessState);
    return store
      .dispatch(editMovie(updateMovieSuccessState.movieList[1]))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates MOVIE_API_FAILURE when new movie is updated with validation errors', async () => {
    axios.put.mockRejectedValue({
      response: {
        status: 400,
        data: { messages: updateMovieFailureAction.payload },
      },
    });

    const expectedActions = [updateMovieFailureAction];
    const store = configureMockStoreWithInitialState(getMovieListSuccessState);

    return store
      .dispatch(editMovie(updateMovieFailureState.movieList[0]))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates GET_MOVIE_LIST_SUCCESS when movie is deleted', async () => {
    axios.delete.mockResolvedValue();
    axios.get.mockResolvedValue({
      data: { data: deleteMovieSuccessState.movieList },
    });

    const expectedActions = [deleteMovieSuccessAction];
    const store = configureMockStoreWithInitialState(getMovieListSuccessState);
    return store
      .dispatch(deleteMovie(getMovieListSuccessState.movieList[1]))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates MOVIE_API_FAILURE when movie is delete with an invalid id', async () => {
    const id = 1;

    axios.delete.mockRejectedValue({
      response: { status: 404, data: deleteMovieFailureAction.payload },
    });

    const expectedActions = [deleteMovieFailureAction];
    const store = configureMockStoreWithInitialState(getMovieListSuccessState);
    return store.dispatch(deleteMovie(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
