import { Form, Formik } from 'formik';
import { searchFormSchema } from '../../../../utils/validation/schemas.js';
import CustomCheckbox from './Checkbox/CustomCheckbox.jsx';
import CustomDatePicker from './DatePicker/CustomDatePicker.jsx';
import CustomInput from './Input/CustomInput';
import styles from './SearchForm.module.scss';
import CustomSelector from './Selector/CustomSelector.jsx';

const SearchForm = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        inn: '',
        ton: '',
        docsNmr: '',
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

              <CustomSelector label='Тональность' name='ton'></CustomSelector>

              <CustomInput
                label='Количество документов в выдаче*'
                name='docsNmr'
                type='number'
                placeholder='от 1 до 1000'
              />
            </div>

            <div className={styles.form_right}>
              <div className={styles.checkbox_section}>
                <CustomCheckbox
                  label='Признак максимальной полноты'
                  name='priznak'
                />
                <CustomCheckbox
                  label='Упоминания в бизнес-контексте'
                  name='biz'
                />
                <CustomCheckbox
                  label='Главная роль в публикации'
                  name='main_role'
                />
                <CustomCheckbox
                  label='Публикации только с риск-факторами'
                  name='risk'
                />
                <CustomCheckbox
                  label='Включать технические новости рынков'
                  name='tech'
                />
                <CustomCheckbox
                  label='Включать анонсы и календари'
                  name='anons'
                />
                <CustomCheckbox label='Включать сводки новостей' name='news' />
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
                Поиск
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
