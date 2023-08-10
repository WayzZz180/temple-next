import styles from '@/pages/member/wishlist.module.sass'
import Image from 'next/image'
import { Fragment } from 'react'
import variables from '@/styles/_variables.module.sass'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

// components
import MemberTitle from '@/components/common/title/memberTitle'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Wishlist from '@/components/common/wishlist'
import ProfilePhoto from '@/components/common/profilePhoto'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function MyWishlist() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const router = useRouter()
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    console.log(`wishlist頁面 有沒有auth.token?1`, auth.token)
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/wishList', {
        headers: {
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(`wishlist頁面 有沒有auth.token?2`, auth.token)
          console.log(`wishlist頁面 data:`, data)
          // 進入頁面把資料抓出來
          setWishlist(data)
        })
    } else {
      // Handle the case when auth.token is not available or user is not logged in
      // You can add any additional logic here
      console.log('用戶尚未註冊')
    }
  }, [auth.token])

  return (
    <div className={styles.flex}>
      <Container>
        <ProfilePhoto />
        <Row>
          <Col>
            <MemberTitle text="收藏清單" text2="WISHLIST" lineColor="green" />
          </Col>
        </Row>
        <MemberNavbar />

        {wishlist && wishlist.length > 0 ? (
          wishlist.map((v, i) => (
            <div key={i}>
              <Wishlist
                WLimage={v.image}
                WLname={v.product_name}
                WLprice={v.product_price}
                WLpid={v.pid}
                WLcid={v.cid}
              />
            </div>
          ))
        ) : (
          <div>123</div>
        )}
      </Container>
    </div>
  )
}
