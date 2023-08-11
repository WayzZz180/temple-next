import styles from './pagination.module.sass'
import Link from 'next/link'
import Image from 'next/image'

//hooks
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// svg
import dots from '@/assets/dots.svg'
import Arrow from '@/assets/arrow_page.svg'

//components
import Button from '@/components/common/button/noButton'

// pagination includes page(當前頁面) / totalPages
export default function Pagination({
  pagination = { page: 1, totalPages: 1 },
}) {
  const router = useRouter()
  // 解構 pagination
  let { page, totalPages } = pagination

  if (!page) page = 1

  // 頁碼需要
  let index = Number(page)

  // for map
  let page_arr = []

  if (totalPages === 1) {
    page_arr = []
  } else if (totalPages <= 7) {
    page_arr = Array.from({ length: totalPages - 2 }, (_, i) => i + 2)
  } else {
    if (index <= 4) {
      //顯示前五筆
      page_arr = [2, 3, 4, 5]
    } else if (index > 4 && index <= 6) {
      //從第六筆開始置中
      page_arr = [4, 5, 6, 7, 8]
    } else if (index >= 7 && index <= totalPages - 5) {
      //置中
      page_arr = [index - 2, index - 1, index, index + 1, index + 2]
    } else if (index >= totalPages - 4) {
      //最後幾筆
      page_arr = [
        totalPages - 5,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
      ]
    }
  }

  const [value, setValue] = useState(1)

  useEffect(() => {
    if (value > totalPages) {
      setValue(totalPages)
    } else if (value < 1) {
      setValue(1)
    }
  }, [value])

  const sendPage = (value) => {
    const currentParams = new URLSearchParams(window.location.search)
    currentParams.set('page', value)
    const currentPath = window.location.pathname
    const newURL = `${currentPath}?${currentParams.toString()}`
    router.push(newURL)
  }

  return (
    <Row className={`${styles.flex} mt50px`}>
      <Col className={`${styles.pageContainer}`}>
        {/* 分頁 */}
        <div className={`${styles.pagination} fwBolder fs18px`}>
          {/* 上一頁箭頭 */}
          <Image
            src={Arrow}
            alt="arrow_left"
            className={`${styles.arrowLeft}`}
            width={30}
            onClick={() => {
              if (Number(page) - 1 > 0) {
                sendPage(Number(page) - 1)
              }
            }}
            style={{ cursor: Number(page) === 1 ? 'default' : 'pointer' }}
          />

          {/* 第一頁 */}
          <button
            className={`${styles.button} ${
              Number(page) == 1 ? styles.active : ''
            }`}
            onClick={() => {
              router.query.page != 1 && sendPage(1)
            }}
          >
            1
          </button>

          {/* 前面點點 */}
          <Image
            src={dots}
            alt="dots"
            className={`${styles.dots}`}
            // 前4筆時不顯示
            style={{
              display: Number(page) < 5 || totalPages <= 7 ? 'none' : '',
            }}
            width={30}
          />

          {/* 頁碼 */}
          {page_arr.map((v, i) => {
            return (
              <button
                key={v}
                className={`${styles.button} ${
                  Number(page) == v ? styles.active : ''
                }`}
                onClick={() => {
                  router.query.page != v && sendPage(v)
                }}
              >
                {v}
              </button>
            )
          })}

          {/* 後面點點 */}
          <Image
            src={dots}
            alt="dots"
            className={`${styles.dots}`}
            // 後4筆時不顯示
            style={{
              display:
                Number(page) >= totalPages - 4 || totalPages <= 7 ? 'none' : '',
            }}
            width={30}
          />
          {/* 最後一頁 */}
          <button
            className={`${styles.button} ${
              Number(page) == totalPages ? styles.active : ''
            }`}
            style={{ display: totalPages === 1 ? 'none' : '' }}
            onClick={() => {
              router.query.page != totalPages && sendPage(totalPages)
            }}
          >
            {totalPages}
          </button>
          {/* 下一頁箭頭 */}
          <Image
            src={Arrow}
            alt="arrow_right"
            className={`${styles.arrowRight}`}
            width={30}
            onClick={() => {
              if (Number(page) + 1 < totalPages) {
                sendPage(Number(page) + 1)
              }
            }}
            style={{
              cursor: Number(page) === totalPages ? 'default' : 'pointer',
            }}
          />
        </div>
      </Col>
      <Col style={{ display: totalPages <= 7 ? 'none' : '' }}>
        <div className={`${styles.inputContainer} mt50px `}>
          <span className={`${styles.inputTitle} me10px fs18px `}>
            跳轉至第
          </span>
          <span className={`${styles.inlineBlock} `}>
            <input
              className={`${styles.inputBox}`}
              value={value}
              placeholder="1"
              // 不能打非數字
              onChange={(e) => {
                if (!isNaN(e.target.value)) {
                  setValue(e.target.value)
                }
              }}
              // Enter送出
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value) {
                  sendPage(value)
                  setValue(1)
                }
              }}
            ></input>
          </span>
          <span className={`${styles.inputTitle} ms10px fs18px me30px `}>
            頁
          </span>
          <div
            role="presentation"
            onClick={() => {
              sendPage(value)
            }}
          >
            <Button
              text="跳轉"
              btnColor="brown"
              padding="5px 10px"
              fontSize="16px"
            />
          </div>
        </div>
      </Col>
    </Row>
  )
}
