import React from 'react'
import styles from './header.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import logoChiHeader from '@/assets/logoChiHeader.svg'
import logoEngHeader from '@/assets/logoEngHeader.svg'

export default function Logo() {
  return (
    <>
      <div className={`${styles.flex_col2}`}>
        <Link href="#">
          <Image src={logoChiHeader} width={85} alt="logo" />
        </Link>
        <Link href="#">
          <Image src={logoEngHeader} width={100} alt="logo" />
        </Link>
      </div>
    </>
  )
}
