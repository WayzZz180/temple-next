import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './mazu3.module.sass'
import Button from '@/components/common/button'
import left from '@/assets/CHL.svg'
import right from '@/assets/CHR.svg'
import light from '@/assets/bglight.svg'
import upcould from '@/assets/CCouldU.svg'
import downcould from '@/assets/CCouldD.svg'
import name from '@/assets/name_60.svg'

export default function Mazu3() {
  return (
    <>
      <div className={styles.parent_container}>
        <div className={`${styles.flex_row}`}>
          <Image
            src={light}
            alt=""
            width="2300"
            className={`${styles.light}`}
          ></Image>
          <div className={`${styles.circle}`}></div>
          <div className={`${styles.circle2}`}></div>
          <Image
            src={name}
            alt=""
            width="680"
            className={`${styles.name}`}
          ></Image>
          <div className={`${styles.title} mb60px`}>六十甲子籤</div>
          <div className={`${styles.nemberGroup}`}>
            <div className={`${styles.nemberTitle}`}>no.15</div>
            <div className={`${styles.nember}`}>第十五首</div>
          </div>
          <Image
            src={upcould}
            alt=""
            width="1150"
            className={`${styles.up}`}
          ></Image>
          <Image
            src={downcould}
            alt=""
            width="1150"
            className={`${styles.down}`}
          ></Image>
          <Image
            src={left}
            alt=""
            width="700"
            className={`${styles.left}`}
          ></Image>
          <Image
            src={right}
            alt=""
            width="850"
            className={`${styles.right}`}
          ></Image>
        </div>
      </div>
    </>
  )
}

Mazu3.getLayout = (page) => <>{page}</>
