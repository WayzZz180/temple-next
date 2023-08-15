import styles from './style.module.sass'
import Head from 'next/head'
// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import usePath from '@/hooks/usePath.js'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
import Pagination from '@/components/common/pagination'

export default function GetData({
  data = [],
  pagination = [],
  encode = '',
  pidArr = [],
}) {
  const router = useRouter()
  const { category } = router.query //抓出類別
  const [keyword, setKeyword] = useState(encode)

  // 商品圖片
  const { imgSrc } = usePath(data)
  const chunkArray = (arr, size) => {
    const chunks = []
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size))
    }
    return chunks
  }
  const imgChunks = chunkArray(imgSrc, 5)
  useEffect(() => {
    if (encode) {
      setKeyword(encode)
    }
  }, [encode])
  useEffect(() => {
    if (localStorage.getItem('keyword')) {
      if (encode) {
        setKeyword(encode)
      } else {
        setKeyword(localStorage.getItem('keyword'))
      }
    } else {
      setKeyword('')
    }
  }, [router.query])
  return (
    <>
      {/* 商品 */}
      {imgChunks?.map((chunk, rowIndex) => (
        <Row key={rowIndex} className={`${styles.row}`}>
          {chunk.map((src, colIndex) => {
            const products = data[colIndex + rowIndex * 5]
            const foundItem = pidArr.some((v) => v.pid === products?.pid)
            return (
              <Col key={products?.pid}>
                <ShopProductsCard
                  src={src}
                  text={products?.product_name}
                  price={products?.product_price}
                  category={category}
                  pid={products?.pid}
                  stars={products?.stars}
                  stock_num={products?.stock_num}
                  keyword={keyword}
                  state={foundItem}
                />
              </Col>
            )
          })}
        </Row>
      ))}
      <Pagination pagination={pagination} />
    </>
  )
}
