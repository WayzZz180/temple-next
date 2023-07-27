import React from 'react'
import styles from './header.module.sass'
import Link from 'next/link'
import { useState, useEffect, useContext  } from 'react'
import CartContext from '@/contexts/CartContext'
import { useRouter } from 'next/router'

export default function NavbarItem({ title, title2, links }) {
  // const [ cartCount, setCartCount] = useState(0)
  const { cartCount } = useContext(CartContext);
  // console.log(count)
  const router = useRouter();
  // useEffect(() => {
  //   fetch(`${process.env.API_SERVER}/shop`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setCartCount(data)
  //     })
  // }, [router.query])


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
              {link.label === "購物車" ? <span className={styles.count}>（{cartCount}）</span>:""}  
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}
