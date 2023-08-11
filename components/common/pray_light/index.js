import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './light.module.sass'
import on from '@/assets/light_pink.svg'
import off from '@/assets/light_off.svg'

export default function lightButton({ text = '1', indexY, setUser, user, isSelected, onToggle }) {
  const toggleLight = () => {
    setUser({ ...user, LocationX: text, LocationY: indexY })
    onToggle();
  };
  return (
    <>
       <div className={`${styles.light}`}>
        <Image
        src={isSelected ? on : off}
          alt=""
          width="27"
          height="33"
          className={`${styles.button}`}
        />
        <div className={`${styles.text}`} onClick={toggleLight}>
          {text}
        </div>
      </div>
    </>
  )
}
