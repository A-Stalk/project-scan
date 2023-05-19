/* eslint-disable react/prop-types */
// LoginInput.jsx

import { ErrorMessage, Field, useField } from 'formik';
import styles from './Login.module.scss';

const LoginInput = ({ label, inputProps }) => {
  const [field, meta] = useField(inputProps);

  return (
    <div className={styles.input_section}>
      <label className={styles.label}>{label}</label>

      <Field
        {...field}
        {...inputProps}
        name={field.name}
        className={
          meta.touched && meta.error ? styles.error_input : styles.input
        }
      />

      <div className={styles.error_message}>
        <ErrorMessage name={inputProps.name} />
      </div>
    </div>
  );
};

export default LoginInput;
