import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './temple.module.sass'

export default function TimeCirle({
  date: initialDate = '12/22',
  whatday: initialWhatday = '冬至',
  setNumber,
}) {
  const [zodiac, setZodiac] = useState(1)
  const [date, setDate] = useState(initialDate)
  const [whatday, setWhatday] = useState(initialWhatday)

  const handleHover = (zodiacNumber) => {
    setZodiac(zodiacNumber)
  }

  const buttonInfo = [
    { date: '12/22', whatday: '冬至' },
    { date: '12/24', whatday: '送神' },
    { date: '12/30', whatday: '除夕' },
    { date: '01/04', whatday: '接神' },
    { date: '01/01', whatday: '過年' },
    { date: '01/09', whatday: '天公生' },
    { date: '04/05', whatday: '清明' },
    { date: '07/01', whatday: '鬼門開' },
    { date: '07/15', whatday: '中元' },
    { date: '07/30', whatday: '鬼門關' },
    { date: '08/15', whatday: '中秋' },
    { date: '09/09', whatday: '重陽' },
  ]
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.circle}`}>
          <Image
            src={`/season/cirle_${zodiac}.svg`}
            width="900"
            height="900"
            className={`${styles.zodiac}`}
          />
          <Image
            src={`/season/undrecircle.svg`}
            width="900"
            height="900"
            className={`${styles.zodiaccircle}`}
          />
          <Image
            src={`/season/circleword.svg`}
            width="900"
            height="900"
            className={`${styles.zodiactext}`}
          />
          <div className={`${styles.calendrtitle}`}>農曆</div>
          <div className={`${styles.calendrnumber}`}>{date}</div>
          <div className={`${styles.flex_row}`}>
            <div className={`${styles.calendrtext}`}>{whatday}</div>
          </div>
          <div
            className={`${styles.slice1}`}
            role="presentation"
            onClick={() => {
              setNumber(1)
              setDate(buttonInfo[0].date)
              setWhatday(buttonInfo[0].whatday)
            }}
            onMouseEnter={() => handleHover(1)}
          ></div>
          <div
            className={`${styles.slice2}`}
            role="presentation"
            onClick={() => {
              setNumber(2)
              setDate(buttonInfo[1].date)
              setWhatday(buttonInfo[1].whatday)
            }}
            onMouseEnter={() => handleHover(2)}
          ></div>
          <div
            className={`${styles.slice3}`}
            role="presentation"
            onClick={() => {
              setNumber(3)
              setDate(buttonInfo[2].date)
              setWhatday(buttonInfo[2].whatday)
            }}
            onMouseEnter={() => handleHover(3)}
          ></div>
          <div
            className={`${styles.slice4}`}
            role="presentation"
            onClick={() => {
              setNumber(4)
              setDate(buttonInfo[3].date)
              setWhatday(buttonInfo[3].whatday)
            }}
            onMouseEnter={() => handleHover(4)}
          ></div>
          <div
            className={`${styles.slice5}`}
            role="presentation"
            onClick={() => {
              setNumber(5)
              setDate(buttonInfo[4].date)
              setWhatday(buttonInfo[4].whatday)
            }}
            onMouseEnter={() => handleHover(5)}
          ></div>
          <div
            className={`${styles.slice6}`}
            role="presentation"
            onClick={() => {
              setNumber(6)
              setDate(buttonInfo[5].date)
              setWhatday(buttonInfo[5].whatday)
            }}
            onMouseEnter={() => handleHover(6)}
          ></div>
          <div
            className={`${styles.slice7}`}
            role="presentation"
            onClick={() => {
              setNumber(7)
              setDate(buttonInfo[6].date)
              setWhatday(buttonInfo[6].whatday)
            }}
            onMouseEnter={() => handleHover(7)}
          ></div>
          <div
            className={`${styles.slice8}`}
            role="presentation"
            onClick={() => {
              setNumber(8)
              setDate(buttonInfo[7].date)
              setWhatday(buttonInfo[7].whatday)
            }}
            onMouseEnter={() => handleHover(8)}
          ></div>
          <div
            className={`${styles.slice9}`}
            role="presentation"
            onClick={() => {
              setNumber(9)
              setDate(buttonInfo[8].date)
              setWhatday(buttonInfo[8].whatday)
            }}
            onMouseEnter={() => handleHover(9)}
          ></div>
          <div
            className={`${styles.slice10}`}
            role="presentation"
            onClick={() => {
              setNumber(10)
              setDate(buttonInfo[9].date)
              setWhatday(buttonInfo[9].whatday)
            }}
            onMouseEnter={() => handleHover(10)}
          ></div>
          <div
            className={`${styles.slice11}`}
            role="presentation"
            onClick={() => {
              setNumber(11)
              setDate(buttonInfo[10].date)
              setWhatday(buttonInfo[10].whatday)
            }}
            onMouseEnter={() => handleHover(11)}
          ></div>
          <div
            className={`${styles.slice12}`}
            role="presentation"
            onClick={() => {
              setNumber(12)
              setDate(buttonInfo[11].date)
              setWhatday(buttonInfo[11].whatday)
            }}
            onMouseEnter={() => handleHover(12)}
          ></div>
        </div>
      </div>
    </>
  )
}
TimeCirle.getLayout = (page) => <>{page}</>
