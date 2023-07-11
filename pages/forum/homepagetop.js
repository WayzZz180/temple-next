import React from 'react'
import styles from './homepagetop.module.sass'
import Image from 'next/image'
import forumhomepagetop from '@/assets/forumhomepagetop.svg'
import forumlogo from '@/assets/forumlogo.svg'

export default function HomePageTop() {
  return (
    <>
      <div className={`${styles.background}`}>
        <div className={`${styles.place}`}>
          <Image
            src={forumlogo}
            alt="forumlogo"
            className={`${styles.forumlogo}`}
          />
          <Image src={forumhomepagetop} alt="forumhomepagetop" />
        </div>
      </div>
    </>
  )
}
