
import styles from './cart.module.sass'

//hooks
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
// import { CartDataContextProvider } from '@/contexts/CartCountContext'
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

export default function IndexCart() {
  const router = useRouter()

  // 瀏覽紀錄資料
  const [marquee, setMarquee] = useState([])

  // id = 1 (購物車) , id = 2 (下次再買)
  const {tab} = router.query
  const [idFromChild, setIdFromChild] = useState(tab ? parseInt(tab) : 1);

  // for 購物車資料更新
  const { cartData, setCartData, getCartData } = useContext(CartDataContext)

  // for 下次再買資料更新
  const { wannaBuyData, setWannaBuyData, getWannaBuyData } = useContext(WannaBuyDataContext)

  // 抓購物車或下次再買的資料
  useEffect(() => {
      if(tab){
        setIdFromChild(parseInt(tab))
      }
      getCartData()
      getWannaBuyData()
  }, [router.query])

  // 瀏覽紀錄
  useEffect(() => {
    fetch(`${process.env.API_SERVER}/shop/history`)
      .then((r) => r.json())
      .then((data) => {
        console.log('hehe')
        setMarquee(data)
      })
  }, [])

  if (!cartData) return <p>Loading...</p>
  if (!wannaBuyData) return <p>Loading...</p>
  if (!marquee) return <p>Loading...</p>


  return (
    <>
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
            {idFromChild===1 ? 
            <Cart data={cartData}/> : <WannaBuy data={wannaBuyData} /> }
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
