import styles from './style.module.sass'
import Head from 'next/head'
// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import ShopWannaBuyCard from '@/components/common/cards/ShopWannaBuyCard'
import NoData from '../category/noData'

export default function wannaBuy({ data }) {
  // 下次再買標題
  const title_wannaBuy = [
    { width: '19%', text: '商品圖片' },
    { width: '21%', text: '商品名稱' },
    { width: '6%', text: '單價' },
    { width: '5.5%', text: '庫存' },
    { width: '17%', text: '加入時間' },
  ]

  return (
    <>
      <Head>
        <title>下次再買</title>
      </Head>
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
        <NoData />
      ) : (
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
          />
        ))
      )}
    </>
  )
}
