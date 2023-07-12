import styles from './imgTest.module.sass'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'

const imgSrc = []

for (let i = 1; i <= 31; i++) {
  const imagePath = require(`@/public/img/cookies/pancake/pancake (${i}).png`)
  imgSrc.push(imagePath.default)
}

const chunkArray = (arr, size) => {
  const chunks = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

export default function ImgTest() {
  const imgChunks = chunkArray(imgSrc, 5)

  return (
    <Container className={`${styles.container}`}>
      {imgChunks.map((chunk, rowIndex) => (
        <Row key={rowIndex} className={`${styles.row} border`}>
          {chunk.map((src, colIndex) => (
            <Col key={colIndex} className={``}>
              <ShopProductsCard src={src} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  )
}
