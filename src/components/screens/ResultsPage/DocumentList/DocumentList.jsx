// DocumentsList.jsx

import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiDocuments } from '../../../../redux/api/apiDocuments';
import { selectDocuments } from '../../../../redux/slices/documentsSlice';
import { selectObjectSearch } from '../../../../redux/slices/objectSearchSlice';
import Spinner from '../../../spinner/Spinner';
import DocumentCard from '../DocumentCard/DocumentCard';
import styles from './DocumentList.module.scss';

const DocumentList = () => {
  const dispatch = useDispatch();
  const objects = useSelector(selectObjectSearch);
  const documents = useSelector(selectDocuments);
  const [isLoading, setIsLoading] = useState(false);
  const [numDisplayed, setNumDisplayed] = useState(2);

  useEffect(() => {
    if (objects && documents.length === 0) {
      const initialBatch = objects.items.slice(0, numDisplayed);
      dispatch(apiDocuments(initialBatch));
    }
  }, [dispatch, objects.items, documents.length, numDisplayed]);

  const handleLoadMore = useCallback(async () => {
    setIsLoading(true);
    const nextBatch = objects.items.slice(numDisplayed, numDisplayed + 2);

    await dispatch(apiDocuments(nextBatch));
    setIsLoading(false);
    setNumDisplayed(numDisplayed + 2);

    console.log('nextBatch', nextBatch);
  }, [dispatch, objects.items, numDisplayed]);

  const displayedDocuments = documents
    .flatMap(doc => doc.ok)
    .slice(0, numDisplayed);

  console.log('documents', documents);
  console.log('numDisplayed', numDisplayed);

  return (
    <div className={styles.main_section}>
      <div className={styles.document_list}>
        {displayedDocuments.map(doc => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>

      {objects?.items?.length > numDisplayed && (
        <button className={styles.button} onClick={handleLoadMore}>
          {isLoading ? <Spinner /> : 'Показать больше'}
        </button>
      )}
    </div>
  );
};

export default DocumentList;
