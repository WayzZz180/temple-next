import styles from './category.module.sass'
import Link from 'next/link'
import Image from 'next/image'

// hooks
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import usePath from '@/hooks/usePath.js'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import ShopTop from '@/components/common/shopTop'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
import ShopTitle from '@/components/common/title/ShopTitle'
import TitleData from '@/components/mydata/productsTitleData'
import DropDownMenu from '@/components/common/dropDownMenu'
import Pagination from '@/components/common/pagination'

export default function Category() {
  const router = useRouter()
  const { category } = router.query //抓出類別
  const usp = new URLSearchParams(router.asPath.split('?')[1])
  const pageParams = usp.toString()
  const categoryData = TitleData.find((item) => item.id === category)
  // const [keyword, setKeyword] = useState('')
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState([])

  useEffect(() => {
    if (!category) return
    const reqPage = { page: false }
    // fetch(`${process.env.API_SERVER}/shop/${category}?${pageParams}}` , {
    //   method: 'POST',
    //   body: JSON.stringify({ requestData: reqPage }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then((r) => r.json())
    // .then((data) => {
    //   if (data.redirect) {
    //     router.push(data.redirect)
    //   } else {
    //     setData(data.data)
    //     setPagination(data.pagination)
    //   }
    // })
    fetch(`${process.env.API_SERVER}/shop/${category}?${pageParams}}`)
    .then((r) => r.json())
    .then((data) => {
      if (data.redirect) {
        router.push(data.redirect)
      } else {
        setData(data.data)
        setPagination(data.pagination)
      }
    })
   
  }, [router.query])

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

  //要篩選的資料
  const info = [
    {
      title: true,
      content: '每頁顯示/',
    },
    {
      content: '25筆',
    },
    {
      content: '50筆',
    },
    {
      content: '100筆',
    },
    {
      title: true,
      content: '依照/',
    },
    {
      content: '熱門程度排序',
    },
    {
      content: '價錢排序',
    },
    {
      content: '星星排序',
    },
  ]

  if (!data) return <p>Loading...</p>

  return (
    <Container className={`${styles.container}`}>
      <ShopTop />
      {/* Title */}
      <div className={`${styles.menuContainer}`}>
        <ShopTitle
          text={categoryData?.text}
          lineColor="green"
          link={`/shop/cookies`}
        />
        {/* 篩選｜排列 */}
        <span className={`${styles.menu}`}>
          <DropDownMenu info={info} />
        </span>
      </div>
      {/* 商品 */}
      {imgChunks?.map((chunk, rowIndex) => (
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
          })}
        </Row>
      ))}
      <Pagination pagination={pagination} path={`/shop/${category}?page=`} api={`/shop/${category}`}/>
    </Container>
  )
}
