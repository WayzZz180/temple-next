import React from 'react'
import Image from 'next/image'
import styles from './HomeOnline.module.sass'
import pilgrimage from '@/assets/pilgrimage.svg'
import Star from '@/assets/Star_pink.svg'
import Button from '@/components/common/button'

export default function HomeOnline() {
  return (
    <>
      <div className={`${styles.flex_row2}`}>
        <div className={`${styles.container}`}>
          <Image
            src={pilgrimage}
            width={1500}
            alt="pilgrimage"
            className={`${styles.img_pilgrimage}`}
          />
          <div className={`${styles.flex_row}`}>
            <Image
              src={Star}
              width={90}
              alt="Star_Pink"
              className={`${styles.img}`}
            />
            <Button text="開始遶境" btnColor="hot_pink" />
            <Image
              src={Star}
              width={90}
              alt="Star_Pink"
              className={`${styles.img}`}
            />
          </div>
        </div>
      </div>
    </>
  )
}
