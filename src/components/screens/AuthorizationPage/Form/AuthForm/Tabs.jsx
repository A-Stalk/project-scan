import { useState } from 'react';
import Login from './Login';
import styles from './Tabs.module.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const toggleTab = tab => {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };
  return (
    <div>
      <div className={styles.tabs}>
        <div
          className={activeTab === 1 ? styles.sign_in_active : styles.sign_in}
          onClick={() => toggleTab(1)}
        >
          Войти
        </div>
        <div
          className={activeTab === 2 ? styles.register_active : styles.register}
          onClick={() => toggleTab(2)}
        >
          Зарегистрироваться
        </div>
      </div>
      <div className={styles.tabs_content}>
        <div
          className={
            activeTab === 1 ? styles.tab_content : styles.tab_content_inactive
          }
        >
          <Login />
        </div>
        <div
          className={
            activeTab === 2 ? styles.tab_content : styles.tab_content_inactive
          }
        >
          Не входит в ТЗ проекта
        </div>
      </div>
    </div>
  );
};

export default Tabs;
