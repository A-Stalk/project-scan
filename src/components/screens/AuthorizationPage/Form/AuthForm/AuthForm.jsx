// AuthForm.jsx

import { ReactComponent as Lock } from '@/assets/authForm__login_lock.svg';
import styles from './AuthForm.module.scss';
import Tabs from './Tabs';

const AuthForm = () => {
  return (
    <div className={styles.main_section}>
      <Lock className={styles.lock} />
      <form className={styles.form}>
        <Tabs />
      </form>
    </div>
  );
};

export default AuthForm;
