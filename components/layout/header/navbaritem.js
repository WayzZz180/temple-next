import React from 'react'
import styles from './header.module.sass'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import CartContext from '@/contexts/CartCountContext'
import AuthContext from '@/contexts/AuthContext'
import Alert from '@/components/common/alert'

export default function NavbarItem({ title = '', title2, links }) {
  const { cartCount } = useContext(CartContext)
  const { auth, setAuth, logout } = useContext(AuthContext)
  const router = useRouter()
  const [pleaseLogIn, setPleaseLogIn] = useState(false)
  return (
    <>
      <li className={`mt10px`}>
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
                  ? setPleaseLogIn('請先登入')
                  : router.push(link.url)
              }}
            >
              <Link href={auth.id === 0 ? '' : link.url} className={`fs14px`}>
                {link.label}
                {link.label === '購物車' ? (
                  <span className={styles.count}>（{cartCount}）</span>
                ) : (
                  ''
                )}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {pleaseLogIn ? (
        <Alert
          isOpen={true}
          text={`請先登入`}
          status="false"
          setIsOpen={setPleaseLogIn}
        />
      ) : (
        ''
      )}
    </>
  )
}
