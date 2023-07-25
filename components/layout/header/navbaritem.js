import React from 'react'
import styles from './header.module.sass'
import Link from 'next/link'

export default function NavbarItem({ title, title2, links }) {
  return (
    <li className={`mt10px`}>
      <div className={`${styles.title} fs14px ps30px `}>{title}</div>
      <div className={`${styles.title2} fs16px mt5px pb15px ps30px pe30px`}>
        {title2}
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index} className={`mt10px mb20px`}>
            <Link href={link.url} className={`fs14px`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}
