import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './light.module.sass'
import on from '@/assets/light_pink.svg'
import off from '@/assets/light_off.svg'

export default function lightButton({ text = '1' }) {
  const [isOn, setIsOn] = useState(false)

  const toggleLight = () => {
    setIsOn((prevIsOn) => !prevIsOn)
  }
  return (
    <>
      <div className={`${styles.light}`}>
        <Image
          src={isOn ? on : off}
          alt=""
          width="27"
          height="33"
          className={`${styles.button}`}
        />
        <div className={`${styles.text}`} onClick={toggleLight} >
          {text}
        </div>
      </div>
    </>
  )
}
