import React from 'react'
import variables from '@/styles/_variables.module.sass'
import styles from './ShopCategory.module.sass'

export default function ShopCategory({ text = 'text', color = 'green' }) {
  const var_color = variables[color]
  return (
    <>
      <span
        className={`${styles.inlineBlock} w10px h30px`}
        style={{ backgroundColor: var_color }}
      ></span>
      <span className={`${styles.inlineBlock}`}>{text}</span>
    </>
  )
}
