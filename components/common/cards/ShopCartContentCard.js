import styles from './ShopCartContentCard.module.sass'
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
    setDataFromChild = ()=>{},
}) {
    const [count, setCount] = useState(Number(quantity))
    const category = TitleData[cid].id
    // console.log(count);
    
    // const reqData = {member_id:'wayz', count:count, pid:pid }
    const initial = {member_id:'wayz', count:count, pid:pid }
    const [childData, setChildData] = useState(initial)

    useEffect(() => {
      console.log(childData)
      setDataFromChild(childData)
    }, [childData])
    
    //更新數量
    const updateCount = (count,pid)=>{
        const updatedData = { member_id: 'wayz', count: count, pid: pid };
        setChildData(updatedData); // 更新 childData
    }

    const deleteFromCart = (pid)=>{
        const delData = {member_id:'wayz',count:null, pid: pid}
        setChildData(delData);
      }
 
 
    return (
    <Row className={`${styles.row} nowrap fwBold`}>
        <Col>
            <div className={`${styles.container} pt30px pb30px `}>
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
                <div className={`${styles.name} fs18px`}>{name}</div>
                {/* 商品價格 */}
                <div className={`${styles.price} fs24px`}>${price}</div>
                {/* 選擇數量 */}
                <div className={`${styles.quantity}`}>
                  <div className={`${styles.add} fs24px `}>
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
                        deleteFromCart(pid)
                      } else {
                        setCount(count - 1)
                        updateCount(count-1,pid)
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
                  {/* + */}
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

                      updateCount(count+1,pid);

                    }}
                  />
                  </div>
                  {/* 剩餘庫存 */}
                  <div className={`${styles.stock} fwLighter fs14px`}
                  style={{color: stock_num<=10 ? variables['hot_pink']:"" ,opacity: stock_num<=10 ? 1 : 0.5} }>剩餘：{stock_num} /件</div>
                </div>
                {/* 小計 */}
                <div className={`${styles.total} fs24px`}>${price*count}</div>
                {/* 刪除 */}
                <div className={`${styles.delete}`}>
                  <NoButton   
                      text = '刪除'
                      btnColor = 'brown'
                      width = '100px'
                      padding = '15px 0px'
                      fontSize = '16px'
                      link = {()=>{deleteFromCart(pid)}}
                   />
                </div>
            </div>
            {/* 分隔線 */}
            <div className={`${styles.line}`}></div>
        </Col>
    </Row>
  )
}
