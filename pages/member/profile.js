import React, { useContext } from 'react'
import styles from '@/pages/member/profile.module.sass'
import { useEffect } from 'react'
import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'
import { useState } from 'react'

// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar/index.js'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Profile() {
  const { auth, setAuth, logout } = useContext(AuthContext);

  const [user, setUser] = useState('')

  
  useEffect(() => {
    console.log(`profile頁面 有沒有auth.token?1`, auth.token)
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/profile', {
        headers: {
          "Authorization": "Bearer " + auth.token,
        },
      })

      
      .then((r) => r.json())
      .then((data) => {
        console.log(`profile頁面 有沒有auth.token?2`, auth.token, data);
        console.log( data);
        // 進入頁面把資料抓出來
        setUser (data)
      
      });
  }else {
    // Handle the case when auth.token is not available or user is not logged in
    // You can add any additional logic here
    console.log("用戶尚未註冊");
  }
}, [auth.token]);
// Convert the date format to "yyyy-MM-dd"
  // Convert the date format to "YYYY-MM-DD"
  useEffect(() => {
    if (user.member_birthday) {
      const formattedBirthday = new Date(user.member_birthday).toISOString().slice(0, 10);
      setUser((prevUser) => ({ ...prevUser, member_birthday: formattedBirthday }));
    }
  }, [user.member_birthday]);

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
               type="text"
                id="member_name"
                placeholder="姓名"
                
              
                value={user.member_name}
              width={417}
            />
          </Col>
          {/* 202-15*2空白 = 202 */}
          <Col>
            <InputBox
               type="text"
                id="member_forum_name"
                placeholder="暱稱"
                
              
                value={user.member_forum_name}
              width={417}
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
            prompt="Email"
                id="member_account"
                type="text"
                placeholder="電子郵件地址"
                
              
                value={user.member_account}
              width={994}
              style={{ letterSpacing: '40px' }}
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              type="text"
              id="member_password"
              placeholder="密碼"
              
            
              value={user.member_password}
              width={994}
              
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              type="date"
                id="member_birthday"
                placeholder="出生年月日 "
                
              
                value={user.member_birthday}
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
              value={user.member_phone}
              width={994}
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
             type="text"
                id="member_address"
                placeholder="現居地址 "
                
              
                value={user.member_address}
             
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
