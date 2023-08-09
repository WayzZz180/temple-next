import styles from './order.module.sass'

// hooks
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import CartDataContext from '@/contexts/CartDataContext'

// components
import ShopStepBar from '@/components/common/bar/ShopStepBar'
import InputBox from '@/components/common/inputBox'
import Button from '@/components/common/button'
import Title from '@/components/common/title'
import BuyContent from '@/components/common/orderDetails/buyContent'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Order() {
  const router = useRouter()

  // for 訂單資料
  const { cartData, setCartData, getCartData } = useContext(CartDataContext)
  // 小計
  const total = cartData?.reduce((result, v) => {
    return result + v.product_price * v.quantity
  }, 0)

  const [customerData, setCustomerData] = useState({
    customer_name: '沈子威',

    customer_phone: '0912345678',

    customer_email: 'wayz180@gmail.com',

    customer_address: '南京復興民生社區',

    payment: '現金',

    delivery: '超商取貨',

    invoice: '/CHILD1215',

    coupon: null,
  })

  // WAYZ 47-112
  const [user, setUser] = useState('')
  const [invalidFields, setInvalidFields] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const validationRules = {
    member_name: {
      required: true,
      regex: /^[\u4e00-\u9fa5]{2,10}$/,
      message: '請輸入中文姓名，最多10個字',
    },

    member_email: {
      required: true,
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
      message: '請輸入有效的Email格式',
    },
    member_address: {
      required: true,
      regex: /^[\u4e00-\u9fa5\d]+$/,
      message: '地址請輸入中文(和數字)',
    },
    member_phone: {
      required: true,
      regex: /^09\d{8}$/,
      message: '請檢查手機號碼格式',
    },
    member_carrier: {
      regex: /^\/[a-zA-Z0-9]{7}$/,
      message: '載具格式不正確，請檢查',
    },
  }
  const changeUser = (e) => {
    setUser((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }))
  }
  const invalidFieldsArray = Object.keys(validationRules).map((field) => {
    const rule = validationRules[field]
    return rule.required && (!user[field] || user[field].trim() === '')
      ? { field, message: rule.message }
      : rule.regex && !rule.regex.test(user[field])
      ? { field, message: rule.message }
      : null
  })
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
    }
    return null
  }
  // WAYZ 47-112

  // customer_name, customer_phone, customer_address, payment, delivery, coupon,
  const sendOrder = () => {
    //Wayz 116-132
    const validateResult = validateForm()
    if (validateResult) {
      const invalidFieldsArray = Object.keys(validationRules).map((field) => {
        const rule = validationRules[field]
        return rule.required && (!user[field] || user[field].trim() === '')
          ? field
          : rule.regex && !rule.regex.test(user[field])
          ? field
          : null
      })
      setInvalidFields(invalidFieldsArray.filter((field) => field !== null))

      alert('請檢查以下項目：\n' + invalidFieldsArray.join('\n'))
      return
    }
    //Wayz 117-132

    // 驗證通過，繼續進行表單提交
    // 取得或提交表單資料
    const orderData = {
      cartData: cartData,
      customerData: customerData,
      total: total,
      status: '未出貨',
    }
    fetch(`${process.env.API_SERVER}/shop/order`, {
      method: 'POST',
      body: JSON.stringify({ requestData: orderData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {})
  }

  return (
    <Container className={`${styles.container}`}>
      {/* step */}
      <ShopStepBar path="/shop/order" />
      <div className="mt100px">
        <BuyContent data={cartData} />
      </div>
      {/* 表單 */}
      <Container className="mt50px">
        <Title text="訂單資訊" text2="information" />
        <Row className={`${styles.flex_space_between}`}>
          <InputBox
            type="text"
            id="member_name"
            prompt="收件人姓名"
            placeholder="沈子威"
            onChange={changeUser}
            validationRules={validationRules}
            value={user.member_name}
            width={600}
            height={60}
            isError={invalidFields.includes('member_name')}
            errorMessage={getErrorForField('member_name')}
          />
          <InputBox
            type="text"
            prompt="物流方式"
            placeholder="Hannah"
            onChange
            width={600}
            height={60}
          />
        </Row>
        <Row className={`${styles.flex_space_between}`}>
          <InputBox
            type="text"
            id="member_email"
            prompt="收件人電子郵件"
            placeholder="wayz180@gmail.com"
            onChange={changeUser}
            validationRules={validationRules}
            value={user.member_email}
            width={600}
            height={60}
            isError={invalidFields.includes('member_email')}
            errorMessage={getErrorForField('member_email')}
          />
          <InputBox
            type="text"
            prompt="付款方式"
            placeholder="現金"
            onChange
            width={600}
            height={60}
          />
        </Row>
        <Row className={`${styles.flex_space_between}`}>
          <InputBox
            type="text"
            id="member_phone"
            prompt="收件人電話"
            placeholder="組長好帥!"
            onChange={changeUser}
            validationRules={validationRules}
            value={user.member_phone}
            width={600}
            height={60}
            isError={invalidFields.includes('member_phone')}
            errorMessage={getErrorForField('member_phone')}
          />
          <InputBox
            type="text"
            id="member_address"
            prompt="收件人地址"
            placeholder="無家日ToT"
            onChange={changeUser}
            validationRules={validationRules}
            value={user.member_address}
            width={600}
            height={60}
            isError={invalidFields.includes('member_address')}
            errorMessage={getErrorForField('member_address')}
          />
        </Row>

        <Row className={`${styles.flex_space_between} pt80px `}>
          <Button
            text="返回購物車"
            btnColor="brown"
            width=""
            height=""
            padding="15px 60px"
            fontSize="24px"
            link={() => {
              router.push('/shop/cart')
            }}
          />
          <Button
            text="送出訂單"
            btnColor="hot_pink"
            width=""
            height=""
            padding="15px 60px"
            fontSize="24px"
            link={() => {
              sendOrder()
              router.push('/shop/order/complete')
            }}
          />
        </Row>
      </Container>
    </Container>
  )
}
