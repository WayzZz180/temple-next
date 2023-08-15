import React, { useState, useEffect } from 'react'
import styles from './header.module.sass'
import Link from 'next/link'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import CartCountContext from '@/contexts/CartCountContext'

import AuthContext from '@/contexts/AuthContext'
import Alert from '@/components/common/alert'

export default function NavbarItem({ title = '', title2, links }) {
  // const { cartCount } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false)
  const [alertIsOpen, setAlertIsOpen] = useState(false)
  const { auth, setAuth, logout } = useContext(AuthContext)
  const { cartCount, setCartCount, getCartCount } = useContext(CartCountContext)
  const router = useRouter()
  const [login, setLogin] = useState(false)
  const [liClick, setLiClick] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [liClick])

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }, [router.query])

  const [pleaseLogIn, setPleaseLogIn] = useState(false)
  return (
    <>
      <li className={`${styles.liContainer} mt10px`}>
        <div className={`${styles.title} fs14px ps30px `}>{title}</div>
        <div className={`${styles.title2} fs16px mt5px pb15px ps30px pe30px`}>
          {title2}
        </div>
        <ul>
          {links.map((link, index) => (
            <li
              role="presentation"
              key={index}
              className={`mt10px mb20px`}
              onClick={() => {
                auth.id === 0 &&
                link.label != '商城首頁' &&
                link.label !== '登入' &&
                link.label != '供品一覽'
                  ? setAlertIsOpen(true)
                  : router.push(link.url)
              }}
            >
              <Link href={auth.id === 0 ? '' : link.url} className={`fs14px`}>
                {link.label}
                {link.label === '購物車' ? (
                  <span className={styles.count}>
                    （{login ? cartCount : 0}）
                  </span>
                ) : (
                  ''
                )}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className={`${styles.rwdliContainer} mt10px`}>
        <div
          role="presentation"
          className={`${styles.title} fs14px ps30px `}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {title}
        </div>
        <div className={`${styles.title2} fs16px mt5px pb15px ps30px pe30px`}>
          {title2}
        </div>
        <ul style={{ display: isOpen ? 'block' : 'none' }}>
          {links.map((link, index) => (
            <li
              role="presentation"
              key={index}
              className={`mt10px mb20px`}
              onClick={() => {
                auth.id === 0 &&
                link.label != '商城首頁' &&
                link.label !== '登入' &&
                link.label != '供品一覽'
                  ? setAlertIsOpen(true)
                  : router.push(link.url)
                setLiClick(!liClick)
              }}
            >
              <Link href={auth.id === 0 ? '' : link.url} className={`fs14px`}>
                {link.label}
                {link.label === '購物車' ? (
                  <span className={styles.count}>
                    （{login ? cartCount : 0}）
                  </span>
                ) : (
                  ''
                )}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {alertIsOpen ? (
        <Alert
          status="wrong"
          text="請先登入"
          isOpen={alertIsOpen}
          setIsOpen={setAlertIsOpen}
        />
      ) : (
        ''
      )}
    </>
  )
}
