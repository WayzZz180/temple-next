import React from 'react'
import styles from './header.module.sass'
import NavbarLeft from './navbarleft'
import NavbarRight from './navbarright'
import Logo from './logo'

export default function Index() {
  return (
    <>
      <header className={`${styles.header_container}`}>
        <div>
          {/* navbar left */}
          <div className={`${styles.flex_row2} ${styles.h15px} ${styles.head}`}>
            <NavbarLeft />

            {/* logo */}
            <Logo />

            {/* navbar right*/}
            <NavbarRight />
          </div>
          {/* <Image src={Header_Tri} alt="tri" /> */}
        </div>
      </header>
    </>
  )
}
