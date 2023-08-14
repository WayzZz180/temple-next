import Head from 'next/head'
import styles from './personalinfo.module.sass'
import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext, useRef } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'

// components
import InputBox from '@/components/common/inputBox/index.js'
import MemberTitle from '@/components/common/title/memberTitle'

import Button from '@/components/common/button/index.js'
import NoButton from '@/components/common/button/noButton.js'
import MemberNavbar from '@/components/common/memberNavbar/index.js'
import ProfilePhoto from '@/components/common/profilePhoto'
import Alert from '@/components/common/alert'
import data from '@/components/mydata/memberNavbarData.js'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Personalinfo() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const router = useRouter()
  const { id } = router.query
  const [user, setUser] = useState('')
  const [invalidFields, setInvalidFields] = useState([])
  const [errorMessage, setErrorMessage] = useState('') // Define a state variable to store the error message
  const [getImg, setGetImg] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false) // 跟蹤 modal 是否打開
  const [cancelEditing, setCancelEditing] = useState(false)
  const dayjs = require('dayjs')
  const [isIncorrect, setIsIncorrect] = useState(false)
  const [isUsed, setIsUsed] = useState(false)
  const [isUnChanged, setIsUnChanged] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)

  //拿token
  useEffect(() => {
    console.log(`personalinfo頁面 有沒有auth.token?1`, auth.token)
    setCancelEditing(false)
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/personalinfo', {
        headers: {
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          // console.log(`personalinfo頁面 有沒有auth.token?2`, auth.token, data)
          // console.log(data)
          // 進入頁面把資料抓出來
          setUser(data)
        })
    } else {
      // Handle the case when auth.token is not available or user is not logged in
      // You can add any additional logic here
      // console.log('用戶尚未註冊')
    }
  }, [auth.token, cancelEditing])

  // Convert the date format to "YYYY-MM-DD"
  useEffect(() => {
    if (user.member_birthday) {
      const formattedBirthday = dayjs(user.member_birthday).format('YYYY-MM-DD')
      setUser((prevUser) => ({
        ...prevUser,
        member_birthday: formattedBirthday,
      }))
    }
  }, [user.member_birthday])

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
    // member_password: {
    //   required: true,
    //   // regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/,
    //   message: '密碼必須包含一個大寫、一個小寫英文字母和數字，8~20碼',
    // },
    member_birthday: {
      required: true,
      message: '請選擇生日',
    },
    member_phone: {
      regex: /^(09\d{8})?$/,
      message: '請檢查手機號碼格式',
    },
    member_address: {
      required: true,
      regex: /^(?=.*[\u4e00-\u9fa5])(?=.*\d)[\u4e00-\u9fa5\d]+$/,
      message: '地址請輸入中文(和數字)',
    },
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
      : // : field === 'confirm_password' && !rule.custom(user[field], user)
        // ? { field, message: rule.message }
        null
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

      // if (field === 'confirm_password') {
      //   // 檢查 confirm_password 的自訂規則
      //   if (!rule.custom(user[field], user)) {
      //     return { field, message: rule.message }
      //   }
      // }
    }

    return null // 代表表單通過驗證，沒有錯誤 //有回傳代表有錯誤
  }

  // 驗證通過，繼續進行表單提交
  // 取得或提交表單資料

  // 定義 fetchJWT 函式
  const fetchJWT = async () => {
    // 在這裡執行取得最新 JWT 的相關程式碼
  }

  const edit = async () => {
    const validateResult = validateForm()
    if (validateResult) {
      // Collect all the invalid fields and set the state
      const invalidFieldsArray = Object.keys(validationRules).map((field) => {
        const rule = validationRules[field]
        return rule.required && (!user[field] || user[field].trim() === '')
          ? field
          : rule.regex && !rule.regex.test(user[field])
          ? field
          : // : field === 'confirm_password' && !rule.custom(user[field], user)
            // ? field
            null
      })
      setInvalidFields(invalidFieldsArray.filter((field) => field !== null))

      const hintModal = invalidFieldsArray.filter((field) => field !== null)

      setIsIncorrect(true)
      return
    }

    // 驗證通過，繼續進行表單提交
    // 取得或提交表單資料
    try {
      const response = await fetch(
        process.env.API_SERVER + '/member/personalinfo',
        {
          method: 'PUT',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.token, // 在 PUT 請求中添加 JWT
          },
        }
      )
      const data = await response.json()

      // // 如果後端出錯，存儲後端的錯誤訊息
      // if (data.error) {
      //   // console.log('失敗:', data.error)
      //   setErrorMessage(data.error)

      //   if (data.error === '該 email 已被使用。') {
      //     setInvalidFields(['member_account'])
      //   } else if (data.error === '該手機號碼已被使用。') {
      //     setInvalidFields(['member_phone'])
      //   }

      //   alert(data.error)
      //   return // 終止後續的處理
      // }

      // 如果後端出錯，存儲後端的錯誤訊息
      if (data.error) {
        console.log('失敗:', data.error)
        setErrorMessage(data.error)
        setIsUsed(true)
        if (data.part === 'email') {
          setInvalidFields(['member_account'])
        } else if (data.part === 'phone') {
          setInvalidFields(['member_phone'])
        }
        console.log(invalidFields)

        return // 終止後續的處理
      }

      // 如果後端過關
      console.log('成功:', data)

      if (data.message === '資料沒有變動') {
        // 資料沒有變動
        setIsUnChanged(true)
        setInvalidFields([])
        setErrorMessage([])
      } else if (data.success) {
        // 資料更新成功且有變動
        await fetchJWT()
        setIsSuccessful(true)
        setInvalidFields([])
        setErrorMessage([])
        // window.location.reload();
      }
    } catch (error) {
      alert('資料有誤，請確認修改欄位' + error)
    }
  }

  const handleCancelEditing = () => {
    // setUser({}) // 將使用者狀態重設為空，從而取消任何變更
    setInvalidFields([]) // 清除無效的欄位陣列
    setErrorMessage('') // 清除錯誤訊息
    setCancelEditing(true)
  }

  return (
    <div className={styles.flex}>
      <Head>
        <title>{data[0]?.text}</title>
      </Head>
      <Container>
        <ProfilePhoto />
        <Row>
          <Col>
            <MemberTitle
              text="變更資料"
              text2="PERSONAL INFO"
              lineColor="green"
            />
          </Col>
        </Row>

        <MemberNavbar />

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
              width={470}
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
              width={470}
              isError={invalidFields.includes('member_forum_name')}
              errorMessage={getErrorForField('member_forum_name')}
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              prompt="電子郵件地址"
              id="member_account"
              type="text"
              placeholder="電子郵件地址"
              onChange={changeUser}
              validationRules={validationRules}
              value={user.member_account}
              width={1005}
              isError={invalidFields.includes('member_account')}
              errorMessage={getErrorForField('member_account') || errorMessage} // 顯示來自後端的錯誤訊息
            />
          </Col>
        </Row>

        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              prompt="出生年月日"
              type="date"
              id="member_birthday"
              placeholder="出生年月日 "
              onChange={changeUser}
              validationRules={validationRules}
              value={user.member_birthday}
              width={1005}
              isError={invalidFields.includes('member_birthday')}
              errorMessage={getErrorForField('member_birthday')}
            />
          </Col>
          {/* Q3 */}
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              prompt="手機號碼"
              id="member_phone"
              type="text"
              placeholder="手機號碼 "
              onChange={changeUser}
              validationRules={validationRules}
              value={user.member_phone}
              width={1005}
              isError={invalidFields.includes('member_phone')}
              errorMessage={getErrorForField('member_phone') || errorMessage}
              // 顯示來自後端的錯誤訊息
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              prompt="現居地址"
              type="text"
              id="member_address"
              placeholder="現居地址 "
              onChange={changeUser}
              validationRules={validationRules}
              value={user.member_address}
              width={1005}
              isError={invalidFields.includes('member_address')}
              errorMessage={getErrorForField('member_address')}
            />
          </Col>
        </Row>

        <Row className={`${styles.flex_end} mt50px`}>
          <Col className="me30px">
            {/* <form onSubmit={edit}> */}
            <NoButton
              text="取消變更"
              btnColor="black"
              width={229}
              link={() => {
                handleCancelEditing()
              }}
            />
            {/* </form> */}
          </Col>
          <Col>
            <Button
              text="確定儲存"
              btnColor="black"
              width={229}
              link={() => {
                edit()
              }}
            />
          </Col>
        </Row>
        {isIncorrect ? (
          <Alert
            isOpen={true}
            text={'請檢查輸入資料是否正確'}
            status="false"
            setIsOpen={setIsIncorrect}
          />
        ) : (
          ''
        )}
        {isUsed ? (
          <Alert
            isOpen={true}
            text={errorMessage}
            status="false"
            setIsOpen={setIsUsed}
          />
        ) : (
          ''
        )}
        {isUnChanged ? (
          <Alert
            isOpen={true}
            text={'資料沒有變動'}
            status="correct"
            setIsOpen={setIsUnChanged}
          />
        ) : (
          ''
        )}
        {isSuccessful ? (
          <Alert
            isOpen={true}
            text={'修改成功'}
            status="correct"
            setIsOpen={setIsSuccessful}
          />
        ) : (
          ''
        )}
      </Container>
    </div>
  )
}
