// LoginForm.jsx
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../../../redux/slices/authAPI.js';
import { AuthFormSchema } from '../../../../../utils/validation/schemas';
import FormFooter from '../FormFooter/FormFooter';
import styles from './Login.module.scss';
import LoginInput from './LoginInput';

const Login = () => {
  const dispatch = useDispatch();

  const [pswrdVisible, setPswrdVisible] = useState(false);

  const onSubmit = async values => {
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

      if (response.ok) {
        const data = await response.json();
        const { accessToken, expire } = data;
        dispatch(login({ accessToken, expire }));
        // Handle successful login, such as redirecting to another page
      } else {
        const errorData = await response.json();
        // Handle error response from the API
        console.log(errorData.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.log(error.message);
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

// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    accessToken: null,
    expire: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.expire = action.payload.expire;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.expire = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
