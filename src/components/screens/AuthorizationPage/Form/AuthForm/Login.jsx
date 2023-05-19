// LoginForm.jsx
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../../../redux/slices/userSlice.js';
import { AuthFormSchema } from '../../../../../utils/validation/schemas';
import FormFooter from '../FormFooter/FormFooter';
import styles from './Login.module.scss';
import LoginInput from './LoginInput';

const Login = () => {
  const dispatch = useDispatch();

  const [pswrdVisible, setPswrdVisible] = useState(false);

  const handleFormSubmit = async (values, { setSubmitting }) => {
    console.log('Submitting form...', values);
    try {
      const response = await fetch(
        'https://gateway.scan-interfax.ru/api/v1/account/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: values.login,
            password: values.password,
          }),
        },
      );
      console.log('Submitting form...');
      if (response.ok) {
        const data = await response.json();
        const { accessToken, expire } = data;
        console.log('Login successful:', data);
        dispatch(login({ accessToken, expire }));
      } else {
        const errorData = await response.json();
        console.log('Login failed:', errorData);
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={AuthFormSchema}
      onSubmit={handleFormSubmit}
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
