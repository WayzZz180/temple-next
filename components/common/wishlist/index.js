import Image from 'next/image'
import Link from 'next/link'
// bootstrap
import { Row, Col } from 'react-bootstrap'

import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import CartCountContext from '@/contexts/CartCountContext'

//components
import styles from '@/components/common/wishlist/wishlist.module.sass'
import coupon_red from '@/assets/coupon_red.svg'
import Button from '@/components/common/button/index.js'
import NoButton from '@/components/common/button/noButton.js'

export default function Wishlist({
  WLimage = '',
  WLname = '',
  WLprice = '',
  WLpid = '',
  WLcid = '',
  setReset = () => {},
}) {
  const router = useRouter()
  const cat = ['cookies', 'candy', 'salty', 'drinks', 'gifts']
  const { cartCount, setCartCount, getCartCount } = useContext(CartCountContext)
  const [resetChild, setResetChild] = useState(false)
  // 從喜好商品加入購物車
  const addToCart = () => {
    const addData = { count: 1, pid: WLpid, wishlist: true }
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
          getCartCount()
          setResetChild(!resetChild)
        })
    }
  }

  // 從喜好商品刪除個別商品
  const deleteFromWishList = (pid) => {
    const deletedData = { pid: pid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/wishlist`, {
        method: 'DELETE',
        body: JSON.stringify({ requestData: deletedData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          getCartCount()
          setResetChild(!resetChild)
        })
    }
  }

  useEffect(() => {
    setReset(resetChild)
  }, [resetChild])

  const wishlistRow = (
    <Row className={styles.flex}>
      <Col>
        <Link href={`/shop/${cat[WLcid]}/${WLpid}`}>
          {/* 記得改成shop */}
          <Image
            src={`/${WLimage}`}
            alt="product"
            height={150}
            width={150}
            className={styles.img}
          />
        </Link>
      </Col>
      <Col>
        <div className={`${styles.textContainer} fs18px w200px`}>
          <b>{WLname}</b>
        </div>
      </Col>
      <Col className={styles.valid}>
        <div>${WLprice}</div>
      </Col>
      <Col className={styles.btnflex}>
        <div>
          <Button
            text="加入購物車"
            btnColor="brown"
            fontSize="20px"
            link={() => {
              addToCart()
            }}
          />
        </div>
        <div>
          <NoButton
            text="刪除"
            btnColor="brown"
            fontSize="20px"
            link={() => {
              deleteFromWishList(WLpid)
            }}
          />
        </div>
      </Col>
    </Row>
  )

  const lineRow = (
    <Row>
      <Col className={styles.line}></Col>
    </Row>
  )

  // const combinedRows = []
  // const numberOfRows = 5 // 資料的比數
  // for (let i = 0; i < numberOfRows; i++) {
  //   combinedRows.push(
  //     i % 2 === 0 ? (
  //       <Fragment key={i}>{wishlistRow}</Fragment>
  //     ) : (
  //       <Fragment key={i}>{lineRow}</Fragment>
  //     )
  //   )
  // }
  return (
    <>
      {wishlistRow} {lineRow}
    </>
  )
}
