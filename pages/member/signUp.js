import React from 'react'
import Image from 'next/image'
import styles from '@/pages/member/signUp.module.sass'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import doorGodLeft from '@/assets/doorGodLeft.svg'
import doorGodRight from '@/assets/doorGodRight.svg'

import { Container, Row, Col } from 'react-bootstrap'

export default function SignUp() {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [invalidField, setInvalidField] = useState('')
  const [isError, setIsError] = useState(false) // 是否有錯誤
  const [error, setError] = useState(null) // Define a state variable to store the error message

  const changeUser = (e) => {
    setUser((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }))
    setInvalidField('') // 清除之前的驗證失敗狀態
  }
  // 定義驗證規則
  const validationRules = {
    member_name: {
      regex: /^[\u4e00-\u9fa5]{1,10}$/,
      message: '請輸入中文，最多10個字',
    },
    member_forum_name: {
      required: false,
      regex: /^[\u4e00-\u9fa5]{1,12}$|^[a-zA-Z]{1,24}$/,
      message: '暱稱過長，請重新輸入',
    },
    member_account: {
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
      message: '請輸入有效的Email格式',
    },
    member_password: {
      required: true,
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/,
      message: '密碼必須包含一個大寫、一個小寫英文字母和數字，8~20碼',
    },
    confirm_password: {
      required: true,
      custom: (value, user) => value === user.member_password,
      message: '確認密碼與密碼不相符',
    },
    member_birthday: {
      required: true,
      message: '請選擇生日',
    },
    member_address: {
      required: true,
      regex: /^[\u4e00-\u9fa5\d]+$/,
      message: '地址請輸入中文(和數字)',
    },
  }
  const validateForm = () => {
    for (const field in validationRules) {
      const rule = validationRules[field]

      if (rule.required && (!user[field] || user[field].trim() === '')) {
        return { field, message: rule.message }
      }

      if (rule.regex && !rule.regex.test(user[field])) {
        return { field, message: rule.message }
      }

      if (rule.custom && !rule.custom(user[field], user)) {
        // Check custom rule for confirm_password
        return { field, message: rule.message }
      }
    }

    return null // 若表單通過驗證，沒有錯誤
  }

  const doSignUp = (e) => {
    e.preventDefault()
    setIsError(false) // 在驗證之前重置 isError 狀態
    setError(null) // Reset the error state before validation

    const validateResult = validateForm()
    if (validateResult) {
      // 驗證失敗，處理錯誤
      const { field, message } = validateResult // Destructure the field and message from validateResult
      setError(message) // Set the error message in the state
      alert(message)
      setInvalidField(field)
      setIsError(true) // 設置 isError 狀態為 true 以套用錯誤樣式
      return
    }

    // 驗證通過，繼續進行表單提交
    // 取得或提交表單資料

    fetch(process.env.API_SERVER + '/member/signUp', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)

        if (data) {
          alert('註冊成功，請重新登入')
          // router.push('/member/login');
        }
      })
      .catch((error) => {
        alert('資料有誤，請重新填寫', error)
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
        <form onSubmit={doSignUp}>
          <Row>
            <Col>
              <Title text="加入會員" text2="SIGN UP" lineColor="green" />
            </Col>
          </Row>
          <Row className={styles.flex_space_between}>
            <Col>
              <InputBox
                type="text"
                id="member_name"
                placeholder="姓名"
                onChange={changeUser}
                validationRules={validationRules}
                value={user.member_name}
                width={202}
                isError={invalidField === 'member_name'} // 根據 invalidField 設置 isError 屬性
                errorMessage={error} // Pass the error message as a prop
              />
            </Col>
            {/* 202-15*2空白 = 202 */}
            <Col>
              <InputBox
                type="text"
                id="member_forum_name"
                placeholder="暱稱"
                onChange={changeUser}
                validationRules={validationRules}
                value={user.member_forum_name}
                width={202}
                isError={invalidField === 'member_forum_name'}
                errorMessage={error}
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
                onChange={changeUser}
                validationRules={validationRules}
                value={user.member_account}
                isError={invalidField === 'member_account'}
                errorMessage={error}
              />
            </Col>
          </Row>
          <Row className={styles.flex_centre}>
            <Col>
              <InputBox
                type="text"
                id="member_password"
                placeholder="密碼"
                onChange={changeUser}
                validationRules={validationRules}
                value={user.member_password}
                isError={invalidField === 'member_password'}
                errorMessage={error}
              />
            </Col>
          </Row>
          <Row className={styles.flex_centre}>
            <Col>
              <InputBox
                type="text"
                id="confirm_password"
                placeholder="確認密碼"
                onChange={changeUser}
                validationRules={validationRules}
                value={user.confirm_password}
                isError={invalidField === 'confirm_password'}
                errorMessage={error}
              />
            </Col>
          </Row>
          <Row className={styles.flex_centre}>
            <Col>
              <InputBox
                type="date"
                id="member_birthday"
                placeholder="出生年月日 "
                onChange={changeUser}
                validationRules={validationRules}
                value={user.member_birthday}
                isError={invalidField === 'member_birthday'}
                errorMessage={error}
              />
            </Col>
            {/* Q3 */}
          </Row>
          <Row className={styles.flex_centre}>
            <Col>
              <InputBox
                type="text"
                id="member_address"
                placeholder="現居地址 "
                onChange={changeUser}
                validationRules={validationRules}
                value={user.member_address}
                isError={invalidField === 'member_address'}
                errorMessage={error}
              />
            </Col>
          </Row>
          <Row className={styles.flex_container}>
            <Col>
              <div>
                {/* <div style={{ letterSpacing: '4.1px' }}> */}
                {/* Q4 */}
                如建立帳號，即同意錦囊廟祭的{' '}
                <Link href="#" className="link">
                  隱私權政策
                </Link>
                和
                <Link href="#" className="link">
                  使用條款
                </Link>
              </div>
            </Col>
          </Row>
          <Row className={styles.flex_centre}>
            <Col>
              <Button text="加入" btnColor="black" width={487} />
            </Col>
          </Row>
          <Row className={styles.flex_centre}>
            <Col>
              <div>
                已經是會員了嗎?
                <Link href="#" className="link">
                  登入
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
