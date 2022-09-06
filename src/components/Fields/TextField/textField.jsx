import { useField, ErrorMessage } from 'formik';
import './textField.css';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`${meta.touched && meta.error && 'is-invalid'}`}
        // autoComplete="off"
      />
      <ErrorMessage
        component="div"
        className="error"
        name={field.name}
        data-testid={`${field.name}Error`}
      />
    </>
  );
};

export default TextField;
