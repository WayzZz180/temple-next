import React from 'react'
import styles from '../footer.module.css'

export default function Word({ content }) {
  return (
    <span>
      <a href="#" className={styles.ahref}>
        {content}
      </a>
    </span>
  )
}
