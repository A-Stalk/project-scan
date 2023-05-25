// UserMenu.jsx

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../../../data';
import {
  logoutProcess,
  selectIsLoggedIn,
  selectUser,
} from '../../../redux/slices/userSlice';
import Hamburger from './Hamburger/Hamburger';
import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logoutProcess());
    navigate(AUTH_URL);
  };

  return (
    <div className={styles.user_menu}>
      {!isLoggedIn ? (
        <div className={styles.user_unknown}>
          <span className={styles.user_unknown_reg}>Зарегистрироваться</span>
          <Link to={AUTH_URL}>
            <button className={styles.user_unknown_button}>Войти</button>
          </Link>
          <div className={styles.hamburger_mobile}>
            <Hamburger />
          </div>
        </div>
      ) : (
        <div className={styles.menu_logged_in}>
          <div className={styles.user_info_container}>
            <div className={styles.user_info}>
              <span className={styles.user_info_name}>{user.name}</span>
              <button className={styles.user_info_exit} onClick={handleLogOut}>
                Выйти
              </button>
            </div>
            <img
              src={user.avatar}
              alt='user_avatar'
              className={styles.user_info_avatar}
            />
          </div>
          <div className={styles.hamburger_mobile}>
            <Hamburger />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
