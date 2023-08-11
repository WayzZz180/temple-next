import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './temple.module.sass'


export default function TimeCirle() {
    const [zodiac, setZodiac] = useState(1);

    const handleHover = (zodiacNumber) => {
      setZodiac(zodiacNumber);
    };
  return (
    <>
    <div className={`${styles.container}`}>
      <div className={`${styles.circle}`}>
      <Image
        src={`/zodiac/zodiac_${zodiac}.svg`}
        width="900"
        height="900"
        className={`${styles.zodiac}`}
      />
      <Image
        src={`/zodiac/circle.svg`}
        width="900"
        height="900"
        className={`${styles.zodiaccircle}`}
      />
      <Image
        src={`/zodiac/text.svg`}
        width="900"
        height="900"
        className={`${styles.zodiactext}`}
      />
      <div
        className={`${styles.slice1}`}
        onMouseEnter={() => handleHover(1)}
      ></div>
      <div
        className={`${styles.slice2}`}
        onMouseEnter={() => handleHover(2)}
      ></div>
      <div
        className={`${styles.slice3}`}
        onMouseEnter={() => handleHover(3)}
      ></div>
      <div
        className={`${styles.slice4}`}
        onMouseEnter={() => handleHover(4)}
      ></div>
      <div
        className={`${styles.slice5}`}
        onMouseEnter={() => handleHover(5)}
      ></div>
      <div
        className={`${styles.slice6}`}
        onMouseEnter={() => handleHover(6)}
      ></div>
      <div
        className={`${styles.slice7}`}
        onMouseEnter={() => handleHover(7)}
      ></div>
      <div
        className={`${styles.slice8}`}
        onMouseEnter={() => handleHover(8)}
      ></div>
      <div
        className={`${styles.slice9}`}
        onMouseEnter={() => handleHover(9)}
      ></div>
      <div
        className={`${styles.slice10}`}
        onMouseEnter={() => handleHover(10)}
      ></div>
      <div
        className={`${styles.slice11}`}
        onMouseEnter={() => handleHover(11)}
      ></div>
      <div
        className={`${styles.slice12}`}
        onMouseEnter={() => handleHover(12)}
      ></div>
      </div>

    </div>
    </>
  )
}
TimeCirle.getLayout = (page) => (<>{page}</>)