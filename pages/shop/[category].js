import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from './category.module.sass'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
import ShopTitle from '@/components/common/title/ShopTitle'
import usePath from '@/hooks/usePath.js'
import TitleData from '@/components/mydata/productsTitleData'

export default function Category() {
  const router = useRouter()
  const { category } = router.query //抓出類別
  const categoryData = TitleData.find((item) => item.id === category)
  // const products = [
  //   {
  //     category: 'cookies',
  //     details: [
  //       'chips',
  //       'crisps',
  //       'milk_crackers',
  //       'oodles',
  //       'pancake',
  //       'puffs',
  //       'shaqima',
  //       'soda_crackers',
  //       'yolk_pie',
  //     ],
  //   },
  //   {
  //     category: 'candy',
  //     details: ['candy', 'chocolate', 'fudge', 'soft', 'throat'],
  //   },
  //   {
  //     category: 'drinks',
  //     details: [
  //       'black_tea',
  //       'eight',
  //       'green_tea',
  //       'juice',
  //       'oolong',
  //       'soda',
  //       'water',
  //     ],
  //   },
  //   {
  //     category: 'gifts',
  //     details: ['cow', 'floss', 'gong', 'pineapple', 'yolk'],
  //   },
  //   {
  //     category: 'salty',
  //     details: ['can', 'instant_noodles', 'peanut'],
  //   },
  // ]

  // const [keyword, setKeyword] = useState('')
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`${process.env.API_SERVER}/shop/${category}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [router.query])

  const { imgSrc } = usePath(data)
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
      <ShopTitle text={categoryData?.text} lineColor="green" />
      {/* 商品 */}
      {imgChunks.map((chunk, rowIndex) => (
        <Row key={rowIndex} className={`${styles.row}`}>
          {chunk.map((src, colIndex) => {
            const product = data[colIndex + rowIndex * 5] // 获取对应索引的产品数据
            return (
              <Col key={colIndex} className={``}>
                <ShopProductsCard
                  src={src}
                  text={product.product_name} // 传递product_name
                  price={product.product_price} // 传递product_price
                />
              </Col>
            )
          })}
        </Row>
      ))}
    </Container>
  )
}
