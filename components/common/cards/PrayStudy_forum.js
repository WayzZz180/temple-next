import React from 'react'
import Image from 'next/image'
import study from '@/assets/studyGod.svg'
import godlight from '@/assets/GodLight.svg'
import styles from './PrayStudy.module.sass'
import Button from '@/components/common/button'
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
      </div>
    </>
  )
}
