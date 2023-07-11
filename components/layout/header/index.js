import React from 'react'
import Image from 'next/image'
import styles from './header.module.sass'
import Navbar from './navbar'
import Logo from './logo'
import headerBg from '@/assets/header.svg'

export default function Header() {
  return (
    <header>
      <div className={`${styles.flex_row} ${styles.head} pt20px`}>
        <Navbar info="left" />
        <Logo />
        <Navbar info="right" />
      </div>
      <Image
        src={headerBg}
        alt="header"
        className={`${styles.headerBg}`}
      ></Image>
      <div className={`${styles.box}`}></div>
    </header>
  )
}
