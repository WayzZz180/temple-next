import React from 'react'
import styles from '../Home/head.module.sass'
import Image from 'next/image'
import pink_star from '@/assets/Pink_Star.svg'
import signIn from '@/assets/sing_in.svg'

// import DefaultLayout from '@/components/layout/default-layout'

export default function About() {
  return (
    <>
      <div className={`${styles.signInBlock}`}>
        {/* signin star */}
        <div className={`${styles.pinkStar}`}>
          <Image src={pink_star} width={40} alt="star" />
        </div>
        {/* sign in word */}
        <div className={`${styles.signIn}`}>
          <Image src={signIn} width={30} alt="signIn" />
        </div>
      </div>
    </>
  )
}
