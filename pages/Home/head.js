import React from 'react'
import styles from './head.module.sass'
import Image from 'next/image'
import nav from '@/assets/nav.svg'
import foo_dog_left from '@/assets/foo_dog_left.svg'
import foo_dog_right from '@/assets/foo_dog_right.svg'
import Temple from '@/components/common/temple'

export default function Home() {
  return (
    <>
      <div className={`${styles.background}`}>
        <div className={`${styles.place}`}>
          <div className={`${styles.floor}`}>
            <Image src={nav} width={1500} alt="nav" />
          </div>
          <div className={styles.flex_row}>
            <Image
              src={foo_dog_left}
              width={195}
              alt="foo_dog_left"
              className={`${styles.right}`}
            />
            <Temple />
            <Image
              src={foo_dog_right}
              width={195}
              alt="foo_dog_right"
              className={`${styles.left}`}
            />
          </div>
        </div>
      </div>
    </>
  )
}
