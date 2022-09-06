import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { Formik, Form } from 'formik';
import './addMovieForm.css';

import TextField from 'components/Fields/TextField/textField';
import DatePickerField from 'components/Fields/DatePickerField/datePickerField';
import GenreField from 'components/Fields/GenreField/genreField';
import { defaultMovieState, validate } from '../constants';
import { addMovie } from 'redux/actions/movieListActions';

const AddMovieForm = ({ handleClose }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={defaultMovieState}
      validationSchema={validate}
      onSubmit={(values) => {
        const newMovie = { ...values };
        newMovie.release_date = format(values.release_date, 'yyyy-MM-dd');
        newMovie.genres = values.genres.map((genre) => genre.value);
        newMovie.runtime === ''
          ? (newMovie.runtime = 0)
          : (newMovie.runtime = parseInt(values.runtime));
        dispatch(addMovie(newMovie));
        handleClose();
      }}
    >
      <Form className="addMovieContainer" data-testid="addMovieContainer">
        <h1>ADD MOVIE</h1>
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
        <GenreField label="GENRE" name="genres" placeholder="Select Genre" />
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

export default AddMovieForm;
