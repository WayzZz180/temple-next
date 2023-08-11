import React from 'react'
import styles from './close.module.sass'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Close() {
  return (
    <div className={`${styles.PIN_container}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.line}`}></div>
        <div className={`${styles.line2}`}></div>
      </div>
    </div>
  )
}
