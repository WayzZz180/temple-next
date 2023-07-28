import styles from './cart.module.sass'

//hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// components
import ShopStepBar from '@/components/common/bar/ShopStepBar'
import ShopCartContentCard from '@/components/common/cards/ShopCartContentCard'
import CartCategory from '@/components/common/button/CartCategory'

export default function Cart() {
  const router = useRouter();
  const title = [
    {width:"216px",text:"商品圖片"},
    {width:"365px",text:"商品名稱"},
    {width:"145px",text:"單件價格"},
    {width:"195px",text:"數量"},
    {width:"260px",text:"小計"}]

  const [data, setData] = useState([])
  const member = {member_id:'wayz', count:null, pid:null }
  const [dataFromChild, setDataFromChild] = useState(member)
  
  useEffect(() => {
    const reqData = dataFromChild
    
    fetch(process.env.API_SERVER + '/shop/cart', {
      method: 'POST',
      body: JSON.stringify({ requestData: reqData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }, [dataFromChild, router.query])
  if(!data) return <p>Loading...</p>

  return (
    <>
    <Container>
      <ShopStepBar />
      <Row className='nowrap mt100px' >
        <Col>
          <CartCategory />
        </Col>
      </Row>
      <Row className='nowrap'>
        <Col className={`${styles.container} `}>
          {
            title.map((v,i)=>{
              return <span key={i} className={`${styles.title}  fs20px p15px`}
              style={{width:v.width}}
              >{v.text}</span>
            })
          }
        </Col>
      </Row>
      { 
        (data.length === 0) ? (
          <Row className='nowrap'>
            <Col className={`${styles.insertInfo} mt100px fs24px`}>
              快去新增幾筆商品吧！
              <div className={`${styles.line} mt100px`}></div>
            </Col>
          </Row>
        ) : (
          data.map((v,i) => (
            <ShopCartContentCard
              key={i}
              src={`/${v.image}`}
              name={`${v.product_name}`}
              price={`${v.product_price}`}
              quantity={`${v.quantity}`}
              stock_num={`${v.stock_num}`}
              pid={`${v.pid}`}
              cid={`${v.cid}`}
              setDataFromChild={setDataFromChild}
            />
          ))
        )
      }
    </Container>
    </>
  )
}