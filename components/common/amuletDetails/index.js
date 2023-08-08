import Image from 'next/image'
import { Fragment } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import variables from '@/styles/_variables.module.sass'

//components
import styles from '@/components/common/amuletDetails/amulet.module.sass'
import coupon_red from '@/assets/coupon_red.svg'
import Button from '@/components/common/button/index.js'

export default function Amulet({ amuletName = '' }) {
  let amulet
  let slogan

  // 使用 switch 敘述根據 usageStatus 設定適當的 CSS 類名
  switch (amuletName) {
    case '紅線':
      amulet = require('@/assets/redline.svg')
      slogan = '月下老人給你脫單的紅線'
      break
    case '粽子':
      amulet = require('@/assets/zhongzi.svg')
      slogan = '粽子包不住失敗，努力才是關鍵！'
      break
    case '青蔥':
      amulet = require('@/assets/scallion.svg')
      slogan = '青蔥思考，考試自信，勇闖知識之門'
      break
    case '桃花枝':
      amulet = require('@/assets/plum.svg')
      slogan = '桃花綻放，姻緣自來，甜蜜故事展開'
      break
    default:
      amulet = require('@/assets/poem.svg')
      slogan = '媽祖根據你描述的問題給你的提示'
  }

  const amuletRow = (
    <Row className={styles.flex}>
      <Col>
        <Image src={amulet} alt="product" height={121} width={121} />
      </Col>
      <Col className={styles.w280px}>
        <div>
          <b>{amuletName}</b>
          <div>{slogan}</div>
        </div>
      </Col>

      <Col className={`${styles.btnflex} ${styles.w450px}`}>
        {/* {amuletName === '粽子' || amuletName === '青蔥' ? (
          <div>
            <Button text="查看准考證" btnColor="brown" fontSize="20px" />
          </div>
        ) : null} */}
        {['粽子', '青蔥'].includes(amuletName) && (
          <div>
            <Button text="查看准考證" btnColor="brown" fontSize="20px" />
          </div>
        )}
        <div>
          <Button
            text="還願"
            btnColor="brown"
            // width="107px"
            // height="50px"
            fontSize="20px"
          />
        </div>
        {/* <div>
          <Button
            text="分享"
            btnColor="brown"
            // width="107px"
            // height="50px"
            fontSize="20px"
          />
        </div> */}
      </Col>
    </Row>
  )

  const lineRow = (
    <Row>
      <Col className={styles.line}></Col>
    </Row>
  )

  // const combinedRows = []
  // const numberOfRows = 3 // 資料的比數
  // for (let i = 0; i < numberOfRows; i++) {
  //   combinedRows.push(
  //     i % 2 === 0 ? (
  //       <Fragment key={i}>{amuletRow}</Fragment>
  //     ) : (
  //       <Fragment key={i}>{lineRow}</Fragment>
  //     )
  //   )
  // }
  return (
    <>
      {amuletRow}
      {lineRow}
    </>
  )
}
