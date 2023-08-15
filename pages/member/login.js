import Head from 'next/head'
import React, { useEffect } from 'react'
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
import Alert from '@/components/common/alert'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

import HomeDoor from '@/components/common/cards/HomeDoorlogin'

export default function Login() {
  const router = useRouter()
  const { auth, setAuth } = useContext(AuthContext)
  const [user, setUser] = useState({
    member_account: '',
    member_password: '',
  })
  const [showPassword, setShowPassword] = useState(false) // 顯示密碼
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)
  const [ErrorMessage, setErrorMessage] = useState('')

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
          // alert('登入成功')
          setLoginSuccess(true)
          setTimeout(() => {
            router.push('/member/personalinfo')
          }, 1750)
        } else {
          setLoginFailed(true)
          setErrorMessage(data.error)
          // setTimeout(() => {
          //   setLoginFailed(false)
          // }, 1750)
        }
      })
  }

  //黑色區塊消失
  useEffect(() => {
    const blackblock = document.getElementById('background')

    if (blackblock) {
      const timeout = setTimeout(() => {
        blackblock.style.display = 'none'
      }, 1000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>會員登入</title>
      </Head>

      <Container className={styles.flex}>
        <div id="background" className={`${styles.background}`}>
          <div className={`${styles.position}`}>
            <div className={styles.blackblock} id="blackblock">
              <HomeDoor />
            </div>
          </div>
        </div>
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
                width={500}
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
                <div
                  role="presentation"
                  className={styles.flex_start}
                  style={{ cursor: 'pointer' }}
                  onClick={toggleShowPassword}
                >
                  <VisibilityOffIcon className="me10px" />
                  隱藏密碼{' '}
                </div>
              ) : (
                <div
                  role="presentation"
                  className={styles.flex_start}
                  style={{ cursor: 'pointer' }}
                  onClick={toggleShowPassword}
                >
                  <VisibilityIcon className="me10px" />
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
          <Col className={styles.flex_centre}>
            <Button
              text="登入"
              btnColor="black"
              width={487}
              link={() => {
                doLogin()
              }}
            />
          </Col>

          <Col className={styles.flex_centre}>
            <div className={`${styles.join}`}>
              <div className="fs18px fwBold pe5px">不是會員？</div>

              <Link
                href="/member/signUp"
                className={`${styles.linkHover} link fs18px fwBold`}
              >
                加入我們
              </Link>
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
      {loginSuccess ? (
        <Alert
          isOpen={true}
          text={`登入成功`}
          status="correct"
          setIsOpen={setLoginSuccess}
        />
      ) : (
        ''
      )}
      {loginFailed ? (
        <Alert
          isOpen={true}
          text={ErrorMessage || '帳號或密碼錯誤，請重新輸入'}
          status="wrong"
          setIsOpen={setLoginFailed}
        />
      ) : (
        ''
      )}
    </>
  )
}
