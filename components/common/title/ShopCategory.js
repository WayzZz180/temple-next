import React from 'react'
import variables from '@/styles/_variables.module.sass'
import Link from 'next/link'
import styles from './ShopCategory.module.sass'

export default function ShopCategory({ text = 'text', color = 'green' ,link='/shop'}) {
  const var_color = variables[color]

  return (
    <div className={`${styles.flex} p10px mt30px`}>
      <span
        className={`${styles.inlineBlock} w5px h25px`}
        style={{ backgroundColor: var_color }}
      ></span>
      <Link className='link' href={link}>
        <span className={`${styles.flex} fwBold ps10px fs24px`}>{text}</span>
      </Link>
    </div>
  )
}
