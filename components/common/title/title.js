import React from 'react'
import styles from '@/components/common/title/title.module.css'

function Title({ CHNtext = '中文標題', ENGtext = '英文標題', colored_line }) {
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

export default function TitleTest1() {
  return (
    <>
      <Title
        CHNtext="登入會員"
        ENGtext="SIGN UP"
        colored_line={styles.colored_line_green}
      />
      <Title
        CHNtext="步驟"
        ENGtext="STEPS"
        colored_line={styles.colored_line_red}
      />
    </>
  )
}
