import Image from 'next/image'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'

import { Container, Row, Col } from 'react-bootstrap'

import variables from '@/styles/_variables.module.sass'

//components
import styles from '@/components/common/amuletDetails/amulet.module.sass'
import coupon_red from '@/assets/coupon_red.svg'
import Button from '@/components/common/button/index.js'
import admissionTicketTest from '@/assets/admissionTicketTest.svg'
import InputBox from '@/components/common/inputBox/index.js'
import StudyTickets from '@/components/common/studyTickets/index.js'
export default function Amulet({ amuletName = '' }) {
  const [zhongziModalIsOpen, setZhongziModalIsOpen] = useState(false) // 跟蹤 modal 是否打開
  const [poemModalIsOpen, setPoemModalIsOpen] = useState(false) // 跟蹤 modal 是否打開

  let amulet
  let slogan

  // 使用 switch 敘述根據 usageStatus 設定適當的 CSS 類名
  switch (amuletName) {
    case '紅線':
      amulet = require('@/assets/redline2.svg')
      slogan = '月下老人給你脫單的紅線'
      break
    case '粽子':
      amulet = require('@/assets/zhongzi.svg')
      slogan = '包裹著好運與智慧，包含著成功的味道'
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
      break
  }
  const chineseNumbers = [
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
    '十三',
    '十四',
    '十五',
    '十六',
    '十七',
    '十八',
    '十九',
    '二十',
    '二十一',
    '二十二',
    '二十三',
    '二十四',
    '二十五',
    '二十六',
    '二十七',
    '二十八',
    '二十九',
    '三十',
    '三十一',
    '三十二',
    '三十三',
    '三十四',
    '三十五',
    '三十六',
    '三十七',
    '三十八',
    '三十九',
    '四十',
    '四十一',
    '四十二',
    '四十三',
    '四十四',
    '四十五',
    '四十六',
    '四十七',
    '四十八',
    '四十九',
    '五十',
    '五十一',
    '五十二',
    '五十三',
    '五十四',
    '五十五',
    '五十六',
    '五十七',
    '五十八',
    '五十九',
    '六十',
  ]

  function extractAndConvertAmuletNumber(amuletName) {
    if (amuletName.startsWith('籤詩第')) {
      const startIndex = '籤詩第'.length
      const endIndex = amuletName.indexOf('首')

      if (endIndex !== -1 && endIndex > startIndex) {
        const extractedNumber = amuletName.substring(startIndex, endIndex)
        console.log('抓取的數字:', extractedNumber)

        const index = chineseNumbers.indexOf(extractedNumber)
        console.log('翻轉的數字', index)
        return index !== -1 ? index : NaN
      } else {
        console.log('無法抓取數字')
        return NaN
      }
    } else {
      console.log('不是符合格式的 amuletName')
      // return NaN
      // return 8
      // 直接不return，錯誤寫法
    }
  }
  const index = extractAndConvertAmuletNumber(amuletName) // 提前取得 index

  return (
    <>
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
          {['粽子'].includes(amuletName) && (
            <Button
              text="查看准考證"
              btnColor="brown"
              fontSize="20px"
              link={() => setZhongziModalIsOpen(true)}
            />
          )}
          {!['紅線', '粽子', '青蔥', '桃花枝'].includes(amuletName) && (
            <Button
              text="查看籤詩"
              btnColor="brown"
              fontSize="20px"
              link={() => setPoemModalIsOpen(true)}
            />
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

      <Row>
        <Col className={styles.line}></Col>
      </Row>

      <Modal
        isOpen={zhongziModalIsOpen}
        contentLabel="我的准考證"
        className={styles.alert}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
            // zIndex: 2, //1 為spin pointer
          },
          content: {
            maxWidth: '700px', // 調整最大寬度
            maxHeight: '725px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
            //   // border: '',
            //   // color: 'white',
          },
        }}
      >
        <div
          className={`${styles.close}  fs28px p10px`}
          onClick={() => setZhongziModalIsOpen(false)}
        >
          X
        </div>

        <StudyTickets />
      </Modal>

      <Modal
        isOpen={poemModalIsOpen}
        contentLabel="籤詩"
        className={styles.alert}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
            // zIndex: 2, //1 為spin pointer
          },
          content: {
            maxWidth: '400px', // 調整最大寬度
            maxHeight: '1500px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
            //   // border: '',
            //   // color: 'white',
          },
        }}
      >
        <div
          className={`${styles.close}  fs28px p10px`}
          onClick={() => setPoemModalIsOpen(false)}
        >
          X
        </div>

        <div className={`${styles.flex_center} `}>
          {typeof index === 'number' && (
            <Image
              src={require(`@/public/pray/poem/poem_${index}.png`)}
              alt={`poem${index}`}
              width={290}
            />
          )}
        </div>
      </Modal>
    </>
  )
}
