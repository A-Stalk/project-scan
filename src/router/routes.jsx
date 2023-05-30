import { Route, Routes } from 'react-router-dom';
import AuthorizationPage from '../components/screens/AuthorizationPage/AuthorizationPage';
import HomePage from '../components/screens/HomePage/HomePage';
import NotAvailablePage from '../components/screens/NotAvailablePage/NotAvailablePage';
import ResultsPage from '../components/screens/ResultsPage/ResultsPage';
import SearchPage from '../components/screens/SearchPage/SearchPage';
import {
  AUTH_URL,
  HOME_URL,
  NA_PAGE_URL,
  RESULTS_PAGE_URL,
  SEARCH_PAGE_URL,
} from '../data';
import { PrivateRoute } from './PrivateRoute';

const Routing = () => {
  return (
    <Routes>
      <Route path={HOME_URL} element={<HomePage />} />
      <Route path={AUTH_URL} element={<AuthorizationPage />} />

      <Route element={<PrivateRoute />}>
        <Route path={SEARCH_PAGE_URL} element={<SearchPage />} />
        <Route path={RESULTS_PAGE_URL} element={<ResultsPage />} />
      </Route>

      <Route path={NA_PAGE_URL} element={<NotAvailablePage />} />

      <Route path='*' element={<h1>404</h1>} />
    </Routes>
  );
};

export default Routing;
