// Hamburger.jsx

import avatar from '@/assets/ava_example.jpg';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../../../../data.js';
import {
  logoutProcess,
  selectIsLoggedIn,
  selectUser,
} from '../../../../redux/slices/userSlice.js';
import NavBar from '../../NavBar/NavBar.jsx';
import styles from './Hamburger.module.scss';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains(styles.hamburger)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleLogOut = () => {
    dispatch(logoutProcess());
    navigate(AUTH_URL);
  };

  return (
    <div className={styles.main_container}>
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} />

      <div
        ref={menuRef}
        className={`${styles.menu} ${isOpen ? styles.slideIn : ''}`}
      >
        {' '}
        {!isLoggedIn && (
          <div className={styles.user_unknown}>
            <Link to={AUTH_URL}>
              <button className={styles.user_unknown_button}>Войти</button>
            </Link>
          </div>
        )}
        {isLoggedIn && (
          <div className={styles.user_info_container}>
            <div className={styles.user_info}>
              <span className={styles.user_info_name}>{user.name}</span>
            </div>
            <img
              src={avatar}
              alt='user_avatar'
              className={styles.user_info_avatar}
            />
          </div>
        )}
        <NavBar className={styles.NavBar} />
        {isLoggedIn && (
          <button className={styles.user_info_exit} onClick={handleLogOut}>
            Выйти
          </button>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
