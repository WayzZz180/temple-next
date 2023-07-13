import React from 'react'
import Image from 'next/image'
import styles from './ShopMarqueeCard.module.sass'

// 根據recommend顯示圖片
export default function MarqueeCard({ name = 'name', price = 100, recommend }) {
  return (
    <div className="m10px">
      <div className={styles.flex}>
        <div className={`${styles.container} ${styles.flex}`}>
          <Image src={''} alt="" width="180" className="shadow"></Image>
        </div>
        <div className={`p10px mt50px fs20px fwBolder`}>{name}</div>
        <div className={'pb10px fs16px fwBolder'}>${price}</div>
      </div>
    </div>
  )
}
