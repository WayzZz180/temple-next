import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

//components
import styles from '@/components/common/detailsText/detailsText.module.sass'

import Button from '@/components/common/button/index.js'

export default function DetailsText({ text = '' }) {
  return (
    <>
      {/* <Col> */}
      <div className={`${styles.flex_start}`}>
        <div>
          <div className="mt10px">訂單編號/參拜對象</div>
          <div className="mt10px">訂單日期/參拜日期</div>
          <div className="mt10px">配送方式</div>
          <div className="mt10px">付款方式</div>
          <div className="mt10px">收件資訊</div>
        </div>

        <div className="ms15px">
          <div className="mt10px"> 媽祖</div>
          <div className="mt10px"> 2023/06/10</div>
          <div className="mt10px">
            宅配 |<span className={styles.text_pink}>已出貨</span>
          </div>
          <div className="mt10px">信用卡一次付清</div>
          <div className="mt10px">高雄市大樹區統嶺路1號</div>
        </div>
      </div>
      {/* </Col> */}
    </>
  )
}
