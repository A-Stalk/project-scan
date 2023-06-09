// ResultsPage.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TitleImage from '../../../assets/img/result_page_title.svg';
import { SEARCH_PAGE_URL } from '../../../data';
import { apiObjectSearch } from '../../../redux/api/apiObjectSearch';
import {
  selectObjectSearch,
  selectObjectSearchLoading,
} from '../../../redux/slices/objectSearchSlice';
import { selectSearchFormData } from '../../../redux/slices/searchFormDataSlice';
import Spinner from '../../spinner/Spinner';
import DocumentList from './DocumentList/DocumentList';
import Histograms from './Histograms/Histograms';
import styles from './ResultsPage.module.scss';

const ResultsPage = () => {
  const dispatch = useDispatch();
  const objects = useSelector(selectObjectSearch);
  const objectsLoading = useSelector(selectObjectSearchLoading);
  const searchData = useSelector(selectSearchFormData);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchData) {
      dispatch(apiObjectSearch());
    }
  }, [searchData]);

  // console.log(searchData);
  // console.log(objects.items.length);

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

      {/* условие заглушки на случай несанкционированного перехода на страницу без поиска или реального отсутствия результатов поиска в objects */}
      {!searchData || objects?.items?.length === 0 ? (
        <div className={styles.no_results_container}>
          <h4>Ничего не найдено, выполните новый поиск</h4>
          <button
            className={styles.button}
            onClick={() => navigate(SEARCH_PAGE_URL)}
          >
            Новый поиск
          </button>
        </div>
      ) : (
        <div className={styles.results_container}>
          <div className={styles.histogram_info_container}>
            <h2>Общая сводка</h2>
            <span className={styles.histogram_count}>
              Найдено
              {objectsLoading ? (
                <Spinner />
              ) : (
                <p>{objects?.items?.length || 0}</p>
              )}
              вариантов
            </span>
          </div>
          <Histograms />
          <h2>Список документов</h2>
          {!objectsLoading ? <DocumentList /> : <Spinner />}
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
