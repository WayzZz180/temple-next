import syles from './complete.module.sass'
// components
import ShopStepBar from "@/components/common/bar/ShopStepBar"

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function OrderComplete() {
  return (
    <>
    <Container>
      {/* Step */}
      <Row>
        <Col>
          <ShopStepBar path='/shop/order/complete'/>
        </Col>
      </Row>
    </Container>
    </>
  )
}
