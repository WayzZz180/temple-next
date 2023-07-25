import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './light_row.module.sass'
import Btn from './index'

const buttons = []

for (let i = 16; i <= 30; i++) {
  buttons.push(<Btn key={i} text={i.toString()} />)
}

export default function lightRow({ text = 'A' }) {
  return (
    <>
      <div className={`${styles.flex_row}`}>
        <div className={`${styles.title}`}>{text}</div>
        {buttons}
        <div className={`${styles.title}`}>{text}</div>
      </div>
    </>
  )
}
