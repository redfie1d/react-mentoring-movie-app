import { useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';
import './movieList.css';
import MovieCard from './MovieCard/movieCard';

const MovieList = ({ movieList }) => {
  const location = useLocation();
  const params = QueryString.parse(location.search);
  const noMovie = (
    <div className="noMovieLoadingContainer">
      <h1>No Movie Found</h1>
    </div>
  );

  // const loading = (
  //   <div className="noMovieLoadingContainer">
  //     <h1>Loading...</h1>
  //   </div>
  // );

  const renderMovieList = (
    <>
      <div className="resultCountContainer">
        <p>
          <b>{movieList.length}</b> movies found
        </p>
      </div>
      <div className="movieListContainer">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );

  if (location.pathname === '/' || params.search === '') return noMovie;

  return renderMovieList;
};

export default MovieList;
