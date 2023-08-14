import React, { useState, useEffect } from 'react'
import styles from './head.module.sass'
import Image from 'next/image'
import pink_star from '@/assets/Pink_Star.svg'
import signIn from '@/assets/backhome.svg'

import { useRouter } from 'next/router'

export default function Home() {
  const Router = useRouter()

  const handleClick = () => {
    Router.push('/')
  }

  return (
    <>
      <div className={`${styles.position}`}>
        <div className={`${styles.signIn}`}>
          <div
            role="presentation"
            className={`${styles.signInBlock}`}
            onClick={handleClick}
          >
            {/* signin star */}
            <div className={`${styles.pinkStar}`}>
              <Image src={pink_star} width={25} alt="star" />
            </div>
            {/* sign in word */}
            <div className={`${styles.signIn}`}>
              <Image src={signIn} width={20} alt="signIn" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
