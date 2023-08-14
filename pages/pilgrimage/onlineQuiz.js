import React, { useState, useEffect } from 'react'
import styles from './quiz.module.sass'
import Image from 'next/image'
import fairyL from '@/assets/fairy.gif'
import fairyR from '@/assets/fairy2.gif'
import fairyText from '@/assets/fairyText.svg'
import circle_1 from '@/assets/circle_1.svg'
import sun from '@/assets/sun.svg'
import roof from '@/assets/roof.svg'
import c1 from '@/assets/littleC1.svg'
import score from '@/assets/score.svg'
import scoreDL from '@/assets/scoreDoorL.svg'
import scoreDR from '@/assets/scoreDoorR.svg'
import coupon from '@/assets/coupon.svg'
import C3 from '@/assets/OnlineCould.svg'
import C4 from '@/assets/OnlineCould2.svg'
import House from '@/components/common/temple/house'
import Button from '@/components/common/button'
import { Router, useRouter } from 'next/router'

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
  const [totalScore, setTotalScore] = useState(0)
  const updateTotalScore = () => {
    setTotalScore((prevScore) => prevScore + 1)
  }
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])
  const [playAnimation, setPlayAnimation] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(true)

  const handleButtonClick = () => {
    setPlayAnimation(true)
    setIsButtonVisible(false)
  }
  const coupons = totalScore === 8 ? 12 : totalScore < 8 ? 13 : totalScore
  console.log(coupons)
  const Router = useRouter()
  const [user, setUser] = useState({
    coupon_status_id: '',
    coupon_id: `${coupons}`,
    member_id: '',
    usage_status: '',
    start_date: '',
    expiration_date: '',
    created_at: '',
  })

  const handleSumbit = (e) => {
    e.preventDefault()
    fetch(process.env.API_SERVER + '/pilgrimage/onlineQuiz', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log(result)
      })
  }

  const handleClick = () => {
    Router.push('/member/myCoupons')
  }
  return (
    <>
      <div
        style={{
          transform: 'scale(0.782)',
          transformOrigin: 'top left',
          height: '6000px',
        }}
      >
        <Image
          src={roof}
          alt=""
          width="1700"
          className={`${styles.roof}`}
        ></Image>
        <div className={`${styles.container}`}>
          <div className={`${styles.C3}`}>
            <Image src={C3} alt="cloud" width={3500}></Image>
          </div>
          <div className={`${styles.C3_2}`}>
            <Image src={C3} alt="cloud" width={3500}></Image>
          </div>
          <div className={`${styles.C3_3}`}>
            <Image src={C3} alt="cloud" width={3500}></Image>
          </div>
          <div className={`${styles.C4}`}>
            <Image src={C4} alt="cloud" width={2500}></Image>
          </div>
          <div className={`${styles.C4_2}`}>
            <Image src={C4} alt="cloud" width={2500}></Image>
          </div>
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
            <div
              className={`${styles.fairyL2} ${isVisible ? styles.show : ''}`}
            >
              <Image
                src={fairyL}
                alt=""
                width="900"
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
            <div
              className={`${styles.fairyR2} ${isVisible ? styles.show : ''}`}
            >
              <Image
                src={fairyR}
                alt=""
                width="900"
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
              correctOption={i.Answer}
              updateTotalScore={updateTotalScore}
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
            className={`${styles.scoreL} ${
              playAnimation ? styles.startAnimation2 : ''
            }`}
          ></Image>
          <Image
            src={scoreDR}
            alt=""
            width="195"
            className={`${styles.scoreR} ${
              playAnimation ? styles.startAnimation : ''
            }`}
          ></Image>
          <Image
            src={coupon}
            alt=""
            width="215"
            className={`${styles.coupon}`}
            onClick={handleClick}
          ></Image>
          <div className={`${styles.coupontext}`}>獲得折價券乙張</div>
          <div className={`${styles.scoretext1}`}>答</div>
          <div className={`${styles.scoretext2}`}>對</div>
          <div className={`${styles.scoretext3}`}>{totalScore}</div>
          <div className={`${styles.scoretext4}`}>題</div>
          {isButtonVisible && (
            <div
              className={`${styles.scorebtn} mt150px`}
              onClick={handleButtonClick}
            >
              <Button
                text="領取獎品"
                btnColor="hot_pink"
                link={(e) => {
                  handleSumbit(e)
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

Quiz.getLayout = (page) => <>{page}</>
