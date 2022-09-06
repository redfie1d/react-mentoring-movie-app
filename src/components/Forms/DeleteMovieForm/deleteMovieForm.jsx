import { useDispatch } from 'react-redux';
import './deleteMovieForm.css';
import { deleteMovie } from 'redux/actions/movieListActions';

const DeleteMovieForm = ({ movie, handleClose }) => {
  const dispatch = useDispatch();

  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(deleteMovie(movie));
    handleClose();
  };

  return (
    <form className="deleteMovieContainer">
      <h1>DELETE MOVIE</h1>
      <h2>Are you sure you want to delete this movie?</h2>
      <div>
        <button onClick={handleConfirm}>CONFIRM</button>
      </div>
    </form>
  );
};

export default DeleteMovieForm;
