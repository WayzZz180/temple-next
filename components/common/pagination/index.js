import styles from './pagination.module.sass'
import Link from 'next/link'
import Image from 'next/image'

//hooks
import { useState } from 'react'
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
// path = 導向頁面
export default function Pagination({
  pagination,
  path = '/shop/cookies?page=',
  api
}) {
  const router = useRouter()
  // 解構 pagination
  const { page, totalPages } = pagination

  // 頁碼需要
  let index = page

  // for map
  let page_arr = []

  // 顯示前n筆

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

  const [value, setValue] = useState(1)

  if (value > totalPages) {
    setValue(totalPages)
  } else if (value < 1) {
    setValue(1)
  }

  // const sendPage = (value) => {
  //   const reqPage = { page: value }
  //   fetch(`${process.env.API_SERVER}${api}`, {
  //     method: 'POST',
  //     body: JSON.stringify({ requestData: reqPage }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
        
  //     })
  // }

  return (
    <Row className={`${styles.flex} mt50px`}>
      <Col className={`${styles.pageContainer}`}>
        {/* 分頁 */}
        <div className={`${styles.pagination} fwBolder fs18px`}>
          {/* 上一頁 */}
          <Image
            src={Arrow}
            alt="arrow_left"
            className={`${styles.arrowLeft}`}
            width={30}
            onClick={() => {
              if (page - 1 > 0) {
                router.push(`${path}${page - 1}`)
              }
            }}
            style={{ cursor: page === 1 ? 'default' : 'pointer' }}
          />

          {/* 第一頁 */}
          <Link className="link" href={`${path}1`}>
            <button
              className={`${styles.button} ${page == 1 ? styles.active : ''}`}
            >
              1
            </button>
          </Link>

          {/* 前面點點 */}
          <Image
            src={dots}
            alt="dots"
            className={`${styles.dots}`}
            // 前4筆時不顯示
            style={{ display: page < 5 ? 'none' : '' }}
            width={30}
          />

          {/* 頁碼 */}
          {page_arr.map((v, i) => {
            return (
              <Link key={v} className="link" href={`${path}${v}`}>
                <button
                  className={`${styles.button} ${
                    page == v ? styles.active : ''
                  }`}
                >
                  {v}
                </button>
              </Link>
            )
          })}

          {/* 後面點點 */}
          <Image
            src={dots}
            alt="dots"
            className={`${styles.dots}`}
            // 後4筆時不顯示
            style={{ display: page >= totalPages - 4 ? 'none' : '' }}
            width={30}
          />
          {/* 最後一頁 */}
          <Link className="link" href={`${path}${totalPages}`}>
            <button
              className={`${styles.button} ${
                page == totalPages ? styles.active : ''
              }`}
            >
              {totalPages}
            </button>
          </Link>
          <Image
            src={Arrow}
            alt="arrow_right"
            className={`${styles.arrowRight}`}
            width={30}
            onClick={() => {
              if (page + 1 < totalPages) {
                router.push(`${path}${page + 1}`)
              }
            }}
            style={{ cursor: page === totalPages ? 'default' : 'pointer' }}
          />
        </div>
      </Col>
      <Col>
        <div className={`${styles.inputContainer} mt50px `}>
          <span className={`${styles.inputTitle} me10px fs18px `}>
            跳轉至第
          </span>
          <span className={`${styles.inlineBlock} `}>
            <input
              className={`${styles.inputBox}`}
              value={value}
              placeholder="1"
              onChange={(e) => {
                // 送出
                if (e.key === 'Enter' && e.target.value) {
                    // sendPage(value)
                }
                if (!isNaN(e.target.value)) {
                  setValue(e.target.value)
                }
              }}
            ></input>
          </span>
          <span className={`${styles.inputTitle} ms10px fs18px me30px `}>
            頁
          </span>
          <Button
            text="跳轉"
            btnColor="brown"
            padding="5px 10px"
            fontSize="16px"
            // link={sendPage(value)}
          />
        </div>
      </Col>
    </Row>
  )
}
