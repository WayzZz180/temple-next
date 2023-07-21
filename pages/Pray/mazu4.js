import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './mazu4.module.sass'
import Button from '@/components/common/button'
import name from '@/assets/name_60.svg'
import poem from '@/assets/poem_1.png'
import could from '@/assets/D_could.svg'

export default function Mazu4() {
  return (
    <>
      <div className={styles.parent_container}>
        <div className={`${styles.flex_row}`}>
        <Image
              src={could}
              alt=""
              width="1250"
              className={`${styles.could}`}
            ></Image>
        <Image
              src={poem}
              alt=""
              width="300"
              className={`${styles.poem}`}
            ></Image>
          <div className={`${styles.flex_col}`}>
          <div className={`${styles.title_60}`}>
          <div className={`${styles.title} mb60px`}>六十甲子籤</div>
            <Image
              src={name}
              alt=""
              width="700"
              className={`${styles.name}`}
            ></Image>
            </div>
            <div className={`${styles.nemberGroup}`}>
            <div className={`${styles.mark1}`}>[</div>
              <div className={`${styles.nemberTitle}`}>No.15 /</div>
              <div className={`${styles.nember}`}>第十五首</div>
              <div className={`${styles.mark2}`}>]</div>
            </div>
            <div className={`${styles.line}`}></div>
            <div className={`${styles.btns}`}>
            <Button text="解籤" btnColor="hot_pink" />
            <Button text="分享" btnColor="hot_pink" />
            <Button text="回首頁" btnColor="hot_pink" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Mazu4.getLayout = (page) => <>{page}</>
