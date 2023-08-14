import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './pilgri.module.sass'
import Button from '@/components/common/button'
import tree1 from '@/assets/tree1.svg'
import moto from '@/assets/moto.svg'
import pavilion from '@/assets/pavilion.svg'
import tree2 from '@/assets/tree2.svg'
import temple from '@/assets/templeonline.svg'
import smoke from '@/assets/smoke.svg'
import burner from '@/assets/burner.svg'
import stall from '@/assets/stall.svg'
import teabox from '@/assets/teabox.svg'
import tree3 from '@/assets/tree3.svg'
import Title from '@/components/common/title'
import C1 from '@/assets/littleC1.svg'
import C2 from '@/assets/littleC2.svg'
import C3 from '@/assets/OnlineCould.svg'
import C4 from '@/assets/OnlineCould2.svg'
import Board from '@/assets/BulletinBoard.svg'
import Calender from './calendar'
import img from '@/assets/calendar.svg'
import fly from '@/assets/fly.gif'

export default function Bg({ direction }) {
  const [backgroundPosition, setBackgroundPosition] = useState(0)

  const moveBackground = () => {
    const moveAmount = 5 // 背景移动速度，根据需要调整

    if (direction === 'right') {
      setBackgroundPosition((prevPosition) => prevPosition + moveAmount)
    } else if (direction === 'left') {
      setBackgroundPosition((prevPosition) => prevPosition - moveAmount)
    }
  }

  useEffect(() => {
    if (direction === 'right' || direction === 'left') {
      const intervalId = setInterval(moveBackground, 16) // 大约每 16 毫秒移动一次，约等于每秒 60 帧
      return () => clearInterval(intervalId)
    }
  }, [direction])

  return (
    <div
      className={styles.background}
      style={{ transform: `translateX(${backgroundPosition}px)` }}
    >
      <div className={styles.parent_container}>
        <div className={`${styles.flex_row2}`}>
          <div className={`${styles.fly}`}>
            <Image src={fly} alt="cloud" width={520}></Image>
          </div>
          <div className={`${styles.C1}`}>
            <Image src={C1} alt="cloud" width={520}></Image>
          </div>
          <div className={`${styles.C3}`}>
            <Image src={C3} alt="cloud" width={1150}></Image>
          </div>
          <div className={`${styles.C4}`}>
            <Image src={C4} alt="cloud" width={750}></Image>
          </div>
          <div className={`${styles.C2}`}>
            <Image src={C2} alt="cloud" width={520}></Image>
          </div>
        </div>
        <Title
          text="遶境online"
          text2="PILGRIMAGE ONLINE"
          lineColor="hot_pink"
          className={`${styles.title}`}
        />
        <div className={`${styles.flex_row}`}>
          <Image
            src={tree1}
            alt=""
            width="535"
            className={`${styles.tree1}`}
          ></Image>
          <div className={`${styles.calender}`}>
            <Calender />
          </div>
          <Image
            src={img}
            alt=""
            width="250"
            className={`${styles.img}`}
          ></Image>
          <Image
            src={moto}
            alt=""
            width="235"
            className={`${styles.moto}`}
          ></Image>
          <Image
            src={pavilion}
            alt=""
            width="500"
            className={`${styles.pavilion}`}
          ></Image>
          <Image
            src={tree2}
            alt=""
            width="200"
            className={`${styles.tree2}`}
          ></Image>
          <Image
            src={temple}
            alt=""
            width="1050"
            className={`${styles.temple}`}
          ></Image>
          <div className={`${styles.smokemask}`}>
            <Image
              src={smoke}
              alt=""
              width="265"
              className={`${styles.smoke}`}
            ></Image>
          </div>
          <Image
            src={burner}
            alt=""
            width="250"
            className={`${styles.burner}`}
          ></Image>
          <Image
            src={stall}
            alt=""
            width="315"
            className={`${styles.stall}`}
          ></Image>
          <Image
            src={teabox}
            alt=""
            width="60"
            className={`${styles.teabox}`}
          ></Image>
          <Image
            src={tree3}
            alt=""
            width="600"
            className={`${styles.tree3}`}
          ></Image>
          <Image
            src={Board}
            alt=""
            width="600"
            className={`${styles.Board}`}
          ></Image>
          <iframe
            className={`${styles.video}`}
            width="370"
            height="210"
            src="https://www.youtube.com/embed/tJWE2VitQc0?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

Bg.getLayout = (page) => <>{page}</>
