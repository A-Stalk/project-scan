import { ReactComponent as FbIcon } from '../../../../../assets/authForm__footer_fb.svg';
import { ReactComponent as GoogleIcon } from '../../../../../assets/authForm__footer_google.svg';
import { ReactComponent as YaIcon } from '../../../../../assets/authForm__footer_ya.svg';
import styles from './FormFooter.module.scss';

const FormFooter = () => {
  return (
    <div className={styles.footer}>
      <p>Войти через:</p>
      <div className={styles.options}>
        <div className={styles.icons}>
          <GoogleIcon />
        </div>
        <div className={styles.icons}>
          <FbIcon />
        </div>
        <div className={styles.icons}>
          <YaIcon />
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
