// Spinner.jsx

import { ReactComponent as SVG } from '../../assets/spinner.svg';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return <SVG className={styles.spinner} width={30} height={30} />;
};

export default Spinner;
