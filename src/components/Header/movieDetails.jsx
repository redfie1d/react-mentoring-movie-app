import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import style from './movieDetails.module.css';
import Logo from 'components/Logo/logo';
import SearchButton from 'assets/magnifying-glass.png';
import { getMovie } from 'redux/actions/movieListActions';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const { movie } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  const handleSearchButton = (e) => {
    e.preventDefault();
    history.push('/');
  };

  if (movie.title === undefined) return <div>Loading...</div>;

  return (
    <header className={style.headerContainer}>
      <div className={style.titleContainer}>
        <Logo />
        <img
          src={SearchButton}
          alt="searchButton"
          onClick={handleSearchButton}
        />
      </div>
      <div className={style.movieDetailsContainer}>
        <img src={movie.poster_path} alt="filmCover" />
        <div>
          <div>
            <h1>{movie.title}</h1>
            <div className={style.numberCircle}>{movie.vote_average}</div>
          </div>
          <div>
            {movie.genres.map((genre, index) => (
              <span key={genre}>
                {`${genre}${index < movie.genres.length - 1 ? `, ` : ``} `}
              </span>
            ))}
          </div>
          <div>
            <span>{format(new Date(movie.release_date), 'yyyy')}</span>
            <span>{movie.runtime} min</span>
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </header>
  );
};

export default MovieDetails;
