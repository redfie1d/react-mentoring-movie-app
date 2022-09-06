import * as Yup from 'yup';

const defaultMovieState = {
  title: '',
  tagline: '',
  release_date: null,
  poster_path: '',
  genres: [],
  overview: '',
  runtime: '',
};

const validate = Yup.object({
  title: Yup.string().required('Required'),
  tagline: Yup.string().required('Required'),
  release_date: Yup.date().required('Required').nullable(),
  poster_path: Yup.string()
    .url('Please input a valid URL')
    .required('Required'),
  genres: Yup.array()
    .required('Required')
    .min(1, 'Select at least one genre to proceed'),
  overview: Yup.string().required('Required'),
  runtime: Yup.number()
    .typeError('You must specify a number to proceed')
    .required('Required'),
});

export { defaultMovieState, validate };
