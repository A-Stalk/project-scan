/* eslint-disable react/prop-types */
import { useField } from 'formik';
import styles from './CustomSelector.module.scss';

const CustomSelector = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className={styles.selector_section}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} {...field} {...props}>
        <optgroup>
          <option value='' defaultValue={true}>
            Любая
          </option>
        </optgroup>
      </select>
    </div>
  );
};

export default CustomSelector;
