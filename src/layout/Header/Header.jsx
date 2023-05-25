import { ReactComponent as Logo } from '@/assets/header_logo.svg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HOME_URL } from '../../data';
import { selectIsLoggedIn } from '../../redux/slices/userSlice';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import styles from './Header.module.scss';
import NavBar from './NavBar/NavBar';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 767px)').matches,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.inside}>
        <NavLink to={HOME_URL}>
          <Logo className={styles.logo} width={200} height={100} fill='#fff' />
        </NavLink>

        {!isMobile && <NavBar className={styles.NavBar} />}
        {isLoggedIn && <CompanyInfo className={styles.CompanyInfo} />}
        <UserMenu className={styles.UserMenu} />
      </div>
    </div>
  );
};

export default Header;
