import React, { useContext } from 'react'
import styles from '@/pages/member/profile.module.sass'
import { useEffect } from 'react'
import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'

// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar/index.js'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Profile() {
  const { auth, setAuth, logout } = useContext(AuthContext);


  useEffect(() => {
    if (auth.token) {
      fetch(`${process.env.API_SERVER}/member/profile`, {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      })
      
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }else {
    // Handle the case when auth.token is not available or user is not logged in
    // You can add any additional logic here
    console.log("User is not logged in.");
  }
}, [auth.token]);

  return (
    <div className={styles.flex}>
      <Container>
        <Row>
          <Col>
            <Title
              text="變更資料"
              text2="PROFILE DETAILS"
              lineColor="green"
              width={860}
            />
          </Col>
        </Row>

        <MemberNavbar />

        <Row className={styles.flex_space_between}>
          <Col>
            <InputBox
              prompt="姓名"
              type="text"
              placeholder="姓名"
              onChange
              width={484}
            />
          </Col>
          {/* 202-15*2空白 = 202 */}
          <Col>
            <InputBox
              prompt="暱稱"
              type="text"
              placeholder="暱稱"
              onChange
              width={417}
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              prompt="Email"
              type="email"
              placeholder="電子郵件地址"
              onChange
              width={994}
              style={{ letterSpacing: '40px' }}
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              prompt="會員編號"
              type="text"
              placeholder="會員編號"
              onChange
              width={994}
              disabled
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              prompt="出生年月日"
              type="date"
              placeholder="出生年月日 "
              onChange
              width={994}
            />
          </Col>
          {/* Q3 */}
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              prompt="手機號碼"
              type="text"
              placeholder="手機號碼 "
              onChange
              width={994}
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              prompt="現居地址"
              type="text"
              placeholder="現居地址 "
              onChange
              width={994}
            />
          </Col>
        </Row>
        <Row className={styles.flex_end}>
          <Col>
            <Button text="儲存變更" btnColor="black" width={229} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
