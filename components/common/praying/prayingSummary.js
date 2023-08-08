import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import styles from './prayingSummary.module.sass'
import variables from '@/styles/_variables.module.sass'

import Modal from 'react-modal'
//components
import Title from '@/components/common/title/orderTitle'
import Button from '@/components/common/button/index.js'
import mazuGod from '@/assets/mazuGod.svg'
import loveGod from '@/assets/loveGod.svg'
import studyGod from '@/assets/studyGod.svg'
import PrayingDetails from './prayingDetails'
export default function PrayingSummary({ data = [] }) {
  const gods = [
    {
      god: '媽祖',
      src: mazuGod,
    },
    {
      god: '月老',
      src: loveGod,
    },
    {
      god: '文昌',
      src: studyGod,
    },
  ]

  const god = gods.filter((v, i) => v.god === data?.god)

  const info = [
    {
      title: '參拜對象',
      content: data?.god,
    },
    {
      title: '參拜日期',
      content: data?.day,
    },
    {
      title: '預約時辰',
      content: data?.time,
    },
  ]
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <Row className={styles.flex}>
        {/* god */}
        <Col className="">
          <Image src={god[0].src} alt="God" width={200}></Image>
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
            link={() => {
              setIsOpen(true)
            }}
          />
          <div className={`${styles.total} mt15px`}>
            <div className={`${styles.totalTitle} fwBold fs20px`}>訂單金額</div>
            <div className={` fwBold fs28px`}>${data?.total}</div>
          </div>
          <div className={`${styles.total}`}>
            <div className={`${styles.totalTitle} fwBold fs20px`}>完成參拜</div>
            <div
              className={`${styles.status} fwBold fs24px`}
              style={{
                color: data?.complete
                  ? variables['green']
                  : variables['hot_pink'],
              }}
            >
              {data?.complete ? '已完成' : '未完成'}
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <Col className={`${styles.longLine} mt30px mb30px`}></Col>
      </Row>
      <Modal
        isOpen={isOpen}
        contentLabel="praying details"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
          },
          content: {
            maxWidth: '1150px', // 調整最大寬度
            maxHeight: '800px', // 調整最大高度
            margin: 'auto', // 水平居中
          },
        }}
      >
        <div
          role="presentation"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          X
        </div>
        <PrayingDetails wid={data?.wid} />
      </Modal>
    </Container>
  )
}
