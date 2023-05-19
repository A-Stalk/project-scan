import { Field } from 'formik';
import styles from './CustomDatePicker.module.scss';
import DatePickerInput from './DatePickerInput';

const CustomDatePicker = () => {
  const today = new Date();

  return (
    <div className={styles.dates_section}>
      <div className={styles.dates_section_inner}>
        <div className={styles.from}>
          <Field
            name='startDate'
            component={DatePickerInput}
            placeholder='Дата начала'
            maxDate={today}
            required
          />
        </div>

        <div className={styles.to}>
          <Field
            name='endDate'
            component={DatePickerInput}
            placeholder='Дата конца'
            maxDate={today}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default CustomDatePicker;
