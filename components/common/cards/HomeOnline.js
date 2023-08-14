import React from 'react'
import Image from 'next/image'
import styles from './HomeOnline.module.sass'
import pilgrimage from '@/assets/pilgrimage.svg'
import Star from '@/assets/Star_pink.svg'
import Button from '@/components/common/button'
import { Route, useRouter } from 'next/router'

export default function HomeOnline() {
  const Router = useRouter()
  const roundjing = () => {
    Router.push('/pilgrimage')
  }

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
            <Button text="開始遶境" btnColor="hot_pink" link={roundjing} />
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
