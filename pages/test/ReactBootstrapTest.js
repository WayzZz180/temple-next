import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { wrap } from 'lodash'

function AutoLayoutExample() {
  return (
    <Container>
      <Row style={{ flexWrap: nowrap }}>
        <Col xs={6}>1 of 2</Col>
        <Col xs={6}>2 of 2</Col>
      </Row>
      <Row>
        <Col xs={4}>1 of 3</Col>
        <Col xs={4}>2 of 3</Col>
        <Col xs={4}>3 of 3</Col>
      </Row>
    </Container>
  )
}

export default AutoLayoutExample
