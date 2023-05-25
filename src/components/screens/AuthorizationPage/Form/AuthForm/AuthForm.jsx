// AuthForm.jsx

import { ReactComponent as Lock } from '@/assets/authForm__login_lock.svg';
import styles from './AuthForm.module.scss';
import Tabs from './Tabs';

const AuthForm = () => {
  return (
    <div className={styles.main_section}>
      <Lock className={styles.lock} />
      <div className={styles.form}>
        <Tabs />
      </div>
    </div>
  );
};

export default AuthForm;
