import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './prayingSummary.module.sass'
//components
import Title from '@/components/common/title/orderTitle'
import Button from '@/components/common/button/index.js'
import DetailsText from '@/components/common/detailsText/index.js'
import mazuGod from '@/assets/mazuGod.svg'
import loveGod from '@/assets/loveGod.svg'
import studyGod from '@/assets/studyGod.svg'
import coupon from '@/assets/coupon.svg'

export default function PrayingSummary({ text = '' }) {
  const info = [
    {
      title: '參拜對象',
      content: '媽祖',
    },
    {
      title: '參拜日期',
      content: '2023/08/08',
    },
    {
      title: '預約時辰',
      content: '午時/11am-1pm',
    },
  ]

  return (
    <>
      <Row className={styles.flex}>
        {/* god */}
        <Col className="">
          <Image src={mazuGod} alt="mazuGod" width={200}></Image>
        </Col>

        <div className={styles.flex_col}>
          <Title info={info} />
        </div>

        <div className={styles.flex_col}>
          <Button
            text="詳細資訊"
            btnColor="brown"
            width="229px"
            height="50px"
            fontSize="20px"
          />
          <div className={`${styles.total} mt15px`}>
            <div className={`${styles.totalTitle} fwBold fs20px`}>訂單金額</div>
            <div className={`${styles.price} fwBold fs28px`}>$100</div>
          </div>
          <div className={`${styles.total}`}>
            <div className={`${styles.totalTitle} fwBold fs20px`}>完成參拜</div>
            <div className={`${styles.status} fwBold fs24px`}>已完成</div>
          </div>
        </div>
      </Row>

      <Row>
        <Col className={`${styles.longLine} mt30px`}></Col>
      </Row>
    </>
  )
}
