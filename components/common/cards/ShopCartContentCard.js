import styles from './ShopCartContentCard.module.sass'
import Image from 'next/image'
import Link from 'next/link'
// hooks
import { useState } from 'react'
// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// components
import NoButton from '@/components/common/button/noButton'
// svg
import add from '@/assets/add.svg'
import minus from '@/assets/minus.svg'
import TitleData from '@/components/mydata/productsTitleData'
export default function ShopCartContentCard({
    src="/img/cookies/chips/chips (2).png",
    name="樂事洋芋片派對分享包-經典原味(119g/包)",
    price=60,
    quantity = 3,
    stock_num=30,
    pid=2,
    cid=1,

}) {
    const [count, setCount] = useState(Number(quantity))
    const category = TitleData[cid].id
    console.log(category);
 
    const deleteFromCart = (pid)=>{
        const reqData = {member_id:'wayz', pid: pid}
        console.log(pid)
        console.log(reqData)
        // fetch(`${process.env.API_SERVER}/:pid`, {
        //   method: 'DELETE',
        // }
        // {
        //   method: 'POST',
        //   body: JSON.stringify({ requestData: reqData }),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // }
        fetch(`${process.env.API_SERVER}/:pid`, {
          method: 'DELETE',
        })
        .then((r) => r.json())
          .then((data) => {
            location.reload();
            console.log('data:', data)
          })
      }
 
 
    return (
    <Row className={`${styles.row} nowrap fwBold`}>
        <Col>
            <div className={`${styles.container} pt30px pb30px fs18px`}>
                <div className={`${styles.image}`}>    
                <Link href={`/shop/${category}/${pid}`}>
                    <Image
                    src={src} 
                    alt="product" 
                    width={200} 
                    height={200} 
                    /> 
                </Link> </div>
                <div className={`${styles.name}`}>{name}</div>
                <div className={`${styles.price}`}>${price}</div>
                <div className={`${styles.quantity}`}>

                <div className={`${styles.add} fs24px  `}>
                {/* － */}
                <Image
                  src={minus} 
                  width={30}
                  alt="minus"
                  className={`${styles.button}`}
                  style={{
                    cursor: stock_num !== 0 ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (count <= 1) {
                      setCount(1)
                    } else {
                      setCount(count - 1)
                    }
                  }}
                />
                {/* 數量 */}
                <input
                  type="text"
                  inputmode="numeric"
                  value={stock_num ? count : 0}
                  className={`${styles.addValue} fs16px `}
                  onChange={(e) => {
                    if (!isNaN(e.target.value) && e.target.value != 0) {
                      if (Number(e.target.value) > stock_num) {
                        setCount(Number(stock_num))
                      } else {
                        setCount(Number(e.target.value))
                      }
                    } else {
                      setCount(Number(count))
                    }
                  }}
                  readOnly={stock_num === 0}
                ></input>
                <Image
                  src={add}
                  width={30}
                  alt="add"
                  className={`${styles.button}`}
                  style={{
                    cursor: stock_num !== 0 ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (count >= stock_num) {
                      setCount(stock_num)
                    } else {
                      setCount(count + 1)
                    }
                  }}
                />
              </div>
                </div>
                <div className={`${styles.total}`}>${price*count}</div>
                <div className={`${styles.delete}`}>
                <NoButton   
                    text = '刪除'
                    btnColor = 'brown'
                    width = '100px'
                    padding = '15px 0px'
                    fontSize = '16px'
                    link = {()=>{deleteFromCart(pid)}}/>
                </div>
            </div>
            <div className={`${styles.line}`}></div>
        </Col>
    </Row>
  )
}
