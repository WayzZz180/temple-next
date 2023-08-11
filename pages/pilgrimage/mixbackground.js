import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './pilgri.module.sass'
import Bg from './backGround'
import People from './people'

export default function Mixbg({ direction }) {
  const [backgroundPosition, setBackgroundPosition] = useState(0);

  const moveBackground = () => {
    const moveAmount = 5; // 背景移动速度，根据需要调整

    if (direction === 'right') {
      setBackgroundPosition((prevPosition) => prevPosition + moveAmount);
    } else if (direction === 'left') {
      setBackgroundPosition((prevPosition) => prevPosition - moveAmount);
    }
  };

  useEffect(() => {
    if (direction === 'right' || direction === 'left') {
      const intervalId = setInterval(moveBackground, 16); // 大约每 16 毫秒移动一次，约等于每秒 60 帧
      return () => clearInterval(intervalId);
    }
  }, [direction]);

  return (
    <div
      className={styles.background}
      style={{ transform: `translateX(${backgroundPosition}px)` }}
    >
    <Bg />
    <People /></div>
      )
    }
    
    Mixbg.getLayout = (page) => <>{page}</>