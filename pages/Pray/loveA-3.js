import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './loveA-3.module.sass'
import Button from '@/components/common/button'
import left from '@/assets/BHR.svg'
import right from '@/assets/BHL.svg'
import light from '@/assets/bglight.svg'
import upcould from '@/assets/CCouldU.svg'
import downcould from '@/assets/CCouldD.svg'
import redline from '@/assets/redline.svg'
import star from '@/assets/Star_pink.svg'
import { Route, useRouter } from 'next/router'

export default function LoveA3() {
  const Router = useRouter()
  const [user, setUser] = useState({
    Member_ID: '',
    Name: '',
    Datetime: '',
  })

  const handleSumbit = (e) => {
    e.preventDefault()
    fetch(process.env.API_SERVER + '/pray/loveA-3', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log(result)
      })
    setTimeout(() => {
      Router.push('/member/amulet')
    }, 2000)
  }
  const ButtonClick = () => {
    Router.push('/pray')
  }
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
          <div className={`${styles.flex_row}`}>
            <Image
              src={left}
              alt=""
              width="500"
              className={`${styles.left}`}
            ></Image>
            <div className={`${styles.flex_col}`}>
              <div className={`${styles.content}`}>
                <div>恭喜你！！</div>
                <div>獲得了月老給你的護身符-紅線</div>
                <div>祝福你喜結良緣</div>
              </div>
              <div className={`${styles.pic}`}>
                <div className={`${styles.starsA}`}>
                  <Image
                    src={star}
                    alt=""
                    width="20"
                    className={`${styles.star2} mb80px`}
                  ></Image>
                  <Image
                    src={star}
                    alt=""
                    width="30"
                    className={`${styles.star1} mb180px`}
                  ></Image>
                </div>
                <Image
                  src={redline}
                  alt=""
                  width="250"
                  className={`${styles.redline}`}
                ></Image>
                <div className={`${styles.starsB}`}>
                  <Image
                    src={star}
                    alt=""
                    width="30"
                    className={`${styles.star1}`}
                  ></Image>
                  <Image
                    src={star}
                    alt=""
                    width="20"
                    className={`${styles.star2} mb80px`}
                  ></Image>
                </div>
              </div>
              <div className={`${styles.btn} mt90px`}>
                <Button
                  text="收藏"
                  btnColor="hot_pink"
                  type="submit"
                  link={(e) => {
                    handleSumbit(e)
                  }}
                />
                <span className={`${styles.btn2}`}>
                  <Button
                    text="其他神明"
                    btnColor="hot_pink"
                    link={ButtonClick}
                  />
                </span>
              </div>
            </div>
            <Image
              src={right}
              alt=""
              width="500"
              className={`${styles.right}`}
            ></Image>
          </div>
        </div>
      </div>
    </>
  )
}

LoveA3.getLayout = (page) => <>{page}</>
