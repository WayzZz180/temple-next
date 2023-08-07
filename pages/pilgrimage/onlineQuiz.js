import React, { useState, useEffect } from 'react'
import styles from './quiz.module.sass'
import Image from 'next/image'
import fairyL from '@/assets/fairyL.svg'
import fairyR from '@/assets/fairyR.svg'
import fairyText from '@/assets/fairyText.svg'
import circle_1 from '@/assets/circle_1.svg'
import sun from '@/assets/sun.svg'
import roof from '@/assets/roof.svg'
import c1 from '@/assets/littleC1.svg'
import score from '@/assets/score.svg'
import scoreDL from '@/assets/scoreDoorL.svg'
import scoreDR from '@/assets/scoreDoorR.svg'
import coupon from '@/assets/coupon.svg'
import House from '@/components/common/temple/house'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

export default function Quiz() {
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 8,
    totalPages: 0,
    page: 1,
    rows: [],
  })
  useEffect(() => {
    fetch(process.env.API_SERVER + '/pilgrimage/onlineQuiz', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }, [])
  return (
    <>
      <Image
        src={roof}
        alt=""
        width="1700"
        className={`${styles.roof}`}
      ></Image>
      <div className={`${styles.container}`}>
        <div className={`${styles.c1}`}>
          <Image src={c1} alt="cloud" width={900}></Image>
        </div>
        <div className={`${styles.c1_2}`}>
          <Image
            src={c1}
            alt="cloud"
            width={900}
            className={`${styles.c1_3}`}
          ></Image>
        </div>
        <Image
          src={sun}
          alt=""
          width="5348"
          className={`${styles.sun}`}
        ></Image>
        <div className={`${styles.flex_row}`}>
          <div className={`${styles.fairyL2}`}>
            <Image
              src={fairyL}
              alt=""
              width="835"
              className={`${styles.fairyL}`}
            ></Image>
          </div>
          <Image
            src={fairyText}
            alt=""
            width="730"
            className={`${styles.fairyText}`}
          ></Image>
          <div className={`${styles.flex_col} mt280px`}>
            <div className={`${styles.line}`}></div>
            <div className={`${styles.title}`}>民俗小測驗</div>
          </div>
          <Image
            src={circle_1}
            alt=""
            width="1050"
            className={`${styles.circle_1}`}
          ></Image>
          <div className={`${styles.fairyR2}`}>
            <Image
              src={fairyR}
              alt=""
              width="835"
              className={`${styles.fairyR}`}
            ></Image>
          </div>
        </div>
      </div>
      <div className={`${styles.flex_col2} mt80px`}>
        {data.rows.map((i) => (
          <House
            key={i.Question_ID}
            number={i.Question_ID}
            q={i.Question}
            a={i.option1}
            b={i.option2}
            c={i.option3}
          />
        ))}
        <Image
          src={score}
          alt=""
          width="1860"
          className={`${styles.score}`}
        ></Image>
        <Image
          src={scoreDL}
          alt=""
          width="195"
          className={`${styles.scoreL}`}
        ></Image>
        <Image
          src={scoreDR}
          alt=""
          width="195"
          className={`${styles.scoreR}`}
        ></Image>
        <Image
          src={coupon}
          alt=""
          width="215"
          className={`${styles.coupon}`}
        ></Image>
        <div className={`${styles.coupontext}`}>獲得折價券乙張</div>
        <div className={`${styles.scoretext1}`}>答</div>
        <div className={`${styles.scoretext2}`}>對</div>
        <div className={`${styles.scoretext3}`}>5</div>
        <div className={`${styles.scoretext4}`}>題</div>
      </div>
    </>
  )
}

Quiz.getLayout = (page) => (<>{page}</>)
