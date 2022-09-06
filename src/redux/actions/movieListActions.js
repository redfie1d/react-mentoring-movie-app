import axios from 'axios';
import actionTypes from 'redux/actions/actionTypes';
import { defaultQueryState } from 'utils/constants';

const BASE_URL = `http://localhost:4000`;

const getMovieListSuccess = (payload) => ({
  type: actionTypes.GET_MOVIE_LIST_SUCCESS,
  payload,
});

const getMovieSuccess = (payload) => ({
  type: actionTypes.GET_MOVIE_SUCCESS,
  payload,
});

const movieApiFailure = (payload) => ({
  type: actionTypes.MOVIE_API_FAILURE,
  payload,
});

const getMovieList = ({
  sortBy,
  sortOrder,
  search,
  searchBy,
  filter,
  offset,
  limit,
}) => {
  return (dispatch) => {
    return axios
      .get(
        `${BASE_URL}/movies?sortBy=${sortBy}&sortOrder=${sortOrder}` +
          `&search=${search}&searchBy=${searchBy}` +
          `&filter=${filter}` +
          `&offset=${offset}&limit=${limit}`
      )
      .then((res) => dispatch(getMovieListSuccess(res.data.data)))
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMovie = (id) => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}/movies/${id}`)
      .then((res) => dispatch(getMovieSuccess(res.data)))
      .catch((err) => {
        console.log(err.response.data);
        dispatch(movieApiFailure(err.response.data));
      });
  };
};

const addMovie = (movie) => {
  return (dispatch) => {
    return axios
      .post(`${BASE_URL}/movies`, movie)
      .then(() => dispatch(getMovieList(defaultQueryState)))
      .catch((err) => {
        console.log(err.response.data.messages);
        dispatch(movieApiFailure(err.response.data.messages));
      });
  };
};

const editMovie = (movie) => {
  return (dispatch) => {
    return axios
      .put(`${BASE_URL}/movies`, movie)
      .then(() => dispatch(getMovieList(defaultQueryState)))
      .catch((err) => {
        console.log(err.response.data.messages);
        dispatch(movieApiFailure(err.response.data.messages));
      });
  };
};

const deleteMovie = (movie) => {
  return (dispatch) => {
    return axios
      .delete(`${BASE_URL}/movies/${movie.id}`)
      .then(() => dispatch(getMovieList(defaultQueryState)))
      .catch((err) => {
        console.log(err.response.data);
        dispatch(movieApiFailure(err.response.data));
      });
  };
};

export {
  getMovieList,
  getMovie,
  addMovie,
  editMovie,
  deleteMovie,
  movieApiFailure,
};
