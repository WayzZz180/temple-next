import styles from './ShopOrderContentCard.module.sass'
import Image from 'next/image'

// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ShopOrderContentCard({
  src = '/img/cookies/chips/chips (2).png',
  name = '樂事洋芋片派對分享包-經典原味(119g/包)',
  price = 60,
  quantity = 3,
}) {
  return (
    <>
      <Row className={`${styles.row} nowrap fwBold`}>
        <Col>
          <div className={`${styles.container} pt30px pb30px fs20px`}>
            {/* 商品圖 */}
            <div className={`${styles.image}`}>
              <Image
                src={src}
                alt="product"
                width={200}
                height={200}
                className="shadow"
              />
            </div>
            {/* 商品名稱 */}
            <div className={`${styles.name}`}>{name}</div>
            {/* 商品價格 */}
            <div className={`${styles.price}`}>${price}</div>
            {/* 選擇數量 */}
            <div className={`${styles.quantity}`}>
              <span className={`${styles.quantityWord}`}>{quantity}</span>
              <span>&nbsp;/件</span>
            </div>
            {/* 小計 */}
            <div className={`${styles.total}`}>${price * Number(quantity)}</div>
          </div>
          {/* 分隔線 */}
          <div className={`${styles.line}`}></div>
        </Col>
      </Row>

      <Row className={`${styles.rwdRow} nowrap fwBold`}>
        <Col>
          <div className={`${styles.container} pt30px pb30px fs20px`}>
            {/* 商品圖 */}
            <div className={`${styles.image}`}>
              <Image
                src={src}
                alt="product"
                width={85}
                height={85}
                className="shadow"
              />
            </div>
            {/* 商品名稱 */}
            <div className={`${styles.flex_col}`}>
              <div className={`${styles.name}`}>{name}</div>
              {/* 商品價格 */}
              <div className={`${styles.price}`}>${price}</div>
            </div>
            {/* 選擇數量 */}
            <div className={`${styles.flex_row}`}>
              <div className={`${styles.quantity} pe30px`}>
                <span className={`${styles.quantityWord}`}>{quantity}</span>
                <span>&nbsp;/件</span>
              </div>
              {/* 小計 */}
              <div className={`${styles.total}`}>
                ${price * Number(quantity)}
              </div>
            </div>
          </div>
          {/* 分隔線 */}
          <div className={`${styles.line} mt15px`}></div>
        </Col>
      </Row>
    </>
  )
}
