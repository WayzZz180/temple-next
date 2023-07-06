import React from 'react'
import styles from './TestHead.module.sass'
import Image from 'next/image'
import foo_dog_left from '@/assets/foo_dog_left.svg'
import foo_dog_right from '@/assets/foo_dog_right.svg'
import temple from '@/assets/temple.svg'
import cloud from '@/assets/cloud.svg'
import dog from '@/assets/dog_in.gif'
import nav from '@/assets/nav.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={`${styles.head}`}>
        {/* background cloud */}
        <div className={`${styles.cloud}`}>
          <Image src={cloud} width={1250} alt="cloud" />
        </div>
        {/* temple */}
        <div className={`${styles.nav}`}>
          <Image src={nav} width={1300} alt="nav" />
        </div>
        <div className={styles.flex_row}>
          <Image src={foo_dog_left} width={150} alt="foo_dog_left" />
          <Image src={temple} width={750} alt="temple" />
          <Image src={foo_dog_right} width={150} alt="foo_dog_right" />
        </div>

        {/* dog */}
        {/* <div className={`${styles.dog}`}>
            <Image src={dog} width={250} alt="dog" />
          </div> */}
      </div>
    </>
  )
}
