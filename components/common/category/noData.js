import styles from './style.module.sass'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function NoData() {
  return (
    <Row className="nowrap">
      <Col className={`${styles.noData} mt100px fs24px`}>
        物即是空，空即是物
        <div className={`${styles.line} mt100px`}></div>
      </Col>
    </Row>
  )
}
