import { ReactComponent as Doc } from '@/assets/img/search_page_document.svg';
import { ReactComponent as Folders } from '@/assets/img/search_page_folders.svg';
import { ReactComponent as Rocket } from '@/assets/img/search_page_rocket.svg';
import SearchForm from './SearchForm/SearchForm';
import styles from './SearchPage.module.scss';

const SearchPage = () => {
  return (
    <div className={styles.main_section}>
      <div className={styles.title}>
        <h1>Найдите необходимые данные в пару кликов.</h1>
        <h4>
          Задайте параметры поиска. Чем больше заполните, тем точнее поиск
        </h4>
      </div>
      <div className={styles.search_form}>
        <SearchForm />
      </div>

      <Doc className={styles.image_doc} />

      <Folders className={styles.image_folders} />

      <Rocket className={styles.image_rocket} />
    </div>
  );
};

export default SearchPage;
