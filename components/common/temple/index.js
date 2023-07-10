import React from 'react'
import Image from 'next/image'
import cloud from '@/assets/cloud.svg'
import temple from '@/assets/temple.svg'
import styles from './temple.module.sass'

// 首頁的廟
export default function Temple() {
  return (
    <>
      <div className={`${styles.flex}`}>
        <div className={`${styles.temple}`}>
          <Image src={temple} alt="temple" width={985}></Image>
        </div>
        <div className={`${styles.cloud}`}>
          <Image src={cloud} alt="cloud" width={1638}></Image>
        </div>
      </div>
    </>
  )
}
