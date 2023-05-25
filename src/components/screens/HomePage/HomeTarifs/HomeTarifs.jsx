// HomeTarifs.jsx

import homeTarifCurTarifIcon from '@/assets/home__tarifs_current_tarif.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NA_PAGE_URL } from '../../../../data';
import {
  selectIsLoggedIn,
  selectUser,
} from '../../../../redux/slices/userSlice';
import styles from './HomeTarifs.module.scss';
import { TarifsStore } from '/src/data.js';

const HomeTarifs = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userTariff = useSelector(selectUser)?.tariff;
  const navigate = useNavigate();

  return (
    <div className={styles.main_section}>
      {TarifsStore.map(card => {
        const isUserTariff = isLoggedIn && card.title_left_h3 === userTariff;

        return (
          <div
            key={card.id}
            className={card.name}
            style={{
              borderColor: isUserTariff ? card.color : '',
            }}
          >
            <div className={styles.title} style={{ background: card.color }}>
              <div className={styles.title_left}>
                <h3>{card.title_left_h3}</h3>
                <p>{card.title_left_p}</p>
              </div>
              <div className={styles.title_right}>
                <img src={card.title_right} alt='' />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.current_tarif}>
                {isUserTariff && (
                  <img
                    className={styles.current_tarif_icon}
                    src={homeTarifCurTarifIcon}
                    alt=''
                  />
                )}
              </div>

              <div className={styles.rate}>
                <span className={styles.rate_field}>
                  <h3>{card.rate_h3_new}</h3>
                  <span>{card.rate_h3_old}</span>
                </span>
                <p>{card.rate_p}</p>
              </div>
              <div className={styles.rate_description}>
                <h4>{card.rate_description_h4}</h4>
                <ul>
                  <li>{card.rate_description_li1}</li>
                  <li>{card.rate_description_li2}</li>
                  <li>{card.rate_description_li3}</li>
                </ul>
              </div>
              {isUserTariff ? (
                <button
                  className={styles.button_current_tarif}
                  onClick={() => navigate(NA_PAGE_URL)}
                >
                  Перейти в личный кабинет
                </button>
              ) : (
                <button
                  className={styles.button}
                  onClick={() => navigate(NA_PAGE_URL)}
                >
                  Подробнее
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeTarifs;
