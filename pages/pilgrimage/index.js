import React, { useState, useEffect, useRef } from 'react'
import Modal from '@/components/common/Modal/DialogWrapper'
import Image from 'next/image'
import styles from './indexP.module.sass'
import Teams from './teams'
import Bg from './backGround'
import People from './people'

export default function Pilgrimage() {
  const [teamsPosition, setTeamsPosition] = useState(0)

  const handleTeamsMove = (position) => {
    setTeamsPosition(position)
  }
  return (
    <>
      <div className={`${styles.parent_container}`}>
        <Bg teamsPosition={teamsPosition} />
        <People />
        <Teams onMove={handleTeamsMove} />
      </div>
    </>
  )
}

Pilgrimage.getLayout = (page) => <>{page}</>
