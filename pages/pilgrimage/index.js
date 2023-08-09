import React, { useState, useEffect, useRef } from 'react'
import Modal from '@/components/common/Modal/DialogWrapper'
import Image from 'next/image'
import styles from './indexP.module.sass'
import Teams from './teams'
import Bg from './mixbackground'


export default function Pilgrimage() {
  const [characterDirection, setCharacterDirection] = useState('down');
  const [bgDirection, setBgDirection] = useState('stop');

  const handleSonaMove = (direction) => {
    setCharacterDirection(direction);

    // 根据角色方向计算背景移动方向
    if (direction === 'right') {
      setBgDirection('left');
    } else if (direction === 'left') {
      setBgDirection('right');
    } else {
      setBgDirection('stop');
    }
  };

  return (
    <>
      <div className={`${styles.parent_container}`}>
        <Bg direction={bgDirection} />
        <Teams onMove={handleSonaMove} />
      </div>
    </>
  )
}

Pilgrimage.getLayout = (page) => <>{page}</>
