import actionTypes from 'redux/actions/actionTypes';

const initialState = {
  movieList: [],
  movie: {},
  errors: [],
};

const movieListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movieList: payload,
      };
    case actionTypes.GET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: payload,
      };
    // case actionTypes.ADD_MOVIE_SUCCESS:
    //   return {
    //     ...state,
    //     movieList: [...state.movieList, payload],
    //   };
    // case actionTypes.UPDATE_MOVIE_SUCCESS:
    //   const newMovieList = [...state.movieList];
    //   const index = newMovieList.findIndex((movie) => movie.id === payload.id);
    //   newMovieList[index] = payload;
    //   return {
    //     ...state,
    //     movieList: newMovieList,
    //   };
    // case actionTypes.DELETE_MOVIE_SUCCESS:
    //   return {
    //     ...state,
    //     movieList: [...state.movieList].filter((movie) => {
    //       return movie.id !== payload;
    //     }),
    //   };
    case actionTypes.MOVIE_API_FAILURE:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default movieListReducer;
