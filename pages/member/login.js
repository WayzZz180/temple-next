import React from 'react'
import Image from 'next/image'
import styles from '@/pages/member/login.module.sass'
import Link from 'next/link'
import { useState, useContext } from 'react'
import AuthContext from '@/contexts/AuthContext'
import { AuthContextProvider } from '@/contexts/AuthContext'
import { useRouter } from 'next/router'

// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import doorGodLeft from '@/assets/doorGodLeft.svg'
import doorGodRight from '@/assets/doorGodRight.svg'
import Checkbox from '@/components/common/checkBox'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Login() {
  const router = useRouter()
  const { auth, setAuth } = useContext(AuthContext)
  const [user, setUser] = useState({
    member_account: '',
    member_password: '',
  })

  const changeUser = (e) => {
    setUser((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }))
  }

  const doLogin = (e) => {
    e.preventDefault()
    fetch(process.env.API_SERVER + '/member/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)

        if (data.success) {
          const obj = { ...data.data }
          localStorage.setItem('auth', JSON.stringify(obj))
          setAuth(obj)
          alert('登入成功')
          router.push('/')
        } else {
          alert(data.error || '帳密錯誤')
        }
      })
  }

  return (
    <div className={styles.flex}>
      <Container>
        <Row>
          <Col>
            <div className="mt100px">
              <Image
                src={doorGodLeft}
                alt="doorGodLeft"
                height={835}
                width={631}
              ></Image>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <form onSubmit={doLogin}>
          <Row>
            <Col>
              <Title text="登入會員" text2="LOGIN" lineColor="green" />
            </Col>
          </Row>
          <Row className={styles.flex_centre}>
            <Col>
              <InputBox
                prompt="測試用~Email"
                type="email"
                // className="form-control"
                id="member_account"
                placeholder="電子郵件地址"
                value={user.member_account}
                onChange={changeUser}
              />
            </Col>
          </Row>
          <Row className={styles.flex_centre}>
            <Col>
              <InputBox
                type="text"
                // className="form-control"
                id="member_password"
                placeholder="密碼"
                value={user.member_password}
                onChange={changeUser}
              />
            </Col>
          </Row>
          <Row>
            <Col className={styles.flex_checkbox}>
              <Checkbox label="保持登入狀態?" />
              <Link href="#" className="link">
                忘記密碼？
              </Link>
            </Col>
          </Row>

          <Row className={styles.flex_container}>
            <Col>
              <div className="ls6px">
                如登入，即同意錦囊廟祭的
                <Link href="#" className="link">
                  隱私權政策
                </Link>
                和
                <Link href="" className="link">
                  使用條款
                </Link>
              </div>
            </Col>
          </Row>
          <Row className={styles.flex_centre}>
            <Col>
              <Button text="登入" btnColor="black" width={487} />
            </Col>
          </Row>

          <Row className={styles.flex_centre}>
            <Col>
              <div>
                不是會員?{' '}
                <Link href="#" className="link">
                  加入我們
                </Link>
              </div>
            </Col>
          </Row>
        </form>
      </Container>

      <Container>
        <Row>
          <Col>
            <div className="mt100px">
              <Image
                src={doorGodRight}
                alt="doorGodRight"
                height={835}
                width={631}
              ></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
