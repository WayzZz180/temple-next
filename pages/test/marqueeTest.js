import React from 'react';
import styles from './marqueeTest.module.sass';

const Marquee = () => {
  return (
    <div className={`${styles.marqueeContainer}`}>
      <div className={`${styles.marqueeContent}`}>
        {/* 跑马灯内容 */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

export default Marquee;
