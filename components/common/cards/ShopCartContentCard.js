import styles from './ShopCartContentCard.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import variables from '@/styles/_variables.module.sass'

// hooks
import { useState, useContext } from 'react'
import CartCountContext from '@/contexts/CartCountContext'
import CartDataContext from '@/contexts/CartDataContext'

// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import NoButton from '@/components/common/button/noButton'
import Loading from '@/components/common/loading'

// svg
import add from '@/assets/add.svg'
import minus from '@/assets/minus.svg'
import TitleData from '@/components/mydata/productsTitleData'
export default function ShopCartContentCard({
  src = '/img/cookies/chips/chips (2).png',
  name = '樂事洋芋片派對分享包-經典原味(119g/包)',
  price = 60,
  quantity = 3,
  stock_num = 30,
  pid = 2,
  cid = 1,
}) {
  if (isNaN(quantity)) return <Loading />

  // for navbar購物車數量
  const { cartCount, setCartCount, getCartCount } = useContext(CartCountContext)

  const { cartData, setCartData, getCartData } = useContext(CartDataContext)
  // for 更新數量
  const [count, setCount] = useState(Number(quantity))
  // 商品類別 for url
  const category = TitleData[cid].id

  // 更新數量(需要數量和pid)
  const updateCount = (count, pid) => {
    const updatedData = { count: count, pid: pid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/cart`, {
        method: 'PUT',
        body: JSON.stringify({ requestData: updatedData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          getCartData()
        })
    }
  }

  // 刪除個別商品(需要pid)
  const deleteFromCart = (pid) => {
    const deletedData = { pid: pid }
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

  // 加入下次再買(需要pid)
  const addToWannaBuy = (pid) => {
    const addData = { pid: pid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/wannaBuy`, {
        method: 'POST',
        body: JSON.stringify({ requestData: addData }),
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

  // 瀏覽量加一
  const browse = () => {
    fetch(`${process.env.API_SERVER}/shop/${category}/${pid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {})
  }

  return (
    <>
      <Row className={`${styles.row} nowrap fwBold`}>
        <Col>
          <div className={`${styles.container} pt30px pb30px fs18px`}>
            {/* 商品圖 */}
            <div
              role="presentation"
              className={`${styles.image}`}
              onClick={() => {
                browse()
              }}
            >
              <Link href={`/shop/${category}/${pid}`}>
                <Image src={src} alt="product" width={200} height={200} />
              </Link>
            </div>
            {/* 商品名稱 */}
            <div className={`${styles.name}`}>{name}</div>
            {/* 商品價格 */}
            <div className={`${styles.price}`}>${price}</div>
            {/* 選擇數量 */}
            <div className={`${styles.quantity}`}>
              <div className={`${styles.add} fs24px `}>
                {/* － */}
                <Image
                  src={minus}
                  width={30}
                  alt="minus"
                  className={`${styles.button}`}
                  style={{
                    cursor: stock_num !== 0 ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (count <= 1) {
                      // deleteFromCart(pid)
                      setCount(1)
                    } else {
                      setCount(count - 1)
                      updateCount(count - 1, pid)
                    }
                  }}
                />
                {/* 數量 */}
                <input
                  type="text"
                  inputmode="numeric"
                  value={stock_num ? count : 0}
                  className={`${styles.addValue} fs16px `}
                  onChange={(e) => {
                    if (!isNaN(e.target.value) && e.target.value != 0) {
                      if (Number(e.target.value) > stock_num) {
                        setCount(Number(stock_num))
                      } else {
                        setCount(Number(e.target.value))
                      }
                    } else {
                      setCount(Number(count))
                    }
                  }}
                  onBlur={() => {
                    updateCount(count, pid)
                  }}
                  readOnly={stock_num === 0}
                ></input>
                {/* + */}
                <Image
                  src={add}
                  width={30}
                  alt="add"
                  className={`${styles.button}`}
                  style={{
                    cursor: stock_num !== 0 ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (count >= stock_num) {
                      setCount(stock_num)
                    } else {
                      setCount(count + 1)
                      updateCount(count + 1, pid)
                    }
                  }}
                />
              </div>
              {/* 剩餘庫存 */}
              <div
                className={`${styles.stock} fwLighter fs14px`}
                style={{
                  color: stock_num <= 10 ? variables['hot_pink'] : '',
                  opacity: stock_num <= 10 ? 1 : 0,
                }}
              >
                剩餘：{stock_num} /件
              </div>
            </div>
            {/* 小計 */}
            <div className={`${styles.total}`}>${price * count}</div>
            {/* 刪除 */}
            <div className={`${styles.wannaBuy}`}>
              <NoButton
                text="下次再買"
                btnColor="brown"
                width="150px"
                padding="15px 0px"
                fontSize="16px"
                link={() => {
                  addToWannaBuy(pid)
                }}
              />
            </div>
            <div className={`${styles.delete}`}>
              <NoButton
                text="刪除"
                btnColor="brown"
                width="100px"
                padding="15px 0px"
                fontSize="16px"
                link={() => {
                  deleteFromCart(pid)
                }}
              />
            </div>
          </div>
          {/* 分隔線 */}
          <div className={`${styles.line}`}></div>
        </Col>
      </Row>

      <Row className={`${styles.rwdContainer}`}>
        <Col className={`${styles.rwdCol} pt50px pb50px`}>
          {/* 商品圖 */}
          <div
            role="presentation"
            className={`${styles.image}`}
            onClick={() => {
              browse()
            }}
          >
            <Link href={`/shop/${category}/${pid}`}>
              <Image src={src} alt="product" width={100} height={100} />
            </Link>
          </div>
          <div className={`${styles.rwdName}`}>
            {/* 商品名稱 */}
            <div className={`${styles.name} fwBold`}>
              <div>{name}</div>
            </div>
            {/* 商品價格 */}
            <div className={`${styles.price} fwBold`}>${price}</div>
          </div>
          {/* 選擇數量 */}
          <div className={`${styles.quantity}`}>
            <div className={`${styles.add} fs24px `}>
              {/* － */}
              <Image
                src={minus}
                width={15}
                alt="minus"
                className={`${styles.button}`}
                style={{
                  cursor: stock_num !== 0 ? 'pointer' : 'default',
                }}
                onClick={() => {
                  if (count <= 1) {
                    // deleteFromCart(pid)
                    setCount(1)
                  } else {
                    setCount(count - 1)
                    updateCount(count - 1, pid)
                  }
                }}
              />
              {/* 數量 */}
              <input
                type="text"
                inputmode="numeric"
                value={stock_num ? count : 0}
                className={`${styles.addValue} fs16px `}
                onChange={(e) => {
                  if (!isNaN(e.target.value) && e.target.value != 0) {
                    if (Number(e.target.value) > stock_num) {
                      setCount(Number(stock_num))
                    } else {
                      setCount(Number(e.target.value))
                    }
                  } else {
                    setCount(Number(count))
                  }
                }}
                onBlur={() => {
                  updateCount(count, pid)
                }}
                readOnly={stock_num === 0}
              ></input>
              {/* + */}
              <Image
                src={add}
                width={15}
                alt="add"
                className={`${styles.button}`}
                style={{
                  cursor: stock_num !== 0 ? 'pointer' : 'default',
                }}
                onClick={() => {
                  if (count >= stock_num) {
                    setCount(stock_num)
                  } else {
                    setCount(count + 1)
                    updateCount(count + 1, pid)
                  }
                }}
              />
            </div>
            {/* 剩餘庫存 */}
            <div
              className={`${styles.stock} fwLighter fs14px`}
              style={{
                color: stock_num <= 10 ? variables['hot_pink'] : '',
                opacity: stock_num <= 10 ? 1 : 0,
              }}
            >
              剩餘：{stock_num} /件
            </div>
          </div>
          <div
            role="presentation"
            onClick={() => {
              deleteFromCart(pid)
            }}
            className={`${styles.rwdDelete}`}
          >
            X
          </div>
          {/* <div
            role="presentation"
            onClick={() => {
              addToWannaBuy(pid)
            }}
            className={`${styles.rwdWannaBuy}`}
          > */}
          <button
            type="button"
            onClick={() => {
              addToWannaBuy(pid)
            }}
            className={`${styles.rwdWannaBuy}`}
          >
            下次再買
          </button>
          {/* </div> */}
        </Col>
      </Row>
    </>
  )
}
