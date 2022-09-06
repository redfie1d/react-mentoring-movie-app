import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import './movieCard.css';
import MoreVertButton from './MoreVertButton/moreVertButton';

const MovieCard = ({ movie }) => {
  const history = useHistory();

  const handleOpenMovieCard = () => {
    history.push(`/film/${movie.id}`);
  };

  return (
    <div className="movieCardContainer">
      <MoreVertButton movie={movie} />
      <img
        src={movie.poster_path}
        alt={movie.title}
        onClick={handleOpenMovieCard}
      ></img>
      <div className="titleAndYear">
        <span>{movie.title}</span>
        <span>{format(new Date(movie.release_date), 'yyyy')}</span>
      </div>
      {movie.genres.map((genre, index) => (
        <span key={genre}>
          {`${genre}${index < movie.genres.length - 1 ? `, ` : ``} `}
        </span>
      ))}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {
    poster_path: '',
    title: '',
    release_date: '',
    genres: [],
    overview: '',
    runtime: '',
  },
};

export default MovieCard;
