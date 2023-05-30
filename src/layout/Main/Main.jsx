import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../../data';
import { logoutProcess, selectExpire } from '../../redux/slices/userSlice';
import Routing from '../../router/routes';
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
      <Routing />
    </div>
  );
};

export default Main;
