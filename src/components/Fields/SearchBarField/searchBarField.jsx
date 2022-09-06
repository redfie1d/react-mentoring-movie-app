import { useField, ErrorMessage } from 'formik';
import './searchBarField.css';

const SearchBarField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <div>
        <input
          {...field}
          {...props}
          className={`${meta.touched && meta.error && 'is-invalid'}`}
        />
        <button type="submit">SEARCH</button>
      </div>
      <ErrorMessage component="div" className="error" name={field.name} />
    </>
  );
};

export default SearchBarField;
