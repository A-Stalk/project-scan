import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthorizationPage from '../../components/screens/AuthorizationPage/AuthorizationPage';
import HomePage from '../../components/screens/HomePage/HomePage';
import NotAvailablePage from '../../components/screens/NotAvailablePage/NotAvailablePage';
import ResultsPage from '../../components/screens/ResultsPage/ResultsPage';
import SearchPage from '../../components/screens/SearchPage/SearchPage';
import {
  AUTH_URL,
  HOME_URL,
  NA_PAGE_URL,
  RESULTS_PAGE_URL,
  SEARCH_PAGE_URL,
} from '../../data';
import { logoutProcess, selectExpire } from '../../redux/slices/userSlice';
import styles from './Main.module.scss';

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expireDate = useSelector(selectExpire);
  const currentDate = new Date().toISOString();

  useEffect(() => {
    if (expireDate < currentDate) {
      dispatch(logoutProcess());
      navigate(AUTH_URL);
      alert('Время сеанса истекло, авторизуйтесь заново');
    }
  }, [expireDate, currentDate, dispatch, navigate]);

  return (
    <div className={styles.main}>
      <Routes>
        <Route path={HOME_URL} element={<HomePage />} />
        <Route path={AUTH_URL} element={<AuthorizationPage />} />
        <Route path={SEARCH_PAGE_URL} element={<SearchPage />} />
        <Route path={RESULTS_PAGE_URL} element={<ResultsPage />} />

        <Route path={NA_PAGE_URL} element={<NotAvailablePage />} />

        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </div>
  );
};

export default Main;
