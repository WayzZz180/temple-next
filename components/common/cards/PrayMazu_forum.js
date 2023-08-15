import React from 'react'
import Image from 'next/image'
import mazu from '@/assets/mazuGod.svg'
import godlight from '@/assets/GodLight.svg'
import styles from './PrayMazu.module.sass'
import star from '@/assets/Star_pink.svg'
import shadow from '@/assets/GodShadow.svg'
import name from '@/assets/GodName.svg'

export default function PrayMazu() {
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
      </div>
    </>
  )
}
