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
export default function Cart() {
  const router = useRouter();
  const title = ["商 品 資 料","單 件 價 格","數 量","小 計"]
  const [data, setData] = useState([])
  
  const reqData = {member_id: 'wayz'}
  
  useEffect(() => {
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
  }, [router.query])
  
  if(!data) return <p>Loading...</p>

  return (
    <>
    <Container>
      <ShopStepBar />
      <Row className='nowrap mt100px'>
        <Col className={`${styles.container} `}>
          {
            title.map((v,i)=>{
              return <span key={i} className={`${styles.title} fs20px p15px`}>{v}</span>
            })
          }
        </Col>
      </Row>
        {data?.map((v,i)=>{ return <ShopCartContentCard key={i}
          src={`/${v.image}`}
          name={`${v.product_name}`}
          price={`${v.product_price}`}
          quantity = {`${v.quantity}`}
          stock_num = {`${v.stock_num}`}
          pid={`${v.pid}`}
          cid={`${v.cid}`}
          />
        })
        }
    </Container>
    </>
  )
}
