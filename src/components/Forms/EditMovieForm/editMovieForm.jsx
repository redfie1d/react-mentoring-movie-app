import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { format } from 'date-fns';
import './editMovieForm.css';

import TextField from 'components/Fields/TextField/textField';
import DatePickerField from 'components/Fields/DatePickerField/datePickerField';
import GenreField from 'components/Fields/GenreField/genreField';
import { validate } from '../constants';
import { editMovie } from 'redux/actions/movieListActions';

const EditMovieForm = ({ originalMovie, handleClose }) => {
  const dispatch = useDispatch();

  const translateJsonDataToForm = (movie) => {
    const formData = { ...movie };
    formData.release_date = new Date(movie.release_date);
    formData.genres = transformToReactSelect(movie.genres);
    return formData;
  };

  const transformToReactSelect = (genres) => {
    const transformedGenres = [];
    genres.forEach((genre) => {
      const genreOptions = {
        value: genre,
        label: genre,
      };
      transformedGenres.push(genreOptions);
    });
    return transformedGenres;
  };

  return (
    <Formik
      initialValues={translateJsonDataToForm(originalMovie)}
      validationSchema={validate}
      onSubmit={(values) => {
        const editedMovie = { ...values };
        editedMovie.release_date = format(values.release_date, 'yyyy-MM-dd');
        editedMovie.genres = values.genres.map((genre) => genre.value);
        editedMovie.runtime === ''
          ? (editedMovie.runtime = 0)
          : (editedMovie.runtime = parseInt(values.runtime));
        dispatch(editMovie(editedMovie));
        handleClose();
      }}
    >
      <Form className="editMovieContainer">
        <h1>EDIT MOVIE</h1>
        <label>MOVIE ID</label>
        <p>{originalMovie.id}</p>
        <TextField
          label="TITLE"
          name="title"
          type="text"
          placeholder="Title here"
        />
        <TextField
          label="TAGLINE"
          name="tagline"
          type="text"
          placeholder="Tagline here"
        />
        <DatePickerField
          label="RELEASE DATE"
          name="release_date"
          placeholder="Select Date"
        />
        <TextField
          label="MOVIE URL"
          name="poster_path"
          type="text"
          placeholder="Movie URL here"
        />
        <GenreField label="GENRE" name="genres" />
        <TextField
          label="OVERVIEW"
          name="overview"
          type="text"
          placeholder="Overview here"
        />
        <TextField
          label="RUNTIME"
          name="runtime"
          type="text"
          placeholder="Runtime here"
        />
        <div>
          <button type="reset">RESET</button>
          <button type="submit">SUBMIT</button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditMovieForm;
