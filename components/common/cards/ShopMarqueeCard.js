import React from 'react'
import Image from 'next/image'
import chips from '@/assets/chips (4).png'
import styles from './ShopMarqueeCard.module.sass'

export default function MarqueeCard({ name = 'name', price = 100 }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div>
            <Image
              src={chips}
              alt=""
              width="200"
              className={styles.shadow}
            ></Image>
            {/* <img
              src="../../../chips (4).png"
              alt=""
              width="200"
              className={styles.shadow}
            ></img> */}
          </div>
          <div className={`${styles.word} fs20px fwBolder`}>{name}</div>
          <div className={'fs16px fwBolder'}>${price}</div>
        </div>
      </div>
    </>
  )
}
