import React from 'react'
import Image from 'next/image'
import mazu from '@/assets/mazuGod.svg'
import godlight from '@/assets/GodLight.svg'
import styles from './PrayMazu.module.sass'
import Button from '@/components/common/button/bts'
import star from '@/assets/Star_pink.svg'
import shadow from '@/assets/GodShadow.svg'
import name from '@/assets/GodName.svg'
import { Route, useRouter } from 'next/router'

export default function PrayMazu() {
  const Router = useRouter()

  const ButtonClick = () => {
    Router.push('/pray/mazu1')
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
            src={mazu}
            alt=""
            width="550"
            height="700"
            className={`${styles.mazu}`}
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
          <div className={`${styles.title} mb60px`}>媽祖</div>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.content}`}>
            想請媽祖為你指點迷津嘛？
            只要虔誠的求問，就能獲得媽祖的指引喔！虔誠向媽祖稟報您的姓名、年歲、住
            址、求問事項。點選開始求籤。擲筊請示媽祖是否為此籤。若為聖筊則可觀看詩籤內容。若為笑筊或陰筊則需重新求籤。{' '}
          </div>
          <div className={`${styles.btn} mt90px`}>
            <Button text="求籤" btnColor="hot_pink" link={ButtonClick} />
            <span className={`${styles.btn2}`}>
              <Button text="回首頁" btnColor="hot_pink" link={ButtonClick2} />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
