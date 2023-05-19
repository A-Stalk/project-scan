import DescriptionPicture from '@/assets/img/home__description_section.svg';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import HomeSlider from './HomeSlider/HomeSlider';
import HomeTarifs from './HomeTarifs/HomeTarifs';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.description_section}>
        <div className={styles.left}>
          <h1>
            сервис по поиску <br /> публикаций <br /> о компании <br /> по его
            ИНН
          </h1>
          <h4>
            Комплексный анализ публикаций, получение данных <br /> в формате PDF
            на электронную почту.
          </h4>
          <Link to='/search' className={styles.button}>
            <button>Запросить данные</button>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.desc_image}>
            <img src={DescriptionPicture} alt='desc' />
          </div>
        </div>
      </div>
      <div className={styles.slider_section}>
        <h2>Почему именно мы</h2>
        <HomeSlider className={styles.slider} />
        <div className={styles.slider_image}></div>
      </div>
      <div className={styles.rates_section}>
        <h2 className={styles.rates_section_title}>наши тарифы</h2>
        <HomeTarifs />
      </div>
    </div>
  );
};

export default HomePage;
