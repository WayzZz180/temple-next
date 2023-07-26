import styles from './order.module.sass'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useClick } from '@/hooks/useClick.js'

// components
import ShopStepBar from "@/components/common/bar/ShopStepBar"
import InputBox from '@/components/common/inputBox'
import Button from '@/components/common/button'
import ShopCartContentCard from '@/components/common/cards/ShopCartContentCard'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                    <div className={` fs28px fwBolder`}>合計：NT$150</div>
                    <div className={`fs24px`}>購物車：3件</div>
                </div>
            </Col>
        </Row>
        {/* 商品內容 */}
        <Row className={`${styles.trans}`} style={{display: openClickState ? '' : 'none'}}>
            {data?.map((v,i) => (
                <ShopCartContentCard
                key={i}
                src={`/${v.image}`}
                name={`${v.product_name}`}
                price={`${v.product_price}`}
                quantity={`${v.quantity}`}
                stock_num={`${v.stock_num}`}
                pid={`${v.pid}`}
                cid={`${v.cid}`}      
                />
            ))
          }
        </Row>
        {/* 表單 */}
        <Container className='mt100px'>
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
                link = {()=>{}}
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
