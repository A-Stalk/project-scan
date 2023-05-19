import { ReactComponent as FooterLogo } from '@/assets/footer_logo.svg';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inside}>
        <NavLink to='/'>
          <FooterLogo className={styles.logo} width={200} height={100} />
        </NavLink>

        <div className={styles.contacts}>
          г. Москва, Цветной б-р, 40
          <br />
          +7 495 771 21 11
          <br /> info@skan.ru
          <br />
          <br /> Copyright. 2022
        </div>
      </div>
    </div>
  );
};

export default Footer;
