import React from 'react'
import Image from 'next/image'
import love from '@/assets/loveGod.svg'
import godlight from '@/assets/GodLight.svg'
import styles from './PrayLove.module.sass'
import Button from '@/components/common/button/bts'
import star from '@/assets/Heart_pink.svg'
import shadow from '@/assets/GodShadow.svg'
import name from '@/assets/GodName.svg'
import { useRouter } from 'next/router'

export default function PrayLove() {
  const Router = useRouter()

  const loveA = () => {
    Router.push('/pray/loveA-1')
  }
  const loveB = () => {
    Router.push('/pray/loveB-1')
  }
  const ButtonClick2 = () => {
    Router.push('/')
  }

  return (
    <>
      <div className={`${styles.flex_row} mt150px`}>
        <div className={`${styles.god}`}>
          <div className={`${styles.starsA}`}>
            <Image
              src={star}
              alt=""
              width="42"
              className={`${styles.star2} mb80px`}
            ></Image>
            <Image
              src={star}
              alt=""
              width="70"
              className={`${styles.star1}`}
            ></Image>
          </div>
          <Image
            src={love}
            alt=""
            width="550"
            height="670"
            className={`${styles.love}`}
          ></Image>
          <Image
            src={godlight}
            alt=""
            width="500"
            height="500"
            className={`${styles.light}`}
          ></Image>
          <Image
            src={shadow}
            alt=""
            width="500"
            height="500"
            className={`${styles.shadow}`}
          ></Image>
          <div className={`${styles.starsB}`}>
            <Image
              src={star}
              alt=""
              width="70"
              className={`${styles.star1}`}
            ></Image>
            <Image
              src={star}
              alt=""
              width="42"
              className={`${styles.star2} mb80px`}
            ></Image>
          </div>
        </div>
        <div className={`${styles.flex_col}`}>
          <Image
            src={name}
            alt=""
            width="400"
            className={`${styles.name}`}
          ></Image>
          <div className={`${styles.title} mb60px`}>月老</div>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.content}`}>
            首先要有一棵真誠的心態，閉上眼睛請求指點的愛情。先合手默唸自己姓名、出生日期，年齡、現在居住地址。請求指點事情，如：婚姻、愛情，戀人，流年，婚配，桃花運勢……等。點下面的選項開始！
          </div>
          <div className={`${styles.btn} mt90px`}>
            <Button text="求紅線" btnColor="hot_pink" link={loveA} />
            <span className={`${styles.btn2}`}>
              <Button text="點姻緣燈" btnColor="hot_pink" link={loveB} />
            </span>
            <span className={`${styles.btn3}`}>
              <Button text="回首頁" btnColor="hot_pink" link={ButtonClick2} />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
