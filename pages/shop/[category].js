import { useRouter } from 'next/router'
import styles from './category.module.sass'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
import ShopTitle from '@/components/common/title/ShopTitle'


export default function Category() {
  const router = useRouter();
  const { category, data } = router.query;
  const parsedData = JSON.parse(data);
  const categoryData = parsedData.find((item) => item.id === category);

  const imgSrc = []
  const path = ``
  for (let i = 1; i <= 54; i++) {
    const imagePath = require(`@/public/img/${category}/yolk_pie/yolk_pie (${i}).png`)
    imgSrc.push(imagePath.default)
  }
  
  const chunkArray = (arr, size) => {
    const chunks = []
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size))
    }
    return chunks
  }
  const imgChunks = chunkArray(imgSrc, 5)

  return (
    <Container className={`${styles.container}`}>
      {/* Title */}
      <ShopTitle text={categoryData.text  } lineColor='green'/>
      {/* 商品 */}
      {imgChunks.map((chunk, rowIndex) => (
        <Row key={rowIndex} className={`${styles.row}`}>
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
