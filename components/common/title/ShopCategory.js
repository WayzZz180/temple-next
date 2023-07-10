import React from 'react'
import variables from '@/styles/_variables.module.sass'
import styles from './ShopCategory.module.sass'

export default function ShopCategory({ text = 'text', color = 'green' }) {
  const var_color = variables[color]

  return (
    <div className={`${styles.flex} p10px mt30px`}>
      <span
        className={`${styles.inlineBlock} w5px h25px`}
        style={{ backgroundColor: var_color }}
      ></span>
      <span className={`${styles.flex} fwBold ps10px fs24px`}>{text}</span>
    </div>
  )
}
