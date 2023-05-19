import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={styles.user_menu}>
      {!isLoggedIn ? (
        <div className={styles.user_unknown}>
          <span className={styles.user_unknown_reg}>Зарегистрироваться</span>
          <Link to='/authorization'>
            <button className={styles.user_unknown_button}>Войти</button>
          </Link>
        </div>
      ) : (
        <div className={styles.menu_logged_in}>
          <div className={styles.info_container}>
            <span className={styles.info_companies_used}>
              Использовано компаний
            </span>
            <span className={styles.info_companies_limit}>
              Лимит по компаниям
            </span>
          </div>
          <div className={styles.user_info_container}>
            <div className={styles.user_info}>
              <span className={styles.user_info_name}>Имя</span>
              <button className={styles.user_info_exit}>Выйти</button>
            </div>
            <img
              src='/src/assets/ava_example.jpg'
              alt=''
              className={styles.user_info_avatar}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
