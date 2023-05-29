// CompanyInfo.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../components/spinner/Spinner.jsx';
import { apiAccInfo } from '../../../redux/api/apiAccInfo.js';
import styles from './CompanyInfo.module.scss';

const CompanyInfo = () => {
  const dispatch = useDispatch();
  const { usedCompanyCount, companyLimit, isLoading } = useSelector(
    state => state.accInfo,
  );
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (token) {
      dispatch(apiAccInfo());
    }
  }, [dispatch, token]);

  return (
    <div className={styles.info_container}>
      {!token || isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.info_container_loaded}>
          <span className={styles.info_companies_used}>
            Использовано компаний{' '}
            {
              <p className={styles.info_companies_used_count}>
                {usedCompanyCount}
              </p>
            }
          </span>
          <span className={styles.info_companies_limit}>
            Лимит по компаниям{' '}
            {
              <p className={styles.info_companies_limit_count}>
                {companyLimit}
              </p>
            }
          </span>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
