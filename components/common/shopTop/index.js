import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.sass'
// hooks
import { useRouter } from 'next/router'
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
// components
import ShopSearchBar from '@/components/common/bar/ShopSearchBar'
import goldenStar_fill from '@/assets/goldenStar_fill.svg'
import goldenStar_outline from '@/assets/goldenStar_outline.svg'
// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import data from '@/components/mydata/productsTitleData'

export default function ShopTop() {
  const router = useRouter()
  // 類別hover
  const {
    hoveredIndex: hoveredIndexStar,
    handleMouseEnter: handleMouseEnterStar,
    handleMouseLeave: handleMouseLeaveStar,
  } = useHoverIndex(-1)

  // 換分類時清空keyword
  const clearLocal = () => {
    if (localStorage.getItem('keyword')) {
      localStorage.removeItem('keyword')
    }
  }
  return (
    <>
      {/* 類別 */}
      <Row className="nowrap mt100px mb50px fs24px">
        {/* 標題 */}
        <Col>
          <div
            role="presentation"
            className={`${styles.title}`}
            onClick={() => {
              router.push('/shop')
            }}
          >
            神明尬意ㄟ
          </div>
        </Col>
      </Row>
      <Row className={`nowrap fs20px mb50px ${styles.rwdCategory}`}>
        {/* 類別詳細 */}
        {data.map((v, i) => {
          return (
            <Col
              key={i}
              onMouseEnter={() => handleMouseEnterStar(i)}
              onMouseLeave={handleMouseLeaveStar}
              onClick={() => {
                clearLocal()
              }}
            >
              <Link
                href={`/shop/${v.id}?page=1`}
                className={`${styles.category} ${
                  hoveredIndexStar === i ? styles.hovered : ''
                } m15px`}
              >
                {/* 星星 */}
                <span className={`${styles.star} pe15px `}>
                  <Image
                    src={
                      hoveredIndexStar === i
                        ? goldenStar_fill
                        : goldenStar_outline
                    }
                    alt="stars"
                    width={20}
                  ></Image>
                </span>
                {/* 文字 */}
                <span className={`${styles.link} fwBold pb15px`}>{v.text}</span>
              </Link>
            </Col>
          )
        })}
      </Row>
      {/* 搜尋商品 */}
      <Row className="nowrap">
        <Col>
          <ShopSearchBar />
        </Col>
      </Row>
    </>
  )
}
