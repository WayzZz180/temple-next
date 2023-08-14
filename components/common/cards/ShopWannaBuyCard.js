import styles from './ShopWannaBuyCard.module.sass'
import Image from 'next/image'
import Link from 'next/link'

// hooks
import { useState, useEffect, useContext } from 'react'
import CartCountContext from '@/contexts/CartCountContext'
import WannaBuyDataContext from '@/contexts/WannaBuyDataContext'

// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import NoButton from '@/components/common/button/noButton'
import Alert from '../alert'

// data
import TitleData from '@/components/mydata/productsTitleData'

export default function ShopWannaBuyCard({
  src = '/img/cookies/chips/chips (2).png',
  name = '樂事洋芋片派對分享包-經典原味(119g/包)',
  price = 60,
  stock_num = 30,
  pid = 2,
  cid = 1,
  date = '2023-08-16',
}) {
  // for navbar購物車數量
  const { cartCount, setCartCount, getCartCount } = useContext(CartCountContext)

  // for 更新下次再買資料
  const { wannaBuyData, setWannaBuyData, getWannaBuyData } =
    useContext(WannaBuyDataContext)
  const [isOpen, setIsOpen] = useState(false)
  // 商品類別
  const category = TitleData[cid].id

  // 從下次再買刪除個別商品
  const deleteFromWannaBuy = (pid) => {
    const deletedData = { pid: pid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/wannaBuy`, {
        method: 'DELETE',
        body: JSON.stringify({ requestData: deletedData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          getWannaBuyData()
          getCartCount()
        })
    }
  }

  // 從下次再買加入購物車
  const addToCart = () => {
    if (stock_num > 0) {
      const addData = { count: 1, pid: pid, wannaBuy: true }
      const auth = localStorage.getItem('auth')
      if (auth) {
        const obj = JSON.parse(auth)
        const Authorization = 'Bearer ' + obj.token
        fetch(`${process.env.API_SERVER}/shop/cart`, {
          method: 'POST',
          body: JSON.stringify({ requestData: addData }),
          headers: {
            Authorization,
            'Content-Type': 'application/json',
          },
        })
          .then((r) => r.json())
          .then((data) => {
            getWannaBuyData()
            getCartCount()
          })
      }
    } else {
      setIsOpen(true)
    }
  }

  // 日期
  const date_slice = date.slice(0, 10)

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
          {/* 有無庫存 */}
          <div className={`${styles.quantity}`}>
            {stock_num > 0 ? '有' : '無'}
          </div>
          {/* 放入時間 */}
          <div className={`${styles.date}`}>{date_slice}</div>

          {/* 放入購物車 */}
          <div className={`${styles.addToCart}`}>
            <NoButton
              text="加入購物車"
              btnColor="brown"
              width="150px"
              padding="15px 0px"
              fontSize="16px"
              link={() => {
                addToCart()
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
                deleteFromWannaBuy(pid)
              }}
            />
          </div>
        </div>
        {/* 分隔線 */}
        <div className={`${styles.line}`}></div>
      </Col>
      {isOpen ? (
        <Alert
          status="wrong"
          isOpen={isOpen}
          text={'沒有庫存了！'}
          setIsOpen={setIsOpen}
        />
      ) : (
        ''
      )}
    </Row>
  )
}
