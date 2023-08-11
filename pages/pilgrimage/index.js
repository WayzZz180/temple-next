import React, { useState, useEffect, useRef } from 'react'
import Modal from '@/components/common/Modal/DialogWrapper'
import Image from 'next/image'
import styles from './indexP.module.sass'
import Teams from './teams'
import Bg from './mixbackground'
import sign from '@/assets/sing.gif'

export default function Pilgrimage() {
  const [characterDirection, setCharacterDirection] = useState('down')
  const [bgDirection, setBgDirection] = useState('stop')

  const handleSonaMove = (direction) => {
    setCharacterDirection(direction)

    // 根据角色方向计算背景移动方向
    if (direction === 'right') {
      setBgDirection('left')
    } else if (direction === 'left') {
      setBgDirection('right')
    } else {
      setBgDirection('stop')
    }
  }
  const [imageVisible, setImageVisible] = useState(true)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        setImageVisible(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])
  return (
    <>
      <div className={`${styles.parent_container}`}>
        <Bg direction={bgDirection} />
        <Teams onMove={handleSonaMove} />
        {imageVisible && (
          <Image
            src={sign}
            alt=""
            width="920"
            className={`${styles.sign} mb140px`}
          ></Image>
        )}
      </div>
    </>
  )
}

Pilgrimage.getLayout = (page) => <>{page}</>
