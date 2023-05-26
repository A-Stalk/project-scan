// DocumentsList.jsx

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDocuments } from '../../../../redux/slices/documentsSlice';
import Spinner from '../../../spinner/Spinner';
import DocumentCard from '../DocumentCard/DocumentCard';
import styles from './DocumentList.module.scss';

const DocumentList = () => {
  const documentsData = useSelector(selectDocuments).map(doc => doc.ok);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(visibleCount + 10);
      setIsLoading(false);
    }, 1000);
  };

  const loadedDocuments = documentsData.slice(0, visibleCount);

  return (
    <div className={styles.main_section}>
      <div className={styles.document_list}>
        {' '}
        {loadedDocuments.map(doc => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>

      {visibleCount < documentsData.length && (
        <button className={styles.button} onClick={handleLoadMore}>
          {isLoading ? <Spinner /> : 'Показать больше'}
        </button>
      )}
    </div>
  );
};

export default DocumentList;
