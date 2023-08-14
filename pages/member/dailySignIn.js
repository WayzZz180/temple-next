import Head from 'next/head'
import styles from '@/pages/member/dailySignIn.module.sass'
import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'

// components
import InputBox from '@/components/common/inputBox/index.js'
import MemberTitle from '@/components/common/title/memberTitle'

import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Coupon from '@/components/common/coupons/index.js'
import SpinWheel from '@/components/common/spinWheel/ULspinWheel.js'
import data from '@/components/mydata/memberNavbarData.js'
//bootstrap
import { Container, Row, Col } from 'react-bootstrap'
import ProfilePhoto from '@/components/common/profilePhoto'

export default function dailySignIn() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const router = useRouter()
  const { id } = router.query
  const [coupon, setCoupon] = useState([])
  const [user, setUser] = useState('')
  const [si, setSi] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false) // 跟蹤 modal 是否打開
  // 優惠券資訊的狀態
  // const [couponInfo, setCouponInfo] = useState({
  //   coupon_type: '',
  //   coupon_value: '',
  // })
  // 狀態變數，用於觸發重新渲染
  const [spinWheelUpdated, setSpinWheelUpdated] = useState(false)

  // 函式，用於觸發重新渲染
  const updateSpinWheel = () => {
    setSpinWheelUpdated(!spinWheelUpdated)
  }

  //拿token 跟資料
  useEffect(() => {
    console.log(`dailySignIn頁面 有沒有auth.token?1`, auth.token)
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/dailySignIn', {
        headers: {
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(`daileySignIn頁面 有沒有auth.token?2`, auth.token, data)
          // 進入頁面把資料抓出來
          setSi(data)
          // setUser(data.member_id)
        })
    } else {
      // Handle the case when auth.token is not available or user is not logged in
      // You can add any additional logic here
      console.log('用戶尚未註冊')
    }
  }, [auth.token, spinWheelUpdated])

  return (
    // <div className={styles.flex_centre}>
    <Container className="shopContainer">
      <Head>
        <title>{data[7]?.text}</title>
      </Head>
      <ProfilePhoto />
      <Row>
        <Col>
          <MemberTitle
            text="每日簽到"
            text2="DAILY SIGN IN"
            lineColor="green"
          />
        </Col>
      </Row>
      <Row>
        <Col className={`${styles.navbar}`}>
          <MemberNavbar />
        </Col>
      </Row>

      {/* 轉盤 */}

      {/* 將 updateSpinWheel 函式傳遞給 SpinWheel 元件 */}
      <SpinWheel updateSpinWheel={updateSpinWheel} />

      {/* 簽到標題 */}
      <Row className={styles.flex_centre}>
        <Col>
          <div>{si.signin_date}</div>
        </Col>
      </Row>
      {/* 簽到記錄 */}
      <Row className={`${styles.flex_centre} ${styles.record} fwBold`}>
        <Col>
          <div className={`${styles.text_align} pt15px pb15px`}>
            近10筆簽到記錄:
          </div>
          {si.length > 0 ? (
            si.map((v, i) => {
              // Date formatting code here
              const dateObject = new Date(v.signin_date)
              const formattedDateTime = dateObject.toLocaleString('zh-TW', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })

              return (
                <div key={i}>
                  <div>{formattedDateTime}</div>
                </div>
              )
            })
          ) : (
            <div>還沒有簽到記錄!!!</div>
          )}
        </Col>
      </Row>
    </Container>
    // </div>
  )
}
