// DocumentsList.jsx

import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiDocuments } from '../../../../redux/api/apiDocuments';
import { selectDocuments } from '../../../../redux/slices/documentsSlice';
import Spinner from '../../../spinner/Spinner';
import DocumentCard from '../DocumentCard/DocumentCard';
import styles from './DocumentList.module.scss';

const DocumentList = () => {
  const dispatch = useDispatch();
  const objects = JSON.parse(localStorage.getItem('objectSearch'));
  const documents = useSelector(selectDocuments)
    .map(doc => doc.ok)
    .flat();

  const [initialLoadCount, setInitialLoadCount] = useState(10);
  const [loadCount, setLoadCount] = useState(10);

  const mainSectionRef = useRef(null);

  useEffect(() => {
    if (objects) {
      const ids = objects?.items
        ?.map(item => item.encodedId)
        ?.slice(0, initialLoadCount);
      if (ids) {
        dispatch(apiDocuments(ids));
      }
    }
  }, []);

  const handleLoadMore = useCallback(() => {
    const nextCount = loadCount + 10;
    setInitialLoadCount(nextCount);

    const newIds = objects?.items
      ?.map(item => item.encodedId)
      ?.slice(loadCount, nextCount);
    if (newIds) {
      dispatch(apiDocuments(newIds));
    }
    setLoadCount(nextCount);
    mainSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [dispatch, loadCount, objects]);

  if (documents.length > 0 && objects) {
    return (
      <div className={styles.main_section} ref={mainSectionRef}>
        <div className={styles.document_list}>
          {documents.map(doc => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
        {objects.items.length > loadCount && (
          <button onClick={handleLoadMore} className={styles.button}>
            Показать больше
          </button>
        )}
      </div>
    );
  } else return <Spinner />;
};

export default DocumentList;
