import React from 'react'
import styles from './head.module.sass'

import Image from 'next/image'
import foo_dog_left from '@/assets/foo_dog_left.svg'
import foo_dog_right from '@/assets/foo_dog_right.svg'
import temple from '@/assets/temple_c.svg'

import dog from '@/assets/dog_in.gif'
import pink_star from '@/assets/Pink_Star.svg'
import signIn from '@/assets/sing_in.svg'
import nav from '@/assets/nav.svg'
import Link from 'next/link'

export default function Head() {
  return (
    <>
      <div className={`${styles.head}`}>
          {/* temple */}
          <div className={`${styles.flex_row}`}>
            <Image src={foo_dog_left} width={150} alt="foo_dog_left" />
            <Image src={temple} width={1250} alt="temple" />
            <Image src={foo_dog_right} width={150} alt="foo_dog_right" />
            {/* dog */}
            <div className={`${styles.dog}`}>
              <Image src={dog} width={250} alt="dog" />
            </div>
            {/* signin star */}
            <div className={`${styles.pinkStar}`}>
              <div>
                <Image src={pink_star} width={30} alt="star" />
              </div>
            </div>
            {/* sign in word */}
            <div className={`${styles.signIn}`}>
              <Image src={signIn} width={23} alt="signIn" />
            </div>
            <div className={`${styles.nav}`}>
              <Image src={nav} width={1300} alt="nav" />
            </div>
          </div>
        </div>
    </>
  )
}
