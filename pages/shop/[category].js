import { useRouter } from 'next/router'
import styles from './category.module.sass'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
import ShopTitle from '@/components/common/title/ShopTitle'
import usePath from '@/hooks/usePath.js'

export default function Category() {
  const router = useRouter()
  const { category, data } = router.query
  const parsedData = JSON.parse(data)
  const categoryData = parsedData.find((item) => item.id === category)
  const products = [
    {
      category: 'cookies',
      details: [
        'chips',
        'crisps',
        'milk_crackers',
        'oodles',
        'pancake',
        'puffs',
        'shaqima',
        'soda_crackers',
        'yolk_pie',
      ],
    },
    {
      category: 'candy',
      details: ['candy', 'chocolate', 'fudge', 'soft', 'throat'],
    },
    {
      category: 'drinks',
      details: [
        'black_tea',
        'eight',
        'green_tea',
        'juice',
        'oolong',
        'soda',
        'water',
      ],
    },
    {
      category: 'gifts',
      details: ['cow', 'floss', 'gong', 'pineapple', 'yolk'],
    },
    {
      category: 'salty',
      details: ['can', 'instant_noodles', 'peanut'],
    },
  ]

  const path = products.filter((v) => v.category === { category })

  // const products_filter = products.filter((v) => {
  //   products.category === category
  // })
  const { imgSrc } = usePath(category, 'yolk_pie', 54)

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
      <ShopTitle text={categoryData.text} lineColor="green" />
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
