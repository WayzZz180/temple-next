import styles from './style.module.sass'
import Image from 'next/image'
import Head from 'next/head'

//hooks
import { useEffect, useState, useContext, Fragment } from 'react'
import { useRouter } from 'next/router'
import CartCountContext from '@/contexts/CartCountContext'
import CartDataContext from '@/contexts/CartDataContext'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import ShopCartContentCard from '@/components/common/cards/ShopCartContentCard'
import Button from '@/components/common/button'
import NoData from '../category/noData'

// svg
import Coupon from '@/assets/coupon.svg'

export default function Cart({ data = [] }) {
  const router = useRouter()
  const { cartCount, setCartCount, getCartCount } = useContext(CartCountContext)
  const { cartData, setCartData, getCartData } = useContext(CartDataContext)
  const [show, setShow] = useState(false)
  const [choose, setChoose] = useState(false)
  // 購物車標題
  const title_cart = [
    { width: '16%', text: '商品圖片' },
    { width: '16.8%', text: '商品名稱' },
    { width: '11.3%', text: '單價' },
    { width: '11.1%', text: '數量' },
    { width: '17%', text: '小計' },
  ]

  // for 清空購物車
  const pid_array = data?.map((v, i) => {
    return v.pid
  })

  // 清空購物車(需要pid＿array)
  const deleteFromCart = (pid_array) => {
    const deletedData = { pid: pid_array }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/cart`, {
        method: 'DELETE',
        body: JSON.stringify({ requestData: deletedData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          getCartData()
          getCartCount()
        })
    }
  }

  // 優惠券
  const [coupon, setCoupon] = useState([])
  const [couponId, setCouponId] = useState()
  const [couponValue, setCouponValue] = useState('無')

  const total = data?.reduce((result, v) => {
    return result + v.product_price * v.quantity
  }, 0)

  useEffect(() => {
    if (localStorage.getItem('coupon')) {
      localStorage.removeItem('coupon')
    }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/coupons`, {
        headers: {
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setCoupon(data)
        })
    }
  }, [router.query])

  // 如果之前的優惠券value>total改成可用的最大值
  useEffect(() => {
    const newCoupon = coupon.filter((v, i) => total > v.conditions)
    if (newCoupon.length != 0 && choose) {
      setCouponId(newCoupon[0]?.coupon_status_id)
      setCouponValue(newCoupon[0]?.coupon_value)
    }
  }, [total])

  // set localStorage
  const setLocal = () => {
    if (couponValue != '無') {
      const data = { id: couponId, value: couponValue }
      localStorage.setItem('coupon', JSON.stringify(data))
    }
  }

  return (
    <Container
      onClick={() => {
        !couponId && setChoose(false)
        setShow(false)
      }}
    >
      <Head>
        <title>購物車</title>
      </Head>
      {/* 標題列 */}
      <Row className="nowrap">
        <Col className={`${styles.container} `}>
          {title_cart.map((v, i) => {
            return (
              <span
                key={i}
                className={`${styles.title} ${
                  i === 0 ? 'ps65px' : ''
                } fs20px p15px`}
                style={{ width: v.width }}
              >
                {v.text}
              </span>
            )
          })}

          <button
            className={`${styles.button} fwBold fs18px`}
            onClick={() => {
              deleteFromCart(pid_array)
            }}
          >
            清空購物車
          </button>
        </Col>
      </Row>
      {/* 購物車內容 */}
      {data?.length === 0 ? (
        <NoData />
      ) : (
        data?.map((v, i) => (
          <ShopCartContentCard
            key={v.pid}
            src={`/${v.image}`}
            name={`${v.product_name}`}
            price={`${v.product_price}`}
            quantity={`${Number(v.quantity)}`}
            stock_num={`${v.stock_num}`}
            pid={`${v.pid}`}
            cid={`${v.cid}`}
          />
        ))
      )}

      {/* 明細 */}
      <Row className="nowrap">
        <Col className={`${styles.col} mt50px fs18px`}>
          <div className={`${styles.detailsContainer}`}>
            <div className={`${styles.detailsCategory}`}>
              <span className={`${styles.details}`}>小計：</span>
              <span className={`${styles.details}`}>${total}</span>
            </div>
            <div className={`${styles.detailsCategory}`}>
              <span className={`${styles.details} pt10px`}>使用優惠券：</span>
              <span className={`${styles.details}`}>
                {/* -${coupon} */}
                <ul className={`${styles.drop_down_menu}`}>
                  <li className={`mt10px`}>
                    <div
                      role="presentation"
                      className={`${styles.titleContainer}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setChoose(true)
                        setShow(true)
                      }}
                    >
                      {/* 使用的coupon */}
                      <div className={`fs18px`}>
                        {couponValue != '無' ? '-$' : ''}
                        {couponValue}
                      </div>
                    </div>
                    {/* 展開的內容 */}
                    <ul style={{ display: show ? 'block' : 'none' }}>
                      {coupon?.map((v, i) => {
                        if (total > v.conditions)
                          return (
                            <li
                              role="presentation"
                              key={v.coupon_status_id}
                              onClick={() => {
                                if (v.coupon_status_id === couponId) {
                                  setCouponId()
                                  setCouponValue('無')
                                  setChoose(false)
                                } else {
                                  setCouponId(v.coupon_status_id)
                                  setCouponValue(v.coupon_value)
                                }
                                setShow(false)
                              }}
                            >
                              <div
                                className={`${styles.link} fs16px  ${
                                  v.coupon_status_id === couponId
                                    ? styles.choose
                                    : ''
                                }`}
                              >
                                <span className={`${styles.couponTitle}`}>
                                  <div className="mt5px me5px">
                                    <Image
                                      src={Coupon}
                                      width={30}
                                      alt="coupon"
                                    />
                                  </div>
                                  <div> {v.coupon_name}</div>
                                </span>
                                <span className={`${styles.expiration_date}`}>
                                  有效期限至{v.expiration_date.slice(0, 10)}
                                </span>
                              </div>
                            </li>
                          )
                      })}
                    </ul>
                  </li>
                </ul>
              </span>
            </div>
            <div className={`${styles.detailsCategory} mt30px`}>
              <span className={`${styles.details}`}>合計：</span>
              <span className={`${styles.details}`}>
                ${total - (couponValue === '無' ? 0 : couponValue)}
              </span>
            </div>
          </div>
          <div className={`${styles.detailsButton} mt30px`}>
            <Button
              text="前往結帳"
              btnColor="hot_pink"
              width="100%"
              height=""
              padding="15px 60px"
              fontSize="18px"
              link={() => {
                if (data?.length != 0) {
                  setLocal()
                  router.push('/shop/order')
                }
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
