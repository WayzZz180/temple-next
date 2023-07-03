import React from 'react'
import styles from '@/styles/title.module.css'

export default function Title() {
  return (
    <>
      <div className="TEST">TEST</div>
      <div className={styles.title_container}>
        <h1 className={styles.title}>標題中文</h1>
        <h2 className={styles.subtitle}>TitleTitleTitle</h2>
        <div className={styles.colored_line}></div>
      </div>
    </>
  )
}
