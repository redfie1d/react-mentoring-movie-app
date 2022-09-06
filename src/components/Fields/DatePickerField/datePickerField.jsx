import { useField, ErrorMessage, Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePickerField.css';

const DatePickerField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <Field name={field.name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          return (
            <DatePicker
              className={`${meta.touched && meta.error && 'is-invalid'}`}
              {...field}
              {...props}
              selected={field.value}
              onChange={(val) => setFieldValue(field.name, val)}
              placeholderText="Select Date"
              dateFormat="dd/MM/yyyy"
              isClearable
              showYearDropdown
              scrollableMonthYearDropdown
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

export default DatePickerField;
