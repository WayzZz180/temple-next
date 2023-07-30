import styles from './style.module.sass'

//hooks
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import ShopCartContentCard from '@/components/common/cards/ShopCartContentCard'
import Button from '@/components/common/button'

export default function Cart({data, setStateFromChild}) {
  const router = useRouter()

  // 購物車標題
  const title_cart = [
    { width: '16%', text: '商品圖片' },
    { width: '16.8%', text: '商品名稱' },
    { width: '11.3%', text: '單價' },
    { width: '11.1%', text: '數量' },
    { width: '17%', text: '小計' },
  ]

  // 即時更新資料的狀態
  const [state, setState] = useState(false)

//   useEffect(()=>{
    
//   })
 // for 清空購物車
 const pid_array = data?.map((v, i) => {
    return v.pid
  })

  // 清空購物車(需要pid＿array)
  const deleteFromCart = (pid_array) => {
    setState(!state) // 會從購物車刪除因此要即時更新狀態
    const deletedData = { pid: pid_array }
    fetch(`${process.env.API_SERVER}/shop/cart`, {
      method: 'DELETE',
      body: JSON.stringify({ requestData: deletedData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        getCartCount()
      })
  }
  // 小計
  const total = data?.reduce((result, v) => {
    return result + v.product_price * v.quantity
  }, 0)

  // 優惠券
  const coupon = 100


  return (
    <>
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
          <Row className="nowrap">
            <Col className={`${styles.insertInfo} mt100px fs24px`}>
              {/* 快去新增幾筆商品吧！ */}
              物即是空，空即是物
              <div className={`${styles.line} mt100px`}></div>
            </Col>
          </Row>
        ) :  (
          data?.map((v, i) => (
            <>
              <ShopCartContentCard
                key={v.pid}
                src={`/${v.image}`}
                name={`${v.product_name}`}
                price={`${v.product_price}`}
                quantity={`${Number(v.quantity)}`}
                stock_num={`${v.stock_num}`}
                pid={`${v.pid}`}
                cid={`${v.cid}`}
                setState={setState}
                state={state}
              />
            </>
          ))
        ) }
        
        {/* 明細 */}
          <Row className="nowrap">
            <Col className={`${styles.col} mt50px fs18px`}>
              <div className={`${styles.detailsContainer}`}>
                <div className={`${styles.detailsCategory}`}>
                  <span className={`${styles.details}`}>小計：</span>
                  <span className={`${styles.details}`}>${total}</span>
                </div>
                <div className={`${styles.detailsCategory}`}>
                  <span className={`${styles.details}`}>使用優惠券：</span>
                  <span className={`${styles.details}`}>-${coupon}</span>
                </div>
                <div className={`${styles.detailsCategory} mt30px`}>
                  <span className={`${styles.details}`}>合計：</span>
                  <span className={`${styles.details}`}>${total - coupon}</span>
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
                      router.push('/shop/order')
                    }
                  }}
                />
              </div>
            </Col>
          </Row>
       
    </>
  )
}
