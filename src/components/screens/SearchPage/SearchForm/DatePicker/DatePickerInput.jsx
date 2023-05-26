/* eslint-disable react/prop-types */
import ru from 'date-fns/locale/ru';
import moment from 'moment';
import { registerLocale } from 'react-datepicker';
import { DatePicker } from 'react-formik-ui/dist/components/DatePicker/DatePicker';
import styles from './CustomDatePicker.module.scss';
registerLocale('ru', ru);

const DatePickerInput = ({ field, form: { errors }, ...props }) => {
  const selectedDate = field.value ? moment(field.value).toDate() : null;

  return (
    <>
      <DatePicker
        {...field}
        {...props}
        selected={selectedDate}
        locale='ru'
        dateFormat='dd.MM.yyyy'
        className={errors[field.name] ? styles.error_input : styles.input}
      />
      {errors[field.name] && (
        <div className={styles.error_message}>{errors[field.name]}</div>
      )}
    </>
  );
};

export default DatePickerInput;
