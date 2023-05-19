import { Route, Routes } from 'react-router-dom';
import AuthorizationPage from '../../components/screens/AuthorizationPage/AuthorizationPage';
import HomePage from '../../components/screens/HomePage/HomePage';
import NotAvailablePage from '../../components/screens/NotAvailablePage/NotAvailablePage';
import SearchPage from '../../components/screens/SearchPage/SearchPage';
import styles from './Main.module.scss';
const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/authorization' element={<AuthorizationPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/notavailable' element={<NotAvailablePage />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </div>
  );
};

export default Main;
