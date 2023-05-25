// NavBar.jsx

import { NavLink } from 'react-router-dom';
import { HOME_URL, NA_PAGE_URL } from '../../../data';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const isActive = ({ isActive }) =>
    isActive ? styles.active_link : styles.inactive_link;

  return (
    <ul className={styles.nav_items}>
      <NavLink to={HOME_URL} className={isActive}>
        Главная
      </NavLink>
      <NavLink to={NA_PAGE_URL} className={isActive}>
        Тарифы
      </NavLink>
      <NavLink to={NA_PAGE_URL} className={isActive}>
        FAQ
      </NavLink>
    </ul>
  );
};

export default NavBar;
