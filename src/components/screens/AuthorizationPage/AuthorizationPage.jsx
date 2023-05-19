import Image from '@/assets/img/authorization_left.svg';
import styles from './AuthorizationPage.module.scss';
import AuthForm from './Form/AuthForm/AuthForm';

const AuthorizationPage = () => {
  return (
    <div className={styles.main_section}>
      <h1 className={styles.title}>
        Для оформления подписки на тариф, необходимо авторизоваться.
      </h1>
      <div className={styles.form}>
        <AuthForm />
      </div>
      <img src={Image} alt='Authorization' className={styles.image} />
    </div>
  );
};

export default AuthorizationPage;
