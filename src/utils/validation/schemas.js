import moment from 'moment';
import * as yup from 'yup';
import { validateInn } from './inn_validation';

const onlyDigits = value => value.replace(/\D/g, '');

const today = moment().format('YYYY-MM-DD');

export const AuthFormSchema = yup.object().shape({
  login: yup.string().required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
});

export const searchFormSchema = yup.object().shape({
  inn: yup
    .string()
    .transform(onlyDigits)
    .test(
      'Limit10digits',
      'Должно быть 10 цифр',
      val => val.toString().length === 10,
    )
    .test('innValidation', 'Некорректный ИНН', validateInn)
    .required('Введите корректные данные'),

  docsNmr: yup
    .number()
    .min(1, 'Должно быть число от 1 до 1000')
    .max(1000, 'Должно быть число от 1 до 1000')
    .typeError('Должно быть число от 1 до 1000')
    .required('Обязательное поле'),

  startDate: yup
    .date()
    .nullable()
    .required('Введите корректные данные')
    .max(yup.ref('endDate'), 'Дата начала должна быть меньше даты конца'),

  endDate: yup
    .date()
    .nullable()
    .required('Введите корректные данные')
    .min(yup.ref('startDate'), 'Дата конца должна быть больше даты начала')
    .max(today, 'Дата не должна быть больше текущей'),
});
