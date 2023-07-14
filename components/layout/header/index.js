import React from 'react'
import Image from 'next/image'
import styles from './header.module.sass'
import Navbar from './navbar'
import Logo from './logo'
import headerBg from '@/assets/header.svg'

export default function Header() {
  const headerStyle = {
    backgroundImage: `url(${headerBg.src})`,
    // backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-1px -1px",
    backgroundSize: "101%"

  };

  return (
    <header style={headerStyle}>
      <div className={`${styles.flex_row} ${styles.head} pt20px`}>
        <Navbar info="left" />
        <Logo />
        <Navbar info="right" />
      </div>
      <div className={`${styles.box}`}></div>
    </header>
  )
}
