import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.sass'
//hooks
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
// components
import ShopTitle from '@/components/common/title/ShopTitle'
import ShopSearchBar from '@/components/common/bar/ShopSearchBar'
import goldenStar_fill from '@/assets/goldenStar_fill.svg'
import goldenStar_outline from '@/assets/goldenStar_outline.svg'
import ProductsCarousel from '@/components/common/carousel/ProductsCarousel'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Shop() {
  const data = [
    {
      text: '咱有的',
      id: 'all',
    },
    {
      text: '唰嘴ㄟ',
      id: 'cookies',
      color: 'green',
    },
    {
      text: '呷甜甜',
      id: 'candy',
      color: 'hot_pink',
    },
    {
      text: '啉涼涼',
      id: 'drinks',
      color: 'green',
    },
    {
      text: '呷飽飽',
      id: 'salty',
      color: 'hot_pink',
    },
    {
      text: '本土ㄟ',
      id: 'gifts',
      color: 'green',
    },
  ]

  // 類別hover
  const {
    hoveredIndex: hoveredIndexStar,
    handleMouseEnter: handleMouseEnterStar,
    handleMouseLeave: handleMouseLeaveStar,
  } = useHoverIndex(-1)

  return (
    <Container className={'shopContainer'}>
      {/* 類別 */}
      <Row className="nowrap mt100px mb50px fs24px">
        {/* 標題 */}
        <Col>
          <p className={`${styles.title}`}>咱有的物仔</p>
        </Col>
      </Row>
      <Row className={`nowrap fwBold fs20px mb50px`}>
        {/* 類別詳細 */}
        {data.map((v, i) => {
          return (
            <Col
              key={i}
              onMouseEnter={() => handleMouseEnterStar(i)}
              onMouseLeave={handleMouseLeaveStar}
              // onClick={SendData(`${v.id}`)}
            >
              <Link
                href={{
                  pathname: `/shop/${v.id}`,
                  query: { data: JSON.stringify(data) },
                }}
                as={`/shop/${v.id}`}
                className={`${styles.category}
                 ${hoveredIndexStar === i ? styles.hovered : ''} 
                m15px`}
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
                <span className={`${styles.link} $ pb15px`}>{v.text}</span>
              </Link>
            </Col>
          )
        })}
      </Row>
      {/* 搜尋商品 */}
      <Row className="nowrap  ">
        <Col>
          <ShopSearchBar />
        </Col>
      </Row>

      {/* 熱銷title */}
      <Row className="nowrap mb50px">
        <Col>
          <ShopTitle text="熱銷TOP10" lineColor="hot_pink" />
        </Col>
      </Row>

      {/* Products */}
      {data.map((v, i) => {
        return (
          i != 0 && (
            <ProductsCarousel key={i} text={v.text} color={v.color} i={i} />
          )
        )
      })}
    </Container>
  )
}
