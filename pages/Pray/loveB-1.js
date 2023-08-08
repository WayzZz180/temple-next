import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './loveB-1.module.sass'
import Button from '@/components/common/button'
import love from '@/assets/loveGod.svg'
import godlight from '@/assets/GodLight.svg'
import shadow from '@/assets/GodShadow.svg'
import tower from '@/assets/lovetower.svg'
import { Route, useRouter } from 'next/router'

export default function love1() {
  const [activeImage, setActiveImage] = useState(null);
  const Router = useRouter()
  const handleImageClick = (alt) => {
    setActiveImage(alt === activeImage ? null : alt);
  };

  const handleButtonClick = () => {
    Router.push({
      pathname: '/pray/loveB-2',
      query: { towerId: activeImage }, 
    })
  }
  return (
    <>
      <div className={styles.parent_container}>
        <div className={`${styles.flex_row}`}>
          <div className={`${styles.flex_row2}`}>
            <Image
              src={tower}
              alt="A"
              width="170"
              className={`${styles.tower} ${activeImage === 'A' ? styles.towerhover : ''}`}
        onClick={() => handleImageClick('A')}
            ></Image>
            <Image
              src={tower}
              alt="B"
              width="170"
              className={`${styles.tower} ${activeImage === 'B' ? styles.towerhover : ''}`}
        onClick={() => handleImageClick('B')}
            ></Image>
            <Image
              src={tower}
              alt="C"
              width="170"
              className={`${styles.tower} ${activeImage === 'C' ? styles.towerhover : ''}`}
        onClick={() => handleImageClick('C')}
            ></Image>
            <div className={`${styles.flex_row3}`}>
              <div className={`${styles.title}`}>A</div>
              <div className={`${styles.title}`}>B</div>
              <div className={`${styles.title}`}>C</div>
            </div>
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
            <Button text="選好了" btnColor="hot_pink" link={handleButtonClick}/>
          </div>
          <div className={`${styles.flex_row2}`}>
            <Image
              src={tower}
              alt="D"
              width="170"
              className={`${styles.tower} ${activeImage === 'D' ? styles.towerhover : ''}`}
        onClick={() => handleImageClick('D')}
            ></Image>
            <Image
              src={tower}
              alt="E"
              width="170"
              className={`${styles.tower} ${activeImage === 'E' ? styles.towerhover : ''}`}
        onClick={() => handleImageClick('E')}
            ></Image>
            <Image
              src={tower}
              alt="F"
              width="170"
              className={`${styles.tower} ${activeImage === 'F' ? styles.towerhover : ''}`}
        onClick={() => handleImageClick('F')}
            ></Image>
            <div className={`${styles.flex_row3}`}>
              <div className={`${styles.title}`}>D</div>
              <div className={`${styles.title}`}>E</div>
              <div className={`${styles.title}`}>F</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

love1.getLayout = (page) => <>{page}</>
