import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './mazu2.module.sass'
import Button from '@/components/common/button'
import handLeft from '@/assets/handLeft.svg'
import handRight from '@/assets/handRight.svg'
import name from '@/assets/GodName.svg'
import ba from '@/assets/ba.svg'
import right from '@/assets/BHR.svg'
import left from '@/assets/BHL.svg'

export default function Mazu2() {
  return (
    <>
      <div className={styles.parent_container}>
        <div className={`${styles.flex_row}`}>
          <div className={`${styles.circle}`}></div>
          <div className={`${styles.circle2}`}></div>
          <Image
                src={left}
                alt=""
                width="500"
                className={`${styles.left}`}
              ></Image>
          <div className={`${styles.flex_col}`}>
            <div className={`${styles.flex_title}`}>
              <Image
                src={name}
                alt=""
                width="290"
              ></Image>
              <div className={`${styles.title} mb60px`}>聖筊</div>
            </div>
            <Image src={ba} alt="" width="430"></Image>
            <Button text="再擲一次" btnColor="hot_pink"/>
          </div>
          <Image
                src={right}
                alt=""
                width="500"
                className={`${styles.right}`}
              ></Image>
        </div>
      </div>
    </>
  )
}

Mazu2.getLayout = (page) => <>{page}</>
