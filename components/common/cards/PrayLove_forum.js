import React from 'react'
import Image from 'next/image'
import love from '@/assets/loveGod.svg'
import godlight from '@/assets/GodLight.svg'
import styles from './PrayLove.module.sass'
import Button from '@/components/common/button'
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
      </div>
    </>
  )
}
