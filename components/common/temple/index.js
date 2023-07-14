import React from 'react'
import Image from 'next/image'
import cloud from '@/assets/cloud.svg'
import temple from '@/assets/temple.svg'
import styles from './temple.module.sass'
import C1 from '@/assets/littleC1.svg'
import C2 from '@/assets/littleC2.svg'

// 首頁的廟
export default function Temple() {
  return (
    <>
      <div className={`${styles.flex}`}>
        <div className={`${styles.temple}`}>
          <Image src={temple} alt="temple" width={1000}></Image>
        </div>
        <div className={`${styles.cloud}`}>
          <Image src={cloud} alt="cloud" width={1750}></Image>
        </div>
        <div className={`${styles.C1}`}>
          <Image src={C1} alt="cloud" width={400}></Image>
        </div>
        <div className={`${styles.C2}`}>
          <Image src={C2} alt="cloud" width={400}></Image>
        </div>
      </div>
    </>
  )
}
