import React from 'react'
import Image from 'next/image'
import study from '@/assets/studyGod.svg'
import godlight from '@/assets/GodLight.svg'
import styles from './PrayStudy.module.sass'
import Button from '@/components/common/button/bts'
import star from '@/assets/green_sq.svg'
import shadow from '@/assets/GodShadow.svg'
import name from '@/assets/GodName.svg'
import { useRouter } from 'next/router'

export default function PrayStudy() {
  const Router = useRouter()

  const studyA = () => {
    Router.push('/pray/studyB-1')
  }
  const studyB = () => {
    Router.push('/pray/studyA-1')
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
            src={study}
            alt=""
            width="550"
            height="670"
            className={`${styles.study}`}
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
          <div className={`${styles.title} mb60px`}>文昌</div>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.content}`}>
            文昌帝君主管考試、命運，掌管天下文運祿籍，助佑讀書撰文之神，是讀書文人、求科名者所最尊奉的神祗，自古以來就受到士人學子的崇拜。心中默念出你想祈求的事情，祈請文昌帝君，考試運勢或工作運勢一切順利。
          </div>
          <div className={`${styles.btn} mt90px`}>
            <Button text="點學業燈" btnColor="green" link={studyA} />
            <span className={`${styles.btn2}`}>
              <Button text="上傳准考證" btnColor="green" link={studyB} />
            </span>
            <span className={`${styles.btn3}`}>
              <Button text="回首頁" btnColor="green" link={ButtonClick2} />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
