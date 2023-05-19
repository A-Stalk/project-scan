import { ErrorMessage } from 'formik';
/* eslint-disable react/prop-types */
import { useField } from 'formik';
import MaskedInput from 'react-text-mask';
import styles from './CustomInput.module.scss';
import getMaskByInputName from './masks';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const mask = getMaskByInputName(field);

  return (
    <div className={styles.input_section}>
      <label className={styles.label}>{label}</label>
      <div className={styles.input_inner}>
        <MaskedInput
          {...field}
          {...props}
          mask={mask}
          name={field.name}
          className={
            meta.touched && meta.error ? styles.error_input : styles.input
          }
        />

        <div className={styles.error_message}>
          <ErrorMessage name={field.name} />
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
