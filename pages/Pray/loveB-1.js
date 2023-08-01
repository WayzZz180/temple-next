import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './loveB-1.module.sass'
import Button from '@/components/common/button'
import love from '@/assets/loveGod.svg'
import godlight from '@/assets/GodLight.svg'
import shadow from '@/assets/GodShadow.svg'
import tower from '@/assets/lovetower.svg'

export default function loveB_1() {
  return (
    <>
      <div className={styles.parent_container}>
        <div className={`${styles.flex_row}`}>
          <div className={`${styles.flex_row2}`}>
            <Image
              src={tower}
              alt=""
              width="170"
              className={`${styles.tower}`}
            ></Image>
            <Image
              src={tower}
              alt=""
              width="170"
              className={`${styles.tower}`}
            ></Image>
            <Image
              src={tower}
              alt=""
              width="170"
              className={`${styles.tower}`}
            ></Image>
          </div>
          <div className={`${styles.flex_col}`}>
            <Image
              src={love}
              alt=""
              width="340"
              className={`${styles.love}`}
            ></Image>
            <Image
              src={godlight}
              alt=""
              width="385"
              className={`${styles.light}`}
            ></Image>
            <Image
              src={shadow}
              alt=""
              width="335"
              className={`${styles.shadow}`}
            ></Image>
            <div className={`${styles.text}`}>點選想要的燈塔位置</div>
            <Button text="選好了" btnColor="hot_pink" />
          </div>
          <div className={`${styles.flex_row2}`}>
            <Image
              src={tower}
              alt=""
              width="170"
              className={`${styles.tower}`}
            ></Image>
            <Image
              src={tower}
              alt=""
              width="170"
              className={`${styles.tower}`}
            ></Image>
            <Image
              src={tower}
              alt=""
              width="170"
              className={`${styles.tower}`}
            ></Image>
          </div>
        </div>
      </div>
    </>
  )
}

loveB_1.getLayout = (page) => <>{page}</>
