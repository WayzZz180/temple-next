import React from 'react'
import styles from './header.module.sass'
import NavbarLeft from './navbarleft'
import NavbarRight from './navbarright'
import Logo from './logo'
// import Image from 'next/image'
// import Header_Tri from '@/assets/header_tri.svg'

export default function Index() {
  return (
    <>
      <header>
        {/* navbar left */}
        <div className={`${styles.flex_row2} ${styles.h15px} ${styles.head}`}>
          <NavbarLeft />

          {/* logo */}
          <Logo />

          {/* navbar right*/}
          <NavbarRight />
        </div>
        {/* <Image src={Header_Tri} alt="tri" /> */}
      </header>
    </>
  )
}
