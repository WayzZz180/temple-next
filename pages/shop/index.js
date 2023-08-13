import Head from 'next/head'
// components
import ShopTop from '@/components/common/shopTop'
import ShopTitle from '@/components/common/title/ShopTitle'
import ProductsCarousel from '@/components/common/carousel/ProductsCarousel'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// data
import data from '@/components/mydata/productsTitleData'

export default function Shop() {
  return (
    <Container className={'shopContainer'}>
      <Head>
        <title>商城首頁</title>
      </Head>
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
            <ProductsCarousel
              key={i}
              text={v.text}
              color={v.color}
              i={i}
              id={v.id}
            />
          )
        )
      })}
    </Container>
  )
}
