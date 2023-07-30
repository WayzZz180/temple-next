import styles from './style.module.sass'

//hooks
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import CartContext from '@/contexts/CartContext'

// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import ShopStepBar from '@/components/common/bar/ShopStepBar'
import ShopCartContentCard from '@/components/common/cards/ShopCartContentCard'
import ShopWannaBuyCard from '@/components/common/cards/ShopWannaBuyCard'
import CartCategory from '@/components/common/button/CartCategory'
import Button from '@/components/common/button'
import Marquee from '@/components/common/marquee'

export default function wannaBuy({data}) {
  const router = useRouter()

  // 下次再買標題
  const title_wannaBuy = [
    { width: '19%', text: '商品圖片' },
    { width: '21%', text: '商品名稱' },
    { width: '6%', text: '單價' },
    { width: '5.5%', text: '庫存' },
    { width: '17%', text: '加入時間' },
  ]

  // 即時更新資料的狀態
  const [state, setState] = useState(false)
  
  return (
    <>
        {/* 標題列 */}
        <Row className="nowrap">
          <Col className={`${styles.container} `}>
            {title_wannaBuy.map((v, i) => {
              return (
                <span
                  key={i}
                  className={`${styles.title} ${
                    i === 0 ? 'ps65px' : ''
                  } fs20px p15px`}
                  style={{ width: v.width }}
                >
                  {v.text}
                </span>
              )
            })}
          </Col>
        </Row>
        {/* 購物車內容 */}
        {data?.length === 0 ? (
          <Row className="nowrap">
            <Col className={`${styles.insertInfo} mt100px fs24px`}>
              {/* 快去新增幾筆商品吧！ */}
              物即是空，空即是物
              <div className={`${styles.line} mt100px`}></div>
            </Col>
          </Row>
        ) : 
          data?.map((v, i) => (
            <ShopWannaBuyCard
              key={`${v.pid}`}
              src={`/${v.image}`}
              name={`${v.product_name}`}
              price={`${v.product_price}`}
              stock_num={`${Number(v.stock_num)}`}
              pid={`${v.pid}`}
              cid={`${v.cid}`}
              date={`${v.created_at}`}
              setState={setState}
              state={state}
            />
          ))}
    </>
  )
}
