import styles from './house.module.sass'
import Image from 'next/image'
import house from '@/assets/house.svg'
import React, { useState } from 'react'

export default function House({number=1,q=1,a=1,b=2,c=3}) {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
      if (activeButton === button) {
        // If the clicked button is already active, set it to null (switch back to $hot_pink)
        setActiveButton(null);
      } else {
        // Otherwise, set the clicked button as active (switch to $green) while resetting others
        setActiveButton(button);
      }
    };
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.titleNumber_1}`}>{number}</div>
        <div className={`${styles.titleNumber_2}`}>{number}</div>
        <div className={`${styles.question}`}>
          {q}
        </div>
        <div className={`${styles.flex_col}`}>
        <button
        className={`${styles.button} ${activeButton === 'A' ? styles.greenButton : ''}`}
        onClick={() => handleButtonClick('A')}
      >
        {a}
      </button>
      <button
        className={`${styles.button} ${activeButton === 'B' ? styles.greenButton : ''}`}
        onClick={() => handleButtonClick('B')}
      >
        {b}
      </button>
      <button
        className={`${styles.button} ${activeButton === 'C' ? styles.greenButton : ''}`}
        onClick={() => handleButtonClick('C')}
      >
        {c}
      </button>
        </div>
        <Image
          src={house}
          alt=""
          width="1540"
          className={`${styles.house}`}
        ></Image>
      </div>
    </>
  )
}
