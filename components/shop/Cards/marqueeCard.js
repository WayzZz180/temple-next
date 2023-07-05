import React from 'react'
// import Image from 'next/image'
// import chips from '@/assets/chips (4).png'
// import chips from './chips (4).png'
// import chips from '@/assets/stars.svg'
import styles from './marqueeCard.module.sass'
export default function MarqueeCard() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div>
            <img
              src="../../../chips (4).png"
              alt=""
              width="200"
              className={styles.shadow}
            ></img>
          </div>
          <div>樂事胡椒鹽</div>
          <div>$100</div>
        </div>
      </div>
    </>
  )
}
