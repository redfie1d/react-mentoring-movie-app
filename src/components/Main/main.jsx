import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';
import './main.css';
import 'App.css';
import MovieList from './MovieList/movieList';
import { getMovieList } from 'redux/actions/movieListActions';
import { defaultQueryState } from 'utils/constants';

const Main = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = QueryString.parse(location.search);
  Object.entries(params).forEach(([key, value]) => {
    defaultQueryState[key] = value;
  });

  const [queryState, setQueryState] = useState(defaultQueryState);
  const { movieList } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMovieList(queryState));
  }, [dispatch, queryState, location]);

  const handleFilterChange = (e) => {
    setQueryState({
      ...queryState,
      filter: e.target.value,
    });
  };

  const handleSortByChange = (e) => {
    setQueryState({
      ...queryState,
      sortBy: e.target.value,
    });
  };

  return (
    <main className="mainContainer">
      <div className="sortFilterContainer">
        <div className="genreFilter">
          <button value="" onClick={handleFilterChange}>
            ALL
          </button>
          <button value="Documentary" onClick={handleFilterChange}>
            DOCUMENTARY
          </button>
          <button value="Comedy" onClick={handleFilterChange}>
            COMEDY
          </button>
          <button value="Horror" onClick={handleFilterChange}>
            HORROR
          </button>
          <button value="Crime" onClick={handleFilterChange}>
            CRIME
          </button>
        </div>
        <div className="sortByFilter">
          <p>SORT BY</p>
          <select value={queryState.sortBy} onChange={handleSortByChange}>
            <option value="release_date">RELEASE DATE</option>
            <option value="genre">GENRE</option>
            <option value="vote_average">RATING</option>
          </select>
        </div>
      </div>
      <MovieList movieList={movieList} />
    </main>
  );
};

export default Main;
