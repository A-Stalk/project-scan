// ResultsPage.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TitleImage from '../../../assets/img/result_page_title.svg';
import { apiObjectSearch } from '../../../redux/api/apiObjectSearch';
import {
  selectObjectSearch,
  selectObjectSearchLoading,
} from '../../../redux/slices/objectSearchSlice';
import Spinner from '../../spinner/Spinner';
import DocumentList from './DocumentList/DocumentList';
import Histograms from './Histograms/Histograms';
import styles from './ResultsPage.module.scss';

const ResultsPage = () => {
  const dispatch = useDispatch();
  const objects = useSelector(selectObjectSearch);
  const objectsLoading = useSelector(selectObjectSearchLoading);

  useEffect(() => {
    dispatch(apiObjectSearch());
  }, [dispatch]);

  return (
    <div className={styles.resultPage}>
      <div className={styles.title_container}>
        <div className={styles.title}>
          <h1>Ищем. Скоро будут результаты</h1>
          <h4>
            Поиск может занять некоторое время, просим сохранять терпение.
          </h4>
        </div>
        <img src={TitleImage} className={styles.title_image} alt='' />
      </div>
      <div className={styles.histogram_info_container}>
        <h2>Общая сводка</h2>
        <span className={styles.histogram_count}>
          Найдено
          {objectsLoading ? <Spinner /> : <p>{objects?.items?.length || 0}</p>}
          вариантов
        </span>
      </div>
      <Histograms />
      <h2>Список документов</h2>
      {!objectsLoading ? <DocumentList /> : <Spinner />}
    </div>
  );
};

export default ResultsPage;
