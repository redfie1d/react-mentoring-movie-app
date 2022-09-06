import { useField, ErrorMessage, Field } from 'formik';
import Select from 'react-select';
import './genreField.css';

const genreOptions = [
  { value: 'Crime', label: 'Crime' },
  { value: 'Documentary', label: 'Documentary' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Action & Adventure', label: 'Action & Adventure' },
  { value: 'Drama', label: 'Drama' },
  { value: 'Biography', label: 'Biography' },
  { value: 'Music', label: 'Music' },
  { value: 'Oscar winning movie', label: 'Oscar winning movie' },
  { value: 'Romance', label: 'Romance' },
];

const GenreField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const genreStyle = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#2e2e2e',
      border:
        meta.touched === false ? 'none' : meta.error && '1px solid #f65261',
    }),
    option: (provided) => ({
      ...provided,
      color: '#FFFFFF',
      backgroundColor: '#2e2e2e',
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: '#f65261',
    }),
  };

  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <Field name={field.name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          return (
            <Select
              {...field}
              {...props}
              inputId={field.name}
              name={field.name}
              value={field.value}
              closeMenuOnSelect={false}
              isMulti
              options={genreOptions}
              styles={genreStyle}
              onChange={(val) => setFieldValue(field.name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage
        component="div"
        className="error"
        name={field.name}
        data-testid={`${field.name}Error`}
      />
    </>
  );
};

export default GenreField;
