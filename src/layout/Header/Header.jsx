import { ReactComponent as Logo } from '@/assets/header_logo.svg';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import UserMenu from './UserMenu/UserMenu';

const isActive = ({ isActive }) =>
  isActive ? styles.active_link : styles.inactive_link;

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.inside}>
        <NavLink to='/'>
          <Logo className={styles.logo} width={200} height={100} fill='#fff' />
        </NavLink>

        <nav className={styles.nav}></nav>
        <ul className={styles.nav_items}>
          <NavLink to='/' className={isActive}>
            Главная
          </NavLink>
          <NavLink to='/notavailable' className={isActive}>
            Тарифы
          </NavLink>
          <NavLink to='/notavailable' className={isActive}>
            FAQ
          </NavLink>
        </ul>
        <UserMenu className={styles.user_menu} />
      </div>
    </div>
  );
};

export default Header;
