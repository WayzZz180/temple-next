import styles from './complete.module.sass'
// components
import ShopStepBar from "@/components/common/bar/ShopStepBar"
import OrderSummaryCard from '@/components/common/cards/orderSummaryCard'
import BuyContent from '@/components/common/orderDetails/buyContent'

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
      <Row className="mt134px">
        <OrderSummaryCard />
      </Row>
      <div className={`${styles.contentContainer}`}>
      <BuyContent />
      </div>
    </Container>
    </>
  )
}
