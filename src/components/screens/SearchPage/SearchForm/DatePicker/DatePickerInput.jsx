/* eslint-disable react/prop-types */
import ru from 'date-fns/locale/ru';
import moment from 'moment';
import { registerLocale } from 'react-datepicker';
import { DatePicker } from 'react-formik-ui/dist/components/DatePicker/DatePicker';
import styles from './CustomDatePicker.module.scss';
registerLocale('ru', ru);

const DatePickerInput = ({ field, form: { errors }, ...props }) => {
  console.log(errors);

  const today = moment().format('YYYY-MM-DD');
  return (
    <>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && today) || null}
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
