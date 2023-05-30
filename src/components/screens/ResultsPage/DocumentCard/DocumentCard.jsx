/* eslint-disable react/prop-types */

// DocumentCard.jsx

import DOMPurify from 'dompurify';
import HTMLReactParser from 'html-react-parser';
import moment from 'moment';
import { Link } from 'react-router-dom';
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

  const findImage = parsedMarkup => {
    const extractImage = parsedMarkup.match(/<img src="(.*?)"/m);
    return extractImage ? extractImage[1] : null;
  };

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
        <h3>{titleText.slice(0, 70)}...</h3>

        <div className={styles.bage_container}>
          {isAnnouncement && <span className={styles.bage_anons}>Анонсы</span>}
          {isDigest && <span className={styles.bage_digest}>Дайджест</span>}
          {isSpeechRecognition && (
            <span className={styles.bage_speech}>Речь</span>
          )}
          {isTechNews && (
            <span className={styles.bage_tech}>Технические новости</span>
          )}
        </div>

        <div
          className={styles.image}
          style={{ backgroundImage: `url(${findImage(parsedMarkup)})` }}
        ></div>
        <p className={styles.content}>{cleanText.slice(0, 300)}...</p>
      </main>

      <footer className={styles.footer}>
        <div className={styles.button_container}>
          <Link
            to={url}
            target='_blank'
            rel='noreferrer'
            className={styles.button_link}
          >
            {url && (
              <button className={styles.button}>Читать в источнике</button>
            )}
          </Link>
        </div>

        <p>{wordCount} слова</p>
      </footer>
    </div>
  );
};

export default DocumentCard;
