/* eslint-disable react/prop-types */

// DocumentCard.jsx

import DOMPurify from 'dompurify';
import HTMLReactParser from 'html-react-parser';
import moment from 'moment';
import styles from './DocumentCard.module.scss';

const DocumentCard = ({ doc }) => {
  const {
    issueDate,
    url,
    source: { name: sourceName },
    title: { text: titleText },
    attributes: {
      isAnnouncement,
      isDigest,
      isTechNews,
      isSpeechRecognition,
      wordCount,
    },
    content: { markup },
  } = doc;

  const sanitizedMarkup = DOMPurify.sanitize(markup);
  const parsedMarkup = HTMLReactParser(sanitizedMarkup);
  const cleanText = parsedMarkup.replace(/<[^>]+>/g, '');

  return (
    <div className={styles.card_container}>
      <header className={styles.header}>
        <p>{moment(issueDate).format('DD.MM.YYYY')}</p>
        {url ? (
          <a href={url} target='_blank' rel='noreferrer'>
            {sourceName}
          </a>
        ) : (
          <p>{sourceName}</p>
        )}
      </header>

      <main className={styles.main}>
        <h3>{titleText}</h3>

        {isAnnouncement && <span className={styles.bage}>Анонсы</span>}
        {isDigest && <span className={styles.bage}>Дайджест</span>}
        {isSpeechRecognition && (
          <span className={styles.bage}>isSpeechRecognition</span>
        )}
        {isTechNews && <span className={styles.bage}>Технические новости</span>}

        <img src='' alt='' className={styles.image} />
        <p className={styles.content}>{cleanText.slice(0, 300)}...</p>
      </main>

      <footer className={styles.footer}>
        <button className={styles.button}>Читать в источнике</button>
        <p>{wordCount} слова</p>
      </footer>
    </div>
  );
};

export default DocumentCard;
