import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import Image from 'react-bootstrap/Image'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src="../../assets/ba.svg"
            width="77"
            height="77"
            roundedCircle
            alt="test"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default ShapeExample
