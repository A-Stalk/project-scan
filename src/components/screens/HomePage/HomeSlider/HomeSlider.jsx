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
        <img src={Left} alt='' onClick={handlePrev} width={150} height={150} />
      </div>

      {
        <>
          <div className={styles.item_left} onClick={handlePrev}>
            <img src={leftCardSrc.pic} alt='' />
            <p>{leftCardSrc.text}</p>
          </div>
          <div className={styles.item_center}>
            <img src={SliderStore[currentCardIndex].pic} alt='' />
            <p>{SliderStore[currentCardIndex].text}</p>
          </div>
          <div className={styles.item_right} onClick={handleNext}>
            <img src={rightCardSrc.pic} alt='' />
            <p>{rightCardSrc.text}</p>
          </div>
        </>
      }

      <div className={styles.arrow_right}>
        <img src={Right} alt='' onClick={handleNext} width={150} height={150} />
      </div>
    </div>
  );
};

export default HomeSlider;
