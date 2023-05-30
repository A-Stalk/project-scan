// Histograms.jsx

import Left from '@/assets/arrow_left.svg';
import Right from '@/assets/arrow_right.svg';
import moment from 'moment';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiHistograms } from '../../../../redux/api/apiHistograms';
import { selectHistograms } from '../../../../redux/slices/histogramsSlice';
import { selectSearchFormData } from '../../../../redux/slices/searchFormDataSlice';
import Spinner from '../../../spinner/Spinner';
import styles from './Histograms.module.scss';

const Histograms = () => {
  const histograms = useSelector(selectHistograms);
  const searchData = useSelector(selectSearchFormData);
  const dispatch = useDispatch();
  const histogramContainerRef = useRef(null);

  useEffect(() => {
    dispatch(apiHistograms());
    console.log('dispatched');
  }, [dispatch]);

  const handleScroll = scrollOffset => {
    if (histogramContainerRef.current) {
      const container = histogramContainerRef.current;
      const columnElements = container.getElementsByClassName(
        styles.histogram_columns,
      );
      const columnWidth = columnElements[0]?.offsetWidth;
      const scrollPosition = container.scrollLeft + columnWidth * scrollOffset;

      container.scrollTo({
        top: 0,
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };
  // условие пока histograms полностью не загрузится показывать спиннер. в противном случае будет ошибка при попытке сортировки sortedData из-за undefined в [0].

  if (!histograms?.data && !searchData) {
    return (
      <div className={styles.slider_container}>
        <img
          src={Left}
          alt=''
          width={70}
          height={70}
          onClick={() => handleScroll(-3)}
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
          onClick={() => handleScroll(3)}
          className={styles.right_arrow}
        />
      </div>
    );
  } else if (histograms?.data?.length > 0) {
    // сортировка дат по возрастающей
    console.log(histograms.data);
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
          onClick={() => handleScroll(-1)}
          className={styles.left_arrow}
        />
        <div className={styles.main_container}>
          <ul className={styles.title_container}>
            <li>Период</li>
            <li>Всего</li>
            <li>Риски</li>
          </ul>
          <div
            className={styles.histogram_container}
            ref={histogramContainerRef}
          >
            {sortedData.map((item, index) => (
              <ul key={item.date} className={styles.histogram_columns}>
                <li>{moment(item.date).format('DD.MM.YYYY')}</li>
                <li>{item.value}</li>
                <li>{histograms.data[1].data[index].value}</li>
              </ul>
            ))}
          </div>
        </div>
        <img
          src={Right}
          alt=''
          width={70}
          height={70}
          onClick={() => handleScroll(1)}
          className={styles.right_arrow}
        />
      </div>
    );
  }
};

export default Histograms;
