import React from 'react'
import Image from 'next/image'
import styles from './HomeJob.module.sass'
import Button from '@/components/common/button'
import look from '@/assets/lookingFor.svg'
import eyes from '@/assets/lookingForEyes.svg'
import star from '@/assets/Star_pink.svg'

export default function HomeJob() {
  return (
    <>
      <div className={`${styles.flex_col}`}>
        <div className={`${styles.flex_row}`}>
          <div className={`${styles.flex_col2} mt180px`}>
            <Image
              src={star}
              alt=""
              width="42"
              className={`${styles.star2}`}
            ></Image>
            <Image
              src={star}
              alt=""
              width="70"
              className={`${styles.star1}`}
            ></Image>
          </div>
          <div className={`${styles.flex}`}>
          <Image src={eyes} alt="" width="450" className={`${styles.eye} mt50px`}></Image>
          <Image src={look} alt="" width="450" className="mt50px"></Image>
          </div>
          <div className={`${styles.flex_col2} mt80px`}>
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
              className={`${styles.star2}`}
            ></Image>
          </div>
        </div>
        <div className={`${styles.title} mt45px`}>志•工•招•募•中</div>
        <div className={`${styles.want} mt10px`}>WE WANT YOU!</div>
        <div className="mt100px mb85px">
          <Button text="來去報名" btnColor="hot_pink" />
        </div>
      </div>
    </>
  )
}
