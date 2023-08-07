import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './light_row.module.sass'
import Btn from './index'



export default function lightRow({ indexY = 'A' , user, setUser}) {
  const buttons = []

  for (let i = 1; i <= 15; i++) {
    buttons.push(<Btn key={i} text={i.toString()} indexY={indexY} setUser={setUser}
    />)
  }
  return (
    <>
      <div className={`${styles.flex_row}`}>
        <div className={`${styles.title}`}>{indexY}</div>
        {buttons}
        <div className={`${styles.title}`}>{indexY}</div>
      </div>
    </>
  )
}
