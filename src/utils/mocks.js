import actionTypes from 'redux/actions/actionTypes';

const movieListReducerInitialState = {
  movieList: [],
  movie: {},
  errors: [],
};

const getMovieListSuccessState = {
  movieList: [
    {
      id: 2,
      title: 'mockTitle2',
      tagline: 'mockTagline2',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-02',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview2',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
    {
      id: 1,
      title: 'mockTitle1',
      tagline: 'mockTagline1',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-01',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview1',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
  ],
  movie: {},
  errors: [],
};

const getMovieListSuccessAction = {
  type: actionTypes.GET_MOVIE_LIST_SUCCESS,
  payload: getMovieListSuccessState.movieList,
};

const getMovieSuccessState = {
  movieList: [
    {
      id: 2,
      title: 'mockTitle2',
      tagline: 'mockTagline2',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-02',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview2',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
    {
      id: 1,
      title: 'mockTitle1',
      tagline: 'mockTagline1',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-01',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview1',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
  ],
  movie: {
    id: 1,
    title: 'mockTitle1',
    tagline: 'mockTagline1',
    vote_average: 0,
    vote_count: 0,
    release_date: '2021-01-01',
    poster_path:
      'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
    overview: 'mockOverview1',
    budget: 0,
    revenue: 0,
    genres: ['Crime'],
    runtime: 0,
  },
  errors: [],
};

const getMovieSuccessAction = {
  type: actionTypes.GET_MOVIE_SUCCESS,
  payload: getMovieSuccessState.movie,
};

const getMovieFailureState = {
  movieList: [],
  movie: {},
  errors: 'Not Found',
};

const getMovieFailureAction = {
  type: actionTypes.MOVIE_API_FAILURE,
  payload: getMovieFailureState.errors,
};

const addMovieSuccessState = {
  movieList: [
    {
      id: 3,
      title: 'mockTitle3',
      tagline: 'mockTagline3',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-03',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview3',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
    {
      id: 2,
      title: 'mockTitle2',
      tagline: 'mockTagline2',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-02',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview2',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
    {
      id: 1,
      title: 'mockTitle1',
      tagline: 'mockTagline1',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-01',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview1',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
  ],
  movie: {},
  errors: [],
};

const addMovieSuccessAction = {
  type: actionTypes.GET_MOVIE_LIST_SUCCESS,
  payload: addMovieSuccessState.movieList,
};

const addMovieFailureState = {
  movieList: [
    {
      id: 2,
      title: 'mockTitle2',
      tagline: 'mockTagline2',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-02',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview2',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
    {
      id: 1,
      title: 'mockTitle1',
      tagline: 'mockTagline1',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-01',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview1',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
  ],
  movie: {},
  errors: [
    '"title" is required',
    '"poster_path" is required',
    '"overview" is required',
    '"runtime" is required',
  ],
};

const addMovieFailureAction = {
  type: actionTypes.MOVIE_API_FAILURE,
  payload: addMovieFailureState.errors,
};

const updateMovieSuccessState = {
  movieList: [
    {
      id: 2,
      title: 'mockTitle2',
      tagline: 'mockTagline2',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-02',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview2',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
    {
      id: 1,
      title: 'Update mockTitle',
      tagline: 'Update mockTagline',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-01',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'Update mockOverview',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
  ],
  movie: {},
  errors: [],
};

const updateMovieSuccessAction = {
  type: actionTypes.GET_MOVIE_LIST_SUCCESS,
  payload: updateMovieSuccessState.movieList,
};

const updateMovieFailureState = {
  movieList: [
    {
      id: 2,
      title: 'mockTitle2',
      tagline: 'mockTagline2',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-02',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview2',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
    {
      id: 1,
      title: 'mockTitle1',
      tagline: 'mockTagline1',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-01',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview1',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
  ],
  movie: {},
  errors: [
    '"title" is required',
    '"poster_path" is required',
    '"overview" is required',
    '"runtime" is required',
  ],
};

const updateMovieFailureAction = {
  type: actionTypes.MOVIE_API_FAILURE,
  payload: updateMovieFailureState.errors,
};

const deleteMovieSuccessState = {
  movieList: [
    {
      id: 2,
      title: 'mockTitle2',
      tagline: 'mockTagline2',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-02',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview2',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
  ],
  movie: {},
  errors: [],
};

const deleteMovieSuccessAction = {
  type: actionTypes.GET_MOVIE_LIST_SUCCESS,
  payload: deleteMovieSuccessState.movieList,
};

const deleteMovieFailureState = {
  movieList: [
    {
      id: 2,
      title: 'mockTitle2',
      tagline: 'mockTagline2',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-02',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview2',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
    {
      id: 1,
      title: 'mockTitle1',
      tagline: 'mockTagline1',
      vote_average: 0,
      vote_count: 0,
      release_date: '2021-01-01',
      poster_path:
        'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
      overview: 'mockOverview1',
      budget: 0,
      revenue: 0,
      genres: ['Crime'],
      runtime: 0,
    },
  ],
  movie: {},
  errors: 'Not Found',
};

const deleteMovieFailureAction = {
  type: actionTypes.MOVIE_API_FAILURE,
  payload: deleteMovieFailureState.errors,
};

export {
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
};
