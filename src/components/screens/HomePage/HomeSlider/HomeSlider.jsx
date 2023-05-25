// HomeSlider.jsx

import Left from '@/assets/arrow_left.svg';
import Right from '@/assets/arrow_right.svg';
import { useState } from 'react';
import styles from './HomeSlider.module.scss';
import { SliderStore } from '/src/data.js';

const HomeSlider = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const numCards = SliderStore.length;
  const leftCardSrc =
    SliderStore[currentCardIndex - 1 < 0 ? numCards - 1 : currentCardIndex - 1];
  const rightCardSrc =
    SliderStore[currentCardIndex + 1 >= numCards ? 0 : currentCardIndex + 1];

  const handlePrev = () => {
    setCurrentCardIndex(
      currentCardIndex === 0 ? SliderStore.length - 1 : currentCardIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentCardIndex(
      currentCardIndex === SliderStore.length - 1 ? 0 : currentCardIndex + 1,
    );
  };

  return (
    <div className={styles.slider_section}>
      <div className={styles.arrow_left}>
        <img src={Left} alt='' onClick={handlePrev} width={100} height={100} />
      </div>

      <div className={styles.slider_items}>
        <div className={styles.item_left} onClick={handlePrev}>
          <img src={leftCardSrc.pic} alt='' width={70} height={70} />
          <p>{leftCardSrc.text}</p>
        </div>
        <div className={styles.item_center}>
          <img
            src={SliderStore[currentCardIndex].pic}
            alt=''
            width={70}
            height={70}
          />
          <p>{SliderStore[currentCardIndex].text}</p>
        </div>
        <div className={styles.item_right} onClick={handleNext}>
          <img src={rightCardSrc.pic} alt='' width={70} height={70} />
          <p>{rightCardSrc.text}</p>
        </div>
      </div>

      <div className={styles.arrow_right}>
        <img src={Right} alt='' onClick={handleNext} width={100} height={100} />
      </div>
    </div>
  );
};

export default HomeSlider;
