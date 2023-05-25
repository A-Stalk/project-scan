// SearchForm.jsx

import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RESULTS_PAGE_URL } from '../../../../data.js';
import { apiHistograms } from '../../../../redux/api/apiHistograms.js';
import { setFormData } from '../../../../redux/slices/searchFormData.js';
import { searchFormSchema } from '../../../../utils/validation/schemas.js';
import Spinner from '../../../spinner/Spinner.jsx';
import CustomCheckbox from './Checkbox/CustomCheckbox.jsx';
import CustomDatePicker from './DatePicker/CustomDatePicker.jsx';
import CustomInput from './Input/CustomInput';
import styles from './SearchForm.module.scss';
import CustomSelector from './Selector/CustomSelector.jsx';

const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (formData, { setSubmitting }) => {
    try {
      setSubmitting(true);
      await dispatch(setFormData(formData));
      await dispatch(apiHistograms());
    } finally {
      setSubmitting(false);
      navigate(RESULTS_PAGE_URL);
    }
  };

  return (
    <Formik
      initialValues={{
        inn: '',
        tonality: 'any',
        limit: '',
        startDate: '',
        endDate: '',
      }}
      validationSchema={searchFormSchema}
      // validateOnChange={true}
      // validateOnBlur={true}
      onSubmit={onSubmit}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.form_top}>
            <div className={styles.form_left}>
              <CustomInput
                label='ИНН компании*'
                name='inn'
                type='text'
                placeholder='10 цифр'
              />

              <CustomSelector
                label='Тональность'
                name='tonality'
              ></CustomSelector>

              <CustomInput
                label='Количество документов в выдаче*'
                name='limit'
                type='number'
                placeholder='от 1 до 1000'
              />
            </div>

            <div className={styles.form_right}>
              <div className={styles.checkbox_section}>
                <CustomCheckbox
                  label='Признак максимальной полноты'
                  name='maxFullness'
                />
                <CustomCheckbox
                  label='Упоминания в бизнес-контексте'
                  name='inBusinessNews'
                />
                <CustomCheckbox
                  label='Главная роль в публикации'
                  name='onlyMainRole'
                />
                <CustomCheckbox
                  label='Публикации только с риск-факторами'
                  name='onlyWithRiskFactors'
                />
                <CustomCheckbox
                  label='Включать технические новости рынков'
                  name='includeTechNews'
                />
                <CustomCheckbox
                  label='Включать анонсы и календари'
                  name='includeAnnouncements'
                />
                <CustomCheckbox
                  label='Включать сводки новостей'
                  name='includeDigests'
                />
              </div>
            </div>
          </div>

          <div className={styles.form_bottom}>
            <div className={styles.dates_section}>
              <label htmlFor='dates_section'>Диапазон поиска*</label>
              <CustomDatePicker />
            </div>

            <div className={styles.button_section}>
              <button
                className={styles.button}
                type='submit'
                disabled={!dirty || !isValid || isSubmitting}
              >
                {isSubmitting ? <Spinner /> : 'Поиск'}
              </button>
              <p className={styles.required_text}>
                * Обязательные к заполнению поля
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
