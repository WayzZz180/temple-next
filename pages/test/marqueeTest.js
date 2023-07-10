import ShopMarqueeCard from '@/components/common/cards/ShopMarqueeCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Marquee() {
  return (
    <>
      <Container>
        <Row>
          <div className="flex">
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
          </div>
        </Row>
        <Row>
          <div className="flex">
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
          </div>
        </Row>
        <Row>
          <div className="flex">
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
            <Col>
              <ShopMarqueeCard name="樂事" price={80} />
            </Col>
          </div>
        </Row>
      </Container>
      <style>
        {`
        .flex{
          display:flex;
          height:100%
          flex-direction:row;
        }
        .border{
          border:1px red solid
        }
        `}
      </style>
    </>
  )
}
