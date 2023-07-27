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
import ShopWannaBuyCard from '@/components/common/cards/ShopWannaBuyCard'
import CartCategory from '@/components/common/button/CartCategory'
import Button from '@/components/common/button'
import Marquee from '@/components/common/marquee'

export default function Cart() {
  const router = useRouter();
  const title = [
    {width:"216px",text:"商品圖片"},
    {width:"365px",text:"商品名稱"},
    {width:"145px",text:"單件價格"},
    {width:"195px",text:"數量"},
    {width:"274px",text:"小計"}]

  const [data, setData] = useState([])
  const [marquee, setMarquee] = useState([])
  const member = {member_id:'wayz', count:null, pid:null }
  const [dataFromChild, setDataFromChild] = useState(member)
  const [idFromChild, setIdFromChild] = useState(1)
  
  useEffect(() => {
    const reqData = {...dataFromChild, id:idFromChild}
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
  }, [dataFromChild, idFromChild, router.query])


  // 瀏覽紀錄
  useEffect(()=>{
    const reqData = false
    fetch(`${process.env.API_SERVER}/shop/cart`, {
      method: 'POST',
      body: JSON.stringify({ requestData: reqData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((r) => r.json())
    .then((data) => {
      setMarquee(data)
    })
  },[router.query])

  if(!data) return <p>Loading...</p>

  // for 一鍵清空
  const pid_array = data?.map((v,i)=>{
    return v.pid
  })

  // 小計
  const total = data?.reduce((result, v) => {
    return result + v.product_price * v.quantity;
  }, 0);

  // 優惠券
  const coupon = 100


  if(!marquee) return <p>Loading...</p>

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
            <CartCategory idFromChild={idFromChild} setIdFromChild={setIdFromChild}/>
            <button className={`${styles.button} fs18px mb10px`}
            onClick={()=>{
              setDataFromChild({member_id:'wayz', count:null, pid:pid_array})
            }}
            >一鍵清空</button>
        </Col>
      </Row>
      {/* 標題列 */}
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
      {/* 購物車內容 */}
      {
        
        data?.length === 0 ? (
          <Row className='nowrap'>
            <Col className={`${styles.insertInfo} mt100px fs24px`}>
              快去新增幾筆商品吧！
              <div className={`${styles.line} mt100px`}></div>
            </Col>
          </Row>
        ) : (
          idFromChild === 1 ? (
            data?.map((v, i) => (
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
          ) : (
            data?.map((v, i) => (
              <ShopWannaBuyCard
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
        )
      }

      {/* 明細 */}
      { 
        (idFromChild === 1) ? (
      <Row className='nowrap'>
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
              <span className={`${styles.details}`}>${total-coupon}</span>
            </div>
          </div>
            <div className={`${styles.detailsButton} mt30px`}>
              <Button 
                  text = '前往結帳'
                  btnColor = 'hot_pink'
                  width = '100%'
                  height = ''
                  padding = '15px 60px'
                  fontSize = '18px'
                  link={()=>{
                    if(data?.length!=0){
                    router.push('/shop/order')
                    }
                  }}
               />
            </div>
        </Col>
      </Row>
        ):("")}
      <Row>
        <Marquee data={marquee} text="瀏覽紀錄" text2='browse history' lineColor='green'/>
      </Row>
    </Container>
    </>
  )
}