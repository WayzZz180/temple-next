import React from 'react'
import styles from './header.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import logoChiHeader from '@/assets/logoChiHeader.svg'
import logoEngHeader from '@/assets/logoEngHeader.svg'

export default function Logo() {
  return (
    <div className={`${styles.logo}`}>
      <div className={`${styles.flex_col}`}>
        <Link href="/Home">
          <Image src={logoChiHeader} width={105} alt="logo" />
        </Link>
        <Link href="/Home">
          <Image src={logoEngHeader} width={118} alt="logo" />
        </Link>
      </div>
    </div>
  )
}
