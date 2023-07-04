import React from 'react'
import styles from '@/components/common/title/title.module.css'

export default function Title({
  CHNtext = '132',
  ENGtext = '465',
  coloredLine,
}) {
  return (
    <>
      <div className={styles.TEST}></div>
      <div className={styles.title_container}>
        <h1 className={styles.title}>{CHNtext}</h1>
        <h2 className={styles.subtitle}>{ENGtext}</h2>
        <div className={coloredLine}></div>
      </div>
    </>
  )
}
