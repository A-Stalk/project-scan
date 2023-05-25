// CustomSelector.jsx

import { useField } from 'formik';
import styles from './CustomSelector.module.scss';

const CustomSelector = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = e => {
    const selectedValue = e.target.value;
    helpers.setValue(selectedValue);
  };

  return (
    <div className={styles.selector_section}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select}
        {...field}
        {...props}
        onChange={handleChange}
      >
        <optgroup>
          <option value='any'>Любая</option>
          <option value='positive'>Позитивная</option>
          <option value='negative'>Негативная</option>
        </optgroup>
      </select>
    </div>
  );
};

export default CustomSelector;
