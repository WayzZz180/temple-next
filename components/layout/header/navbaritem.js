import React from 'react'
import styles from './header.module.sass'
import Link from 'next/link'

export default function NavbarItem({ title, title2, links }) {
  return (
    <>
      <li>
        <span className={`${styles.title}`}>{title}</span>
        <span className={`${styles.title2}`}>{title2}</span>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  )
}
