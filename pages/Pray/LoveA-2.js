import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './loveA-2.module.sass'
import Button from '@/components/common/button'
import name from '@/assets/GodName.svg'
import right from '@/assets/BHR.svg'
import left from '@/assets/BHL.svg'
import { useRouter } from 'next/router'

const bayImages = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2']

export default function Mazu2() {
  const getRandomBayImage = () => {
    const randomIndex = Math.floor(Math.random() * bayImages.length)
    return bayImages[randomIndex]
  }

  const [currentBayImage, setCurrentBayImage] = useState('/bay/bay.png')
  const [title, setTitle] = useState(null)
  const [isHidden, setIsHidden] = useState(true)
  const [buttonText, setButtonText] = useState('擲筊')
  const Router = useRouter()

  const handleThrowBay = async () => {
    const randomBayImage = getRandomBayImage()
    setCurrentBayImage(`/bay/bay_${randomBayImage}.gif`)

    // Set the title based on the selected bay image
    if (randomBayImage >= 'A1' && randomBayImage <= 'A3') {
      setTitle('聖筊')
      setTimeout(() => {
        setButtonText('拿紅線')
      }, 2500)
    } else if (randomBayImage >= 'B1' && randomBayImage <= 'B3') {
      setTitle('笑筊')
      setTimeout(() => {
        setButtonText('再擲一次')
      }, 2500)
    } else if (randomBayImage >= 'C1' && randomBayImage <= 'C2') {
      setTitle('無筊')
      setTimeout(() => {
        setButtonText('再擲一次')
      }, 2500)
    }

    setIsHidden(true) // 顯示 GIF 圖片

    // 2.5 秒後隱藏 GIF 圖片
    setTimeout(() => {
      setIsHidden(false)
    }, 1500)
  }

  const handleRetry = () => {
    handleThrowBay()
  }

  const loveA3 = () => {
    Router.push('/pray/loveA-3')
  }
  return (
    <>
      <div className={styles.parent_container}>
        <div className={`${styles.flex_row}`}>
          <div className={`${styles.circle}`}></div>
          <div className={`${styles.circle2}`}></div>
          <Image
            src={left}
            alt=""
            width="500"
            className={`${styles.left}`}
          ></Image>
          <div className={`${styles.flex_col}`}>
            <div className={`${styles.flex_title}`}>
              {!isHidden && ( // Show the Image and title if isHidden is false
                <>
                  <Image
                    src={name}
                    alt=""
                    width="290"
                    className={`${styles.name1}`}
                  />
                  <div className={`${styles.title}`}>{title}</div>
                </>
              )}
            </div>
            <img
              src={currentBayImage}
              alt=""
              width="1200"
              height="1200"
              style={{ display: 'block' }}
              className={`${styles.name2}`}
            />
            <div className={`${styles.name3}`} onClick={handleThrowBay}>
              {title === '聖筊' ? (
                <Button text={buttonText} btnColor="hot_pink" link={loveA3} />
              ) : (
                <div onClick={handleRetry}>
                  <Button text={buttonText} btnColor="hot_pink" />
                </div>
              )}
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
    </>
  )
}

Mazu2.getLayout = (page) => <>{page}</>
