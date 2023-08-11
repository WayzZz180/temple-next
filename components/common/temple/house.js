import styles from './house.module.sass'
import Image from 'next/image'
import house from '@/assets/house.svg'
import React, { useState, useEffect } from 'react'
import x from '@/assets/X.gif'
import o from '@/assets/O.gif'

export default function House({
  number = 1,
  q = 1,
  a = 1,
  b = 2,
  c = 3,
  correctOption = 'A',
  updateTotalScore,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false); // New state variable
  const [showGifs, setShowGifs] = useState(false);

  const handleButtonClick = (button) => {
    if (!answered) {
      if (selectedOption === button) {
        setSelectedOption(null);
      } else {
        setSelectedOption(button);
        setTimeout(() => {
          setAnswered(true);
          setShowAnswer(true); // 2 秒後顯示正確答案

          // 顯示 X 和 O gif 動畫
          setShowGifs(true);

          // 1 秒後隱藏 X 和 O gif 動畫
          setTimeout(() => {
            setShowGifs(false);
          }, 1000);

          // 檢查使用者是否答對並相應地更新總分數
          if (button === correctOption) {
            updateTotalScore();
          }
        }, 1000);
      }
    }
  };

  const getButtonStyle = (option) => {
    if (answered) {
      if (option === correctOption) {
        return showAnswer ? `${styles.button} ${styles.greenButton} ${styles.selectedButton}` : '';
      } else if (option === selectedOption || option !== correctOption) {
        return showAnswer ? `${styles.button} ${styles.hotPinkButton} ${styles.selectedButton}` : '';
      }
    }
    return styles.button;
  };
  
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.titleNumber_1}`}>{number}</div>
        <div className={`${styles.titleNumber_2}`}>{number}</div>
        <div className={`${styles.question}`}>{q}</div>
        <div className={`${styles.flex_col}`}>
        <button
            className={`${styles.button} ${
              selectedOption === 'A' ? styles.greenButton : ''
            } ${getButtonStyle('A')}`}
            onClick={() => handleButtonClick('A')}
          >
            {a}
          </button>
          <button
            className={`${styles.button} ${
              selectedOption === 'B' ? styles.greenButton : ''
            } ${getButtonStyle('B')}`}
            onClick={() => handleButtonClick('B')}
          >
            {b}
          </button>
          <button
            className={`${styles.button} ${
              selectedOption === 'C' ? styles.greenButton : ''
            } ${getButtonStyle('C')}`}
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
        {answered && (
          <>
            {selectedOption === correctOption ? (
              <Image src={o} alt="" width="400" className={`${styles.yesorno} ${showGifs ? '' : styles.hidden}`}/>
            ) : (
              <Image src={x} alt="" width="400" className={`${styles.yesorno} ${showGifs ? '' : styles.hidden}`}/>
            )}
          </>
        )}
      </div>
    </>
  )
}
