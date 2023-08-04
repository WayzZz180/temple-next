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
import { Route, useRouter } from 'next/router'

export default function Mazu3() {
  const Router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [showElement, setShowElement] = useState(false)

  const handleBoxClick = () => {
    Router.push('/pray/mazu4')
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElement(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

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
              className={`${styles.name} ${showElement ? styles.show : ''} `}
            ></Image>
            <div className={`${styles.title} ${showElement ? styles.show : ''} mb60px`}>六十甲子籤</div>
          <div className={`${styles.nemberGroup}`}>
            <div className={`${styles.btns}  ${showElement ? styles.show : ''} mt250px`}> 
                <Button
                  text="查看籤詩"
                  btnColor="hot_pink"
                  link={handleBoxClick}
                />
            </div>
            {/* <div className={`${styles.nemberTitle}`}>no.15</div> 
      <div className={`${styles.nember}`}>第十五首</div>  */}
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
          <div className={`${styles.leftmove}`}>
            <Image
              src={left}
              alt=""
              width="700"
              className={`${styles.left}`}
            ></Image>
          </div>
          <div
            className={`${styles.rightmove} ${isVisible ? styles.show : ''}`}
          >
            <Image
              src={right}
              alt=""
              width="850"
              className={`${styles.right}`}
            ></Image>
          </div>
        </div>
      </div>
    </>
  )
}

Mazu3.getLayout = (page) => <>{page}</>
