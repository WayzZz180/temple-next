import React from 'react'
import styles from '@/components/common/title/title.module.css'

export default function Title({
  CHNtext = '中文標題',
  ENGtext = '英文標題',
  colored_line,
}) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>{CHNtext}</h1>
        <h2 className={styles.subtitle}>{ENGtext}</h2>
        <div className={colored_line}></div>
      </div>
    </>
  )
}
