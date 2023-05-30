// LoginForm.jsx

import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HOME_URL } from '../../../../../data.js';
import { apiLoginUser } from '../../../../../redux/api/apiLoginUser.js';
import { AuthFormSchema } from '../../../../../utils/validation/schemas';
import Spinner from '../../../../spinner/Spinner.jsx';
import FormFooter from '../FormFooter/FormFooter';
import styles from './Login.module.scss';
import LoginInput from './LoginInput';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pswrdVisible, setPswrdVisible] = useState(false);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      setSubmitting(true);
      const { login, password } = values;
      const response = await dispatch(apiLoginUser({ login, password }));

      if (apiLoginUser.fulfilled.match(response)) {
        navigate(HOME_URL);
      } else {
        setFieldError('login', 'Неправильный логин или пароль');
        setFieldError('password', 'Неправильный логин или пароль');
      }
    } catch (error) {
      setFieldError('login', error.message);
      setFieldError('password', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={AuthFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty, isSubmitting }) => (
        <Form className={styles.form}>
          <LoginInput
            inputProps={{ type: 'text', name: 'login' }}
            label='Логин или номер телефона ("sf_student1"):'
          />
          <div className={styles.pswrd_section}>
            <LoginInput
              inputProps={{
                type: pswrdVisible ? 'text' : 'password',
                name: 'password',
              }}
              label='Пароль ("4i2385j"):'
            />
            <span
              className={
                !pswrdVisible ? styles.pswrd_hidden : styles.pswrd_visible
              }
              onClick={() => setPswrdVisible(prevState => !prevState)}
            />
          </div>

          <div className={styles.button_section}>
            <button
              type='submit'
              disabled={!dirty || !isValid || isSubmitting}
              style={
                !dirty || !isValid || isSubmitting
                  ? { opacity: 0.6 }
                  : { opacity: 1 }
              }
            >
              {isSubmitting ? <Spinner /> : 'Войти'}
            </button>
            <a href=''>Восстановить пароль</a>
          </div>
          <FormFooter />
        </Form>
      )}
    </Formik>
  );
};

export default Login;
