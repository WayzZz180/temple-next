import styles from './cart.module.sass'
import Head from 'next/head'

//hooks
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import CartDataContext from '@/contexts/CartDataContext'
import WannaBuyDataContext from '@/contexts/WannaBuyDataContext'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import ShopStepBar from '@/components/common/bar/ShopStepBar'
import Cart from '@/components/common/cart/cart'
import WannaBuy from '@/components/common/cart/wannaBuy'
import CartCategory from '@/components/common/button/CartCategory'
import Marquee from '@/components/common/marquee'
import Loading from '@/components/common/loading'

export default function IndexCart() {
  const router = useRouter()

  // 瀏覽紀錄資料
  const [marquee, setMarquee] = useState([])

  // id = 1 (購物車) , id = 2 (下次再買)
  const { tab } = router.query
  const [idFromChild, setIdFromChild] = useState(tab ? parseInt(tab) : 1)

  // for 購物車資料更新
  const { cartData, setCartData, getCartData } = useContext(CartDataContext)

  // for 下次再買資料更新
  const { wannaBuyData, setWannaBuyData, getWannaBuyData } =
    useContext(WannaBuyDataContext)

  //loading
  const [loading, setLoading] = useState(true)

  // 抓購物車或下次再買的資料
  useEffect(() => {
    if (tab) {
      setIdFromChild(parseInt(tab))
    }
    getCartData()
    getWannaBuyData()
    // // 瀏覽紀錄
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/history`, {
        headers: {
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
          setMarquee(data)
        })
    }
  }, [router.query])

  if (loading) return <Loading />

  return (
    <>
      <Head>
        <title>購物車</title>
      </Head>
      <Container>
        {/* Step */}
        <Row>
          <Col>
            <ShopStepBar />
          </Col>
        </Row>
        {/* 購物車、下次再買、一鍵清空 */}
        <Row className={`${styles.row} nowrap mt100px`}>
          <Col className={`${styles.top}`}>
            <CartCategory
              idFromChild={idFromChild}
              setIdFromChild={setIdFromChild}
            />
          </Col>
        </Row>
        {idFromChild === 1 ? (
          <Cart data={cartData} />
        ) : (
          <WannaBuy data={wannaBuyData} />
        )}
        <Row>
          <Marquee
            data={marquee}
            text="瀏覽紀錄"
            text2="browse history"
            lineColor="green"
          />
        </Row>
      </Container>
    </>
  )
}
