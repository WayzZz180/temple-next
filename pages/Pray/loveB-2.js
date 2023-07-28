import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './loveB-2.module.sass'
import Button from '@/components/common/button'
import Light from '@/components/common/pray_light/light_row'
import Light2 from '@/components/common/pray_light/light_row2'
import love from '@/assets/loveGod.svg'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function Love2() {
  return (
    <>
      <div className={styles.parent_container}>
        <div className={styles.flex_row}>
          <div className={styles.flex_col}>
            {letters.split('').map((letter) => (
              <Light key={letter} text={letter} />
            ))}
            <div className={`${styles.text2}`}>正面</div>
            <div  className={`${styles.line}`}></div>
            </div>
            <div className={`${styles.flex_col}`}>
            <div className={`${styles.flex_col2}`}>
            <div>姻</div>
            <div>緣</div>
            <div>燈</div>
            </div>
            <Image
              src={love}
              alt=""
              width="340"
              className={`${styles.love}`}
            ></Image>
            <div className={`${styles.text}`}>點選欲點燈的位子，桃色為不可選</div>
            <Button text="選好了" btnColor="hot_pink" />
          </div>
            <div className={styles.flex_col}>
            {letters.split('').map((letter) => (
              <Light2 key={letter} text={letter} />
            ))}
            <div className={`${styles.text2}`}>背面</div>
            <div  className={`${styles.line}`}></div>
          </div>
        </div>
      </div>
    </>
  )
}

Love2.getLayout = (page) => <>{page}</>
