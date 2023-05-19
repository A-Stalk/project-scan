import { useSelector } from 'react-redux';
import { Route, redirect } from 'react-router-dom';
import { AUTH_URL } from '../data';

export function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : redirect(AUTH_URL)
      }
    />
  );
}
