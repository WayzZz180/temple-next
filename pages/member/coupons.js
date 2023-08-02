import styles from '@/pages/member/personalinfo.module.sass'
import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'

// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Coupon from '@/components/common/coupons/index.js'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Coupons() {
  const { auth, setAuth, logout } = useContext(AuthContext);
  const router = useRouter()
  const { id } = router.query;
  const [coupon, setCoupon] = useState('');

  useEffect(() => {
    console.log(`coupons頁面 有沒有auth.token?1`, auth.token)
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/coupons', {
        headers: {
          "Authorization": "Bearer " + auth.token,
        },
      })
      .then((r) => r.json())
      .then((data) => {
        console.log(`coupons頁面 有沒有auth.token?2`, auth.token);
        console.log(`coupons頁面 data:`, data);
        // 進入頁面把資料抓出來
        setCoupon (data)
      
      });
  }else {
    // Handle the case when auth.token is not available or user is not logged in
    // You can add any additional logic here
    console.log("用戶尚未註冊");
  }
}, [auth.token]);

  return (
    <div className={styles.flex}>
      <Container>
        <Row>
          <Col>
            <Title
              text="我的優惠券"
              text2="COUPONS"
              lineColor="green"
              width={860}
            />
          </Col>
        </Row>
        <MemberNavbar />

        <Coupon
        couponName={coupon.coupon_name}
        couponValue={`$${coupon.coupon_value}`}
        expDate={coupon.expiration_date}
        usageStatus={coupon.usage_status} />
      </Container>
    </div>
  )
}
