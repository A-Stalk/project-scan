/* eslint-disable react/prop-types */
import { useField } from 'formik';
import styles from './CustomCheckbox.module.scss';

const CustomCheckbox = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className={styles.checkbox_items}>
      <input
        type='checkbox'
        id={field.name}
        // checked={field.value}
        {...field}
        {...props}
        className={styles.checkbox}
      />
      <label className={styles.label} htmlFor={field.name}>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
