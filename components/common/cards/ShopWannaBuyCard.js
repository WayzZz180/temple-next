import styles from './ShopWannaBuyCard.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import variables from '@/styles/_variables.module.sass'
 
// hooks
import { useState,useEffect } from 'react'
// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// components
import NoButton from '@/components/common/button/noButton'
// svg
import TitleData from '@/components/mydata/productsTitleData'

export default function ShopWannaBuyCard({
    src="/img/cookies/chips/chips (2).png",
    name="樂事洋芋片派對分享包-經典原味(119g/包)",
    price=60,
    quantity = 3,
    stock_num=30,
    pid=2,
    cid=1,
    date='2023-08-16',
    setDataFromChild = ()=>{},
    setState=()=>{},
    state=false
}) {
    const [count, setCount] = useState(Number(quantity))
    const category = TitleData[cid].id
    
    const initial = {member_id:'wayz', count:count, pid:pid }
    const [childData, setChildData] = useState(initial)

    useEffect(() => {
      setDataFromChild(childData)
    }, [childData])
 
    // 刪除個別商品
    const deleteFromWannaBuy = (pid)=>{
      const deletedData = {member_id:'wayz', pid: pid, wannaBuy:true }
      setChildData(deletedData); // 更新 childData
    }

    // 加入購物車
    const addToCart = ()=>{
      setState(!state)
      const reqData = {quantity: 1, wannaBuy: true}
      const currentPath =`/shop/${category}/${pid}`
      fetch(`${process.env.API_SERVER}${currentPath}`, {
        method: 'POST',
        body: JSON.stringify({ requestData: reqData }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
        })
    }
    
    const date_slice = date.slice(0,10)
    return (
    <Row className={`${styles.row} nowrap fwBold`}>
        <Col>
            <div className={`${styles.container} pt30px pb30px fs18px`}>
                {/* 商品圖 */}
                <div className={`${styles.image}`}>    
                  <Link href={`/shop/${category}/${pid}`}>
                      <Image
                      src={src} 
                      alt="product" 
                      width={200} 
                      height={200} 
                      /> 
                  </Link> 
                </div>
                {/* 商品名稱 */}
                <div className={`${styles.name}`}>{name}</div>
                {/* 商品價格 */}
                <div className={`${styles.price}`}>${price}</div>
                {/* 有無庫存 */}
                <div className={`${styles.quantity}`}>
                     {stock_num > 0 ? "有" : "無"}
                </div>
                {/* 放入時間 */}
                <div className={`${styles.date}`}>{date_slice}</div>
               
                {/* 放入購物車 */}
                <div className={`${styles.addToCart}`}>
                  <NoButton   
                      text = '加入購物車'
                      btnColor = 'brown'
                      width = '150px'
                      padding = '15px 0px'
                      fontSize = '16px'
                      link = {()=>{addToCart()}}
                   />
                </div>
                <div className={`${styles.delete}`}>
                  <NoButton   
                      text = '刪除'
                      btnColor = 'brown'
                      width = '100px'
                      padding = '15px 0px'
                      fontSize = '16px'
                      link = {()=>{deleteFromWannaBuy(pid)}}
                   />
                </div>
            </div>
            {/* 分隔線 */}
            <div className={`${styles.line}`}></div>
        </Col>
    </Row>
  )
}
