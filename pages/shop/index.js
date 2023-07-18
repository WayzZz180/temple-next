import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.sass'
//hooks
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
// components
import ShopTop from '@/components/common/shopTop'
import ShopTitle from '@/components/common/title/ShopTitle'
import ShopSearchBar from '@/components/common/bar/ShopSearchBar'
import goldenStar_fill from '@/assets/goldenStar_fill.svg'
import goldenStar_outline from '@/assets/goldenStar_outline.svg'
import ProductsCarousel from '@/components/common/carousel/ProductsCarousel'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import data from '@/components/mydata/productsTitleData'

export default function Shop() {
  // 類別hover
  const {
    hoveredIndex: hoveredIndexStar,
    handleMouseEnter: handleMouseEnterStar,
    handleMouseLeave: handleMouseLeaveStar,
  } = useHoverIndex(-1)

  return (
    <Container className={'shopContainer'}>
      <ShopTop />

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
