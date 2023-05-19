import styles from './HomeTarifs.module.scss';
import { TarifsStore } from '/src/data.js';

const HomeTarifs = () => {
  return (
    <div className={styles.main_section}>
      {TarifsStore.map(card => {
        return (
          <div key={card.id} className={card.name}>
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
              <img
                className={styles.current_tarif}
                src={card.current_tarif}
                alt=''
              />
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
              <button className={styles.button}>{card.button}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeTarifs;
