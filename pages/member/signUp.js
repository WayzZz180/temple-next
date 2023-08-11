import React from 'react'
import Image from 'next/image'
import styles from '@/pages/member/signUp.module.sass'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

//components
import InputBox from '@/components/common/inputBox/index.js'
import MemberTitle from '@/components/common/title/memberTitle'

import Button from '@/components/common/button/index.js'
import doorGodLeft from '@/assets/doorGodLeft.svg'
import doorGodRight from '@/assets/doorGodRight.svg'

//bt

import { Container, Row, Col } from 'react-bootstrap'

export default function SignUp() {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [invalidFields, setInvalidFields] = useState([])
  // const [isError, setIsError] = useState('')

  const [errorMessage, setErrorMessage] = useState('') // Define a state variable to store the error message

  // 定義驗證規則
  const validationRules = {
    member_name: {
      required: true,
      regex: /^[\u4e00-\u9fa5]{2,10}$/,
      message: '請輸入中文姓名，最多10個字',
    },
    member_forum_name: {
      regex: /^[\u4e00-\u9fa5a-zA-Z0-9]{0,20}$/,
      message: '暱稱過長，請重新輸入',
    },
    member_account: {
      required: true,
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
    // member_carrier: {
    //   regex: /^\/[a-zA-Z0-9]{7}$/,
    //   message: '載具格式不正確，請檢查',
    // },
  }

  const changeUser = (e) => {
    setUser((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }))
  }

  // Collect all the invalid fields and set the state
  const invalidFieldsArray = Object.keys(validationRules).map((field) => {
    const rule = validationRules[field]
    // Return an object containing field and message for each invalid field
    return rule.required && (!user[field] || user[field].trim() === '')
      ? { field, message: rule.message }
      : rule.regex && !rule.regex.test(user[field])
      ? { field, message: rule.message }
      : field === 'confirm_password' && !rule.custom(user[field], user)
      ? { field, message: rule.message }
      : null
  })

  // 定義 getErrorForField 函式
  const getErrorForField = (field) => {
    const invalidFieldObj = invalidFieldsArray.find(
      (item) => item && item.field === field
    )
    return invalidFieldObj ? invalidFieldObj.message : ''
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

      if (field === 'confirm_password') {
        // 檢查 confirm_password 的自訂規則
        if (!rule.custom(user[field], user)) {
          return { field, message: rule.message }
        }
      }
    }

    return null // 代表表單通過驗證，沒有錯誤 //有回傳代表有錯誤
  }

  const doSignUp = () => {
    const validateResult = validateForm()
    if (validateResult) {
      // Collect all the invalid fields and set the state
      const invalidFieldsArray = Object.keys(validationRules).map((field) => {
        const rule = validationRules[field]
        return rule.required && (!user[field] || user[field].trim() === '')
          ? field
          : rule.regex && !rule.regex.test(user[field])
          ? field
          : field === 'confirm_password' && !rule.custom(user[field], user)
          ? field
          : null
      })
      setInvalidFields(invalidFieldsArray.filter((field) => field !== null))

      const hintModal = invalidFieldsArray.filter((field) => field !== null)

      alert('請檢查以下項目：\n' + hintModal.join('\n'))
      // alert('資料有誤，請檢查一下喔!')

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
        // 存儲後端的錯誤訊息
        if (data.error) {
          console.log(data.error)
          alert(data.error) // 顯示 email 已被使用的錯誤訊息
          setInvalidFields('member_account') //讓isError變true
          setErrorMessage(data.error)
          return // 終止後續的處理
        }

        console.log(data)

        if (data) {
          alert('註冊成功，請重新登入')
          router.push('/member/login')
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
        <Row>
          <Col>
            <MemberTitle text="加入會員" text2="SIGN UP" lineColor="green" />
          </Col>
        </Row>
        <Row className={styles.flex_space_between}>
          <Col>
            <InputBox
              prompt="姓名"
              type="text"
              id="member_name"
              placeholder="姓名"
              onChange={changeUser}
              validationRules={validationRules}
              value={user.member_name}
              width={202}
              // 判斷是否為錯誤欄位，以及是否顯示錯誤訊息
              isError={invalidFields.includes('member_name')}
              errorMessage={getErrorForField('member_name')} // 取得該欄位的錯誤訊息
            />
          </Col>
          {/* 202-15*2空白 = 202 */}
          <Col>
            <InputBox
              prompt="暱稱"
              type="text"
              id="member_forum_name"
              placeholder="暱稱"
              onChange={changeUser}
              validationRules={validationRules}
              value={user.member_forum_name}
              width={202}
              isError={invalidFields.includes('member_forum_name')}
              errorMessage={getErrorForField('member_forum_name')}
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
              // isError={invalidFields.includes('member_account')}
              // errorMessage={getErrorForField('member_account')}
              isError={invalidFields.includes('member_account')}
              errorMessage={getErrorForField('member_account') || errorMessage} // 顯示來自後端的錯誤訊息
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
              isError={invalidFields.includes('member_password')}
              errorMessage={getErrorForField('member_password')}
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
              isError={invalidFields.includes('confirm_password')}
              errorMessage={getErrorForField('confirm_password')}
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
              isError={invalidFields.includes('member_birthday')}
              errorMessage={getErrorForField('member_birthday')}
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
              isError={invalidFields.includes('member_address')}
              errorMessage={getErrorForField('member_address')}
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
            <Button
              text="加入"
              btnColor="black"
              width={487}
              link={() => {
                doSignUp()
              }}
            />
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
