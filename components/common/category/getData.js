import styles from './style.module.sass'

// hooks
import { useRouter } from 'next/router'
import usePath from '@/hooks/usePath.js'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
import Pagination from '@/components/common/pagination'

export default function GetData({data=[], pagination=[]}) {
  const router = useRouter()
  const { category, page, keyword } = router.query //抓出類別

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

  

  return (
     <>
      {/* 商品 */}
      {
      imgChunks?.map((chunk, rowIndex) => (
        <Row key={rowIndex} className={`${styles.row}`}>
          {chunk.map((src, colIndex) => {
            const products = data[colIndex + rowIndex * 5]
            return (
              <Col key={colIndex}>
                <ShopProductsCard
                  src={src}
                  text={products?.product_name}
                  price={products?.product_price}
                  category={category}
                  pid={products?.pid}
                  stars={products?.stars}
                  stock_num={products?.stock_num}
                />
              </Col>
            )
          })
          }
        </Row>
      ))
      }
      <Pagination pagination={pagination}/>
  </>

  )
}
