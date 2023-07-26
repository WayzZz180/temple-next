import styles from './order.module.sass'
import Image from 'next/image'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useClick } from '@/hooks/useClick.js'

// components
import ShopStepBar from "@/components/common/bar/ShopStepBar"
import InputBox from '@/components/common/inputBox'
import Button from '@/components/common/button'
import ShopOrderContentCard from '@/components/common/cards/ShopOrderContentCard'
import Title from '@/components/common/title'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//svg
import Arrow from '@/assets/orderArrow.svg'

export default function Order() {
    const [data, setData] = useState([])
    //判斷有無點擊收藏和購物車
    const { clickState: openClickState, handleClick: handleOpenClick } =
    useClick(true)
    const router = useRouter()
    useEffect(() => {
        // const member_id = 'wayz'
        const reqData = { member_id: 'wayz' }
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
      // 小計
  const total = data?.reduce((result, v) => {
    return result + v.product_price * v.quantity;
  }, 0);

  return (
    <Container className={`${styles.container}`}> 
        {/* step */}
        <ShopStepBar path="/shop/order"/>
        {/* 合計 */}
        <Row className="nowrap mt100px">
            <Col className='w100'>
                <div className={`${styles.totalBox} pt30px pb30px`}
                onClick={handleOpenClick}
                >
                    <div className={` fs28px fwBolder`}>合計：NT${total}</div>
                    <div className={`${styles.flex_row} fs24px`}>
                        <div>
                            購物車：{data?.length}件&nbsp;
                        </div>
                        <div className={`${openClickState ? styles.arrowDown : styles.arrowUp } pt5px`}
                        > 
                            <Image src={Arrow} alt="open" width={20}/>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        {/* 商品內容 */}
        <Row
        // style={{display: openClickState ? '' : 'none'}}
        >   <div  className={`${openClickState ? styles.open : styles.close}
        `} >
        {/* ${openClickState ? '' : styles.hidden} */}
            {data?.map((v,i) => (
                <ShopOrderContentCard
                key={i}
                src={`/${v.image}`}
                name={`${v.product_name}`}
                price={`${v.product_price}`}
                quantity={`${v.quantity}`}  
                />
            ))
          }
          </div>
        </Row>
        {/* 表單 */}
        <Container className='mt50px'>
            <Title  text='訂單資訊' text2='information'/>
            <Row className={`${styles.flex_space_between}`}>
                <InputBox type="text" prompt="收件人姓名" placeholder="沈子威" value={""} onChange={()=>{}} width={600} height={60}/>
                <InputBox type="text"  prompt="物流方式" placeholder="宅配" onChange width={600} height={60}/>
            </Row>
            <Row className={`${styles.flex_space_between}`}>
                <InputBox type="text" prompt="收件人電子郵件" placeholder="wayz180@gmail.com" value={""} onChange={()=>{}} width={600} height={60}/>
                <InputBox type="text"  prompt="付款方式" placeholder="現金" onChange width={600} height={60}/>
            </Row>
            <Row className={`${styles.flex_space_between}`}>
                <InputBox type="text" prompt="收件人電話" placeholder="0912345678" value={""} onChange={()=>{}} width={600} height={60}/>
                <InputBox type="text"  prompt="載具" placeholder="/CHILD1215" onChange width={600} height={60}/>
            </Row>
            <Row>
                <InputBox type="text" prompt="收件人地址" placeholder="現居地址" value={""} onChange={()=>{}} width={'97%'} height={60}/>
            </Row>
            <Row className={`${styles.flex_space_between} pt80px `}>
                <Button text="返回購物車" 
                btnColor = 'brown'
                width = ''
                height = ''
                padding = '15px 60px'
                fontSize = '24px'
                link = {()=>{
                    router.push('/shop/cart')
                }}
                />
                <Button text="送出訂單" 
                btnColor = 'hot_pink'
                width = ''
                height = ''
                padding = '15px 60px'
                fontSize = '24px'
                link = {()=>{}}
                />
            </Row>
        </Container>
    </Container>
  )
}
