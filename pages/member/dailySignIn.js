import styles from '@/pages/member/dailySignIn.module.sass'
import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'

// components
import InputBox from '@/components/common/inputBox/index.js'
import MemberTitle from '@/components/common/title/memberTitle'

import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Coupon from '@/components/common/coupon/index.js'
import SpinWheel from '@/components/common/spinWheel'

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

  const handleModalCloseReload = () => {
    // 當點擊取消或按下 Esc 時，關閉小視窗
    setModalIsOpen(false)
    // window.location.reload()
  }

  console.log('render次數')

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
          setUser(data.member_id)
        })
    } else {
      // Handle the case when auth.token is not available or user is not logged in
      // You can add any additional logic here
      console.log('用戶尚未註冊')
    }
  }, [auth.token, modalIsOpen])

  const signIn = (e) => {
    e.preventDefault()

    fetch(process.env.API_SERVER + '/member/dailySignIn', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        // 存儲後端的錯誤訊息
        if (data.error) {
          console.log(data.error)
          alert(data.error) // 顯示 email 已被使用的錯誤訊息

          return // 終止後續的處理
        }

        console.log(data)

        if (data) {
          // alert('簽到成功')
          setTimeout(() => {
            setModalIsOpen(true)
          }, 4200)
          // router.push('/member/login');
          // window.location.reload()
        }
      })
      .catch((error) => {
        alert('簽到失敗', error)
      })
  }

  return (
    <div className={styles.flex_centre}>
      <Container>
        <ProfilePhoto />
        <Row>
          <Col>
            <MemberTitle
              text="每日簽到"
              text2="DAILY SIGN IN"
              lineColor="green"
              width={860}
            />
          </Col>
        </Row>

        <MemberNavbar />
        <Row className={styles.flex_centre}>
          <form onSubmit={signIn}>
            <Col>
              <SpinWheel />
            </Col>
          </form>
        </Row>

        <Row className={styles.flex_centre}>
          <Col>
            <div>{si.signin_date}</div>
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <div className={styles.text_align}>近10筆簽到記錄:</div>
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
      {/* 小視窗 */}
      <Modal
        isOpen={modalIsOpen}
        contentLabel="簽到成功!"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
            zIndex: 2, //1 為spin pointer
          },
          content: {
            maxWidth: '300px', // 調整最大寬度
            maxHeight: '200px', // 調整最大高度
            margin: 'auto', // 水平居中
          },
        }}
      >
        <h2>恭喜獲得XXX折價券</h2>
        <div>
          <button onClick={handleModalCloseReload}>確認</button>
        </div>
      </Modal>
    </div>
  )
}
