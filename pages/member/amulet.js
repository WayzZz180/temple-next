import styles from '@/pages/member/amulet.module.sass'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

// components
import MemberTitle from '@/components/common/title/memberTitle'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Amulet from '@/components/common/amuletDetails/index.js'
import ProfilePhoto from '@/components/common/profilePhoto'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function MyAmulet() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const router = useRouter()
  const { id } = router.query
  const [amulet, setAmulet] = useState([])

  const numberToChinese = (number) => {
    const chineseNums = [
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
      '七',
      '八',
      '九',
      '十',
      '十一',
      '十二',
      '十三',
      '十四',
      '十五',
      '十六',
      '十七',
      '十八',
      '十九',
      '二十',
      '二十一',
      '二十二',
      '二十三',
      '二十四',
      '二十五',
      '二十六',
      '二十七',
      '二十八',
      '二十九',
      '三十',
      '三十一',
      '三十二',
      '三十三',
      '三十四',
      '三十五',
      '三十六',
      '三十七',
      '三十八',
      '三十九',
      '四十',
      '四十一',
      '四十二',
      '四十三',
      '四十四',
      '四十五',
      '四十六',
      '四十七',
      '四十八',
      '四十九',
      '五十',
      '五十一',
      '五十二',
      '五十三',
      '五十四',
      '五十五',
      '五十六',
      '五十七',
      '五十八',
      '五十九',
      '六十',
    ]
    return chineseNums[number - 1] || number.toString()
  }

  useEffect(() => {
    console.log(`amulet頁面 有沒有auth.token?1`, auth.token)
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/amulet', {
        headers: {
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(`amulet頁面 有沒有auth.token?2`, auth.token)
          console.log(`amulet頁面 data:`, data)
          // 進入頁面把資料抓出來
          setAmulet(data)
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
            <MemberTitle text="護身符" text2="AMULET" lineColor="green" />
          </Col>
        </Row>
        <MemberNavbar />

        {amulet && amulet.length > 0 ? (
          amulet.map((v, i) => (
            <div key={i}>
              <Amulet amuletName={v.Name} />
            </div>
          ))
        ) : (
          <div>目前沒有可用護身符</div>
        )}
      </Container>
    </div>
  )
}
