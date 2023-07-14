import React from 'react'
import Image from 'next/image'
import Forumlogo from '@/assets/forumlogo.svg'
import Cloud2 from '@/assets/cloud2.svg'
import styles from './forumlogo.module.sass'

export default function ForumLogo() {
  return (
    <>
      <div className={`${styles.flex}`}>
        <div className={`${styles.logo}`}>
          <Image src={Forumlogo} alt="forumlogo" height={160} />
        </div>
        <div className={`${styles.cloud2}`}>
          <Image src={Cloud2} alt="cloud2" width={1450} />
        </div>
      </div>
    </>
  )
}
