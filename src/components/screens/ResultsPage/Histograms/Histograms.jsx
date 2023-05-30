// Histograms.jsx

import Left from '@/assets/arrow_left.svg';
import Right from '@/assets/arrow_right.svg';
import moment from 'moment';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiHistograms } from '../../../../redux/api/apiHistograms';
import { selectHistograms } from '../../../../redux/slices/histogramsSlice';
import { selectSearchFormData } from '../../../../redux/slices/searchFormDataSlice';
import Spinner from '../../../spinner/Spinner';
import styles from './Histograms.module.scss';

const Histograms = () => {
  const histograms = useSelector(selectHistograms);
  const searchData = useSelector(selectSearchFormData);
  const dispatch = useDispatch();
  const swiperRef = useRef();

  useEffect(() => {
    dispatch(apiHistograms());
  }, [dispatch]);

  // условие пока histograms полностью не загрузится показывать спиннер внутри. в противном случае будет ошибка при попытке сортировки sortedData из-за undefined в [0].

  if (!histograms?.data && !searchData) {
    return (
      <div className={styles.slider_container}>
        <img
          src={Left}
          alt=''
          width={70}
          height={70}
          className={styles.left_arrow}
        />
        <div className={styles.main_container}>
          <ul className={styles.title_container}>
            <li>Период</li>
            <li>Всего</li>
            <li>Риски</li>
          </ul>
          <div className={styles.histogram_container}>
            <span className={styles.spinner_container}>
              <Spinner /> <p>Загружаем данные </p>
            </span>
          </div>
        </div>
        <img
          src={Right}
          alt=''
          width={70}
          height={70}
          className={styles.right_arrow}
        />
      </div>
    );
  } else if (histograms?.data?.length > 0) {
    // сортировка дат по возрастающей

    const sortedData = [...histograms.data[0].data].sort((a, b) =>
      moment(a.date).diff(moment(b.date)),
    );

    return (
      <div className={styles.slider_container}>
        <img
          src={Left}
          alt=''
          width={70}
          height={70}
          onClick={() => swiperRef.current?.slidePrev()}
          className={styles.left_arrow}
        />
        <div className={styles.main_container}>
          <ul className={styles.title_container}>
            <li>Период</li>
            <li>Всего</li>
            <li>Риски</li>
          </ul>
          <Swiper
            className={styles.histogram_container}
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1.2,
              },
              391: {
                width: 391,
                slidesPerView: 1.3,
              },
              767: {
                width: 767,
                slidesPerView: 6,
              },
            }}
            spaceBetween={10}
            onBeforeInit={swiper => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation]}
          >
            <div className={styles.histogram_container}>
              {sortedData.map((item, index) => (
                <SwiperSlide
                  key={item.date}
                  className={styles.histogram_columns}
                >
                  <span>{moment(item.date).format('DD.MM.YYYY')}</span>
                  <span>{item.value}</span>
                  <span>{histograms.data[1].data[index].value}</span>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <img
          src={Right}
          alt=''
          width={70}
          height={70}
          onClick={() => swiperRef.current?.slideNext()}
          className={styles.right_arrow}
        />
      </div>
    );
  }
};

export default Histograms;
