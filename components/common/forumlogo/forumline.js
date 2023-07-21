import React from 'react'
import styles from './forumline.module.sass'
import variables from '@/styles/_variables.module.sass'

export default function Forumline({ lineColor = 'brown' }) {
  const var_color = variables[lineColor]
  return (
    <>
      <div className={`${styles.container}`}>
        <div
          className={`${styles.line}`}
          style={{ backgroundColor: var_color }}
        ></div>
      </div>
    </>
  )
}
