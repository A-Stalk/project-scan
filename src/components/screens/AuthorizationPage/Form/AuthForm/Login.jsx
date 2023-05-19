// LoginForm.jsx
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../../../redux/slices/userSlice';
import { AuthFormSchema } from '../../../../../utils/validation/schemas';
import FormFooter from '../FormFooter/FormFooter';
import styles from './Login.module.scss';
import LoginInput from './LoginInput';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pswrdVisible, setPswrdVisible] = useState(false);

  const onSubmit = async (values, actions) => {
    console.log('Submitting form with values:', values);
    try {
      await dispatch(login(values));
      navigate('/');
    } catch (error) {
      if (error.response.status === 401) {
        actions.setFieldError('password', 'Такой пароль не существует');
      } else {
        actions.setFieldError('password', 'Что-то пошла не так');
      }
    }
  };

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={AuthFormSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, isSubmitting }) => (
        <div className={styles.form}>
          <LoginInput
            inputProps={{ type: 'text', name: 'login' }}
            label='Логин или номер телефона ( sf_student1 ):'
          />
          <div className={styles.pswrd_section}>
            <LoginInput
              inputProps={{
                type: pswrdVisible ? 'text' : 'password',
                name: 'password',
              }}
              label='Пароль ( 4i2385j ):'
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
              Войти
            </button>
            <a href=''>Восстановить пароль</a>
          </div>
          <FormFooter />
        </div>
      )}
    </Formik>
  );
};

export default Login;
