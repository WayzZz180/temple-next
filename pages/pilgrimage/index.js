import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './pilgri.module.sass'
import Teams from './teams'
import Bg from './backGround'
import Sh from '@/assets/swingHand.gif'
import jump from '@/assets/jump.gif'
import flag from '@/assets/flag.gif'
import dog from '@/assets/dog_in.gif'

export default function Pilgrimage() {
  const [teamsPosition, setTeamsPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateTeamsPosition = () => {
      const container = document.querySelector('.teamscontainer')
      if (container) {
        const { width, height } = container.getBoundingClientRect()
        const x = window.innerWidth / 2 - width / 2
        const y = window.innerHeight / 2 - height / 2 + window.scrollY
        setTeamsPosition({ x, y })
      }
    }

    updateTeamsPosition()

    window.addEventListener('scroll', updateTeamsPosition)
    window.addEventListener('resize', updateTeamsPosition)

    return () => {
      window.removeEventListener('scroll', updateTeamsPosition)
      window.removeEventListener('resize', updateTeamsPosition)
    }
  }, [])
  return (
    <>
      <Bg />
      <Image id="" alt="" src={Sh} className={`${styles.sh}`} />
      <Image id="" alt="" src={jump} className={`${styles.jump}`} />
      <Image id="" alt="" src={flag} className={`${styles.flag}`} />
      <Image id="" alt="" src={dog} className={`${styles.dog}`} />
      <Teams />
      {/* <div
        className={`${styles.teamscontainer}`}
        style={{ left: teamsPosition.x, top: teamsPosition.y }}
      > */}

      {/* </div> */}
    </>
  )
}

Pilgrimage.getLayout = (page) => <>{page}</>
