import styles from '@/components/common/coupons/allCoupons.module.sass'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

// components
import Coupon from '@/components/common/coupons/index.js'
import NoCouponData from '@/components/common/category/noCouponData'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function ExpiredCoupons() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const router = useRouter()
  const { id } = router.query
  const [coupon, setCoupon] = useState([])

  useEffect(() => {
    console.log(`coupons頁面 有沒有auth.token?1`, auth.token)
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/expiredCoupons', {
        headers: {
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(`coupons頁面 有沒有auth.token?2`, auth.token)
          console.log(`coupons頁面 data:`, data)
          // 進入頁面把資料抓出來
          setCoupon(data)
        })
    } else {
      // Handle the case when auth.token is not available or user is not logged in
      // You can add any additional logic here
      console.log('用戶尚未註冊')
    }
  }, [auth.token])

  return (
    <>
      {coupon && coupon.length > 0 ? (
        coupon.map((v, i) => (
          <div key={v.coupon_status_id}>
            <Coupon
              couponName={v.coupon_name}
              couponValue={`$${v.coupon_value}`}
              expDate={v.expiration_date}
              usageStatus={v.usage_status}
            />
          </div>
        ))
      ) : (
        <NoCouponData />
      )}
    </>
  )
}
