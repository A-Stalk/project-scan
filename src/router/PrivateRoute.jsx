import { Navigate, Outlet } from 'react-router-dom';
import { AUTH_URL } from '../data';

export function PrivateRoute() {
  let token = localStorage.getItem('accessToken');

  return token ? <Outlet /> : <Navigate to={AUTH_URL} />;
}
