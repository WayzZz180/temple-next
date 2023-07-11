import React from 'react'
import Image from 'next/image'
import chips from '@/assets/chips (4).png'
import styles from './ShopMarqueeCard.module.sass'

export default function MarqueeCard({ name = 'name', price = 100 }) {
  return (
    <>
      <div className="m10px">
        <div className={styles.flex}>
          <div className={`${styles.container} ${styles.flex}`}>
            <Image src={chips} alt="" width="180" className="shadow"></Image>
            {/* <img
              src="../../../chips (4).png"
              alt=""
              width="200"
              className={styles.shadow}
            ></img> */}
          </div>
          <div className={`p10px mt50px fs20px fwBolder`}>{name}</div>
          <div className={'pb10px fs16px fwBolder'}>${price}</div>
        </div>
      </div>
    </>
  )
}
