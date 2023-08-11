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
import MemberTitle from '@/components/common/title/memberTitle'

import Button from '@/components/common/button/index.js'
import doorGodLeft from '@/assets/doorGodLeft.svg'
import doorGodRight from '@/assets/doorGodRight.svg'
import Checkbox from '@/components/common/checkBox'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Login() {
  const router = useRouter()
  const { auth, setAuth } = useContext(AuthContext)
  const [user, setUser] = useState({
    member_account: '',
    member_password: '',
  })
  const [showPassword, setShowPassword] = useState(false) // 顯示密碼

  // 切換顯示密碼
  const toggleShowPassword = () => {
    setShowPassword((prevshowPassword) => !prevshowPassword)
  }

  const changeUser = (e) => {
    setUser((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }))
  }

  const doLogin = () => {
  const doLogin = () => {
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
          router.push('/member/personalinfo')
        } else {
          alert(data.error || '帳密錯誤')
        }
      })
  }

  return (
    <Container className={styles.flex}>
      <Row>
        <Col>
          <div className="mt100px">
            <Image
              src={doorGodLeft}
              alt="doorGodLeft"
              // height={835}
              width={525}
            ></Image>
          </div>
        </Col>
      </Row>

      <Row className="ps60px pe60px">
        <Col>
          <div className="mt100px">
            <MemberTitle
              text="登入會員"
              text2="LOGIN"
              lineColor="green"
              width={450}
            />
          </div>
        </Col>
        <Col className={styles.flex_centre}>
          <div>
            <InputBox
              prompt="帳號"
              type="email"
              // className="form-control"
              id="member_account"
              placeholder="電子郵件地址"
              value={user.member_account}
              onChange={changeUser}
            />
          </div>
        </Col>
        <Col className={styles.flex_centre}>
          <div>
            <div className="">
              <InputBox
                type={showPassword ? 'text' : 'password'}
                prompt="密碼"
                // className="form-control"
                id="member_password"
                placeholder="密碼"
                value={user.member_password}
                onChange={changeUser}
              />
            </div>
            {showPassword ? (
              <div className={styles.flex_start} style={{ cursor: 'pointer' }}>
                <VisibilityOffIcon
                  onClick={toggleShowPassword}
                  className="me10px"
                />
                隱藏密碼{' '}
              </div>
            ) : (
              <div className={styles.flex_start} style={{ cursor: 'pointer' }}>
                <VisibilityIcon
                  onClick={toggleShowPassword}
                  className="me10px"
                />
                顯示密碼
              </div>
            )}
          </div>
        </Col>
        <Col>
          <div className={styles.flex_checkbox}>
            <Checkbox label="保持登入狀態？" />
            <Link href="#" className={`${styles.linkHover} link fwBold`}>
              忘記密碼？
            </Link>
          </div>
        </Col>

        <Col className={`${styles.flex_container} fwBold`}>
          <div>
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
          </div>
        </Col>
        <Col className={styles.flex_centre}>
          <div className="mb15px">
            <Button
              text="登入"
              btnColor="black"
              width={487}
              link={() => {
                doLogin()
              }}
            />
          </div>
        </Col>

        <Col className={styles.flex_centre}>
          <div>
            <div className={`${styles.join}`}>
              {/* 不是會員？
              <Link href="/member/signUp" className="link">
                加入我們
              </Link> */}
              <div className="fs18px fwBold pe5px">不是會員？</div>

              <Link
                href="/member/signUp"
                className={`${styles.linkHover} link fs18px fwBold`}
              >
                加入我們
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div>
            <div className="mt100px">
              <Image
                src={doorGodRight}
                alt="doorGodRight"
                // height={835}
                width={525}
              ></Image>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
