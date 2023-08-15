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
import Alert from '@/components/common/alert'
import Checkbox from '@/components/common/checkBox'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Order() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  // WAYZ 47-112
  const [user, setUser] = useState('')
  const [invalidFields, setInvalidFields] = useState([])
  const [check, setCheck] = useState(true)
  // for 訂單資料
  const { cartData, setCartData, getCartData } = useContext(CartDataContext)

  const [coupon, setCoupon] = useState(0)
  const [couponId, setCouponId] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('coupon')) {
      const value = JSON.parse(localStorage.getItem('coupon')).value
      const id = JSON.parse(localStorage.getItem('coupon')).id
      setCoupon(value)
      setCouponId(id)
    }
  }, [router.query])

  // 小計
  const total = cartData?.reduce((result, v) => {
    return result + v.product_price * v.quantity
  }, -coupon)
  const [customerData, setCustomerData] = useState({
    customer_name: user.member_name,

    customer_phone: user.member_phone,

    customer_email: user.member_email,

    customer_address: user.member_address,

    payment: '信用卡一次付清',

    delivery: '宅配',
  })
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
      regex: /^(?=.*[\u4e00-\u9fa5])(?=.*\d)[\u4e00-\u9fa5\d]+$/,
      message: '地址請輸入中文(數字)',
    },
    member_phone: {
      required: true,
      regex: /^09\d{8}$/,
      message: '請檢查手機號碼格式',
    },
  }
  const changeUser = (e) => {
    setUser((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }))
  }
  useEffect(() => {
    setCustomerData({
      customer_name: user.member_name,

      customer_phone: user.member_phone,

      customer_email: user.member_email,

      customer_address: user.member_address,

      payment: '信用卡一次付清',

      delivery: '宅配',
    })
  }, [user])
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

  const sendOrder = () => {
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
      setIsOpen(true)
    } else {
      //Wayz 117-132

      // 驗證通過，繼續進行表單提交
      // 取得或提交表單資料
      const orderData = {
        cartData: cartData,
        customerData: customerData,
        coupon: couponId,
        total: total,
        status: '未出貨',
      }
      const auth = localStorage.getItem('auth')
      if (auth) {
        const obj = JSON.parse(auth)
        const Authorization = 'Bearer ' + obj.token
        fetch(`${process.env.API_SERVER}/shop/order`, {
          method: 'POST',
          body: JSON.stringify({ requestData: orderData }),
          headers: {
            Authorization,
            'Content-Type': 'application/json',
          },
        })
          .then((r) => r.json())
          .then((data) => {
            updateData()
            router.push('/shop/order/complete')
          })
      }
    }
  }

  // 更新購物車資料
  const updateData = () => {
    const orderData = {
      cartData: cartData,
    }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/order`, {
        method: 'PUT',
        body: JSON.stringify({ requestData: orderData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {})
    }
  }

  const handleUser = () => {
    setCheck(!check)

    if (check) {
      const auth = localStorage.getItem('auth')
      if (auth) {
        const obj = JSON.parse(auth)
        const Authorization = 'Bearer ' + obj.token
        fetch(`${process.env.API_SERVER}/member/personalinfo`, {
          headers: {
            Authorization,
          },
        })
          .then((r) => r.json())
          .then((data) => {
            console.log(data)
            setUser((old) => ({
              ...old,
              ['member_name']: data.member_name,
              ['member_phone']: data.member_phone,
              ['member_email']: data.member_account,
              ['member_address']: data.member_address,
            }))
          })
      }
    }
  }
  return (
    <Container className={`${styles.container}`}>
      {/* step */}
      <ShopStepBar path="/shop/order" />
      <div className="mt100px">
        <BuyContent data={cartData} total={total} />
      </div>
      {/* 表單 */}
      <Container className={`${styles.form} mt50px`}>
        <Title text="訂單資訊" text2="information" />
        <Row className={`${styles.checkboxContainer}`}>
          <div className={`${styles.checkbox} fs18px`}>
            <input
              type="checkbox"
              id="myCheckbox"
              className={styles.customCheckbox}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                handleUser()
              }}
            />
            <label
              htmlFor="myCheckbox"
              className={`${styles.checkbox} fwBold ps10px`}
            >
              訂單同會員資料
            </label>
          </div>
        </Row>
        <Row className={`${styles.flex_space_between}`}>
          <div className={`${styles.inputBox}`}>
            <InputBox
              type="text"
              id="member_name"
              prompt="收件人姓名"
              placeholder="姓名"
              onChange={changeUser}
              validationRules={validationRules}
              value={user.member_name}
              width={600}
              height={60}
              isError={invalidFields.includes('member_name')}
              errorMessage={getErrorForField('member_name')}
            />
          </div>
          <div className={`${styles.inputBox}`}>
            <InputBox
              type="text"
              prompt="物流方式"
              value="宅配"
              width={600}
              height={60}
              readOnly={true}
            />
          </div>
        </Row>
        <Row className={`${styles.flex_space_between}`}>
          <div className={`${styles.inputBox}`}>
            <InputBox
              type="text"
              id="member_email"
              prompt="收件人電子郵件"
              placeholder="電子郵件"
              onChange={changeUser}
              validationRules={validationRules}
              value={user.member_email}
              width={600}
              height={60}
              isError={invalidFields.includes('member_email')}
              errorMessage={getErrorForField('member_email')}
            />
          </div>
          <div className={`${styles.inputBox}`}>
            <InputBox
              type="text"
              prompt="付款方式"
              value="信用卡一次付清"
              width={600}
              height={60}
              readOnly={true}
            />
          </div>
        </Row>
        <Row className={`${styles.flex_space_between}`}>
          <div className={`${styles.inputBox}`}>
            <InputBox
              type="text"
              id="member_phone"
              prompt="收件人電話"
              placeholder="手機號碼"
              onChange={changeUser}
              validationRules={validationRules}
              value={user.member_phone}
              width={600}
              height={60}
              isError={invalidFields.includes('member_phone')}
              errorMessage={getErrorForField('member_phone')}
            />
          </div>
          <div className={`${styles.inputBox}`}>
            <InputBox
              type="text"
              id="member_address"
              prompt="收件人地址"
              placeholder="地址"
              onChange={changeUser}
              validationRules={validationRules}
              value={user.member_address}
              width={600}
              height={60}
              isError={invalidFields.includes('member_address')}
              errorMessage={getErrorForField('member_address')}
            />
          </div>
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
            }}
          />
        </Row>

        {isOpen ? (
          <Alert
            isOpen={isOpen}
            text="欄位資料格式錯誤"
            status="wrong"
            setIsOpen={setIsOpen}
          />
        ) : (
          ''
        )}
      </Container>
      <Container className={`${styles.rwdform} mt50px`}>
        <Title text="訂單資訊" text2="information" />
        <Row className={`${styles.checkboxContainer}`}>
          <div className={`${styles.checkbox} fs18px`}>
            <input
              type="checkbox"
              id="myCheckbox"
              className={styles.customCheckbox}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                handleUser()
              }}
            />
            <label
              htmlFor="myCheckbox"
              className={`${styles.checkbox} fwBold ps10px`}
            >
              訂單同會員資料
            </label>
          </div>
        </Row>
        <div className={`${styles.inputBox} mt10px`}>
          <InputBox
            type="text"
            id="member_name"
            prompt="收件人姓名"
            placeholder="姓名"
            onChange={changeUser}
            validationRules={validationRules}
            value={user.member_name}
            width={250}
            height={60}
            isError={invalidFields.includes('member_name')}
            errorMessage={getErrorForField('member_name')}
          />
        </div>
        <div className={`${styles.inputBox}`}>
          <InputBox
            type="text"
            prompt="物流方式"
            value="宅配"
            width={250}
            height={60}
            readOnly={true}
          />
        </div>
        <div className={`${styles.inputBox}`}>
          <InputBox
            type="text"
            id="member_email"
            prompt="收件人電子郵件"
            placeholder="電子郵件"
            onChange={changeUser}
            validationRules={validationRules}
            value={user.member_email}
            width={250}
            height={60}
            isError={invalidFields.includes('member_email')}
            errorMessage={getErrorForField('member_email')}
          />
        </div>
        <div className={`${styles.inputBox}`}>
          <InputBox
            type="text"
            prompt="付款方式"
            value="信用卡一次付清"
            width={250}
            height={60}
            readOnly={true}
          />
        </div>
        <div className={`${styles.inputBox}`}>
          <InputBox
            type="text"
            id="member_phone"
            prompt="收件人電話"
            placeholder="手機號碼"
            onChange={changeUser}
            validationRules={validationRules}
            value={user.member_phone}
            width={250}
            height={60}
            isError={invalidFields.includes('member_phone')}
            errorMessage={getErrorForField('member_phone')}
          />
        </div>
        <div className={`${styles.inputBox}`}>
          <InputBox
            type="text"
            id="member_address"
            prompt="收件人地址"
            placeholder="地址"
            onChange={changeUser}
            validationRules={validationRules}
            value={user.member_address}
            width={250}
            height={60}
            isError={invalidFields.includes('member_address')}
            errorMessage={getErrorForField('member_address')}
          />
        </div>

        <Row className={`${styles.button} pt15px `}>
          <Button
            text="送出訂單"
            btnColor="hot_pink"
            width=""
            height=""
            padding="15px 60px"
            fontSize="24px"
            link={() => {
              sendOrder()
            }}
          />
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
        </Row>

        {isOpen ? (
          <Alert
            isOpen={isOpen}
            text="欄位資料格式錯誤"
            status="wrong"
            setIsOpen={setIsOpen}
          />
        ) : (
          ''
        )}
      </Container>
    </Container>
  )
}
