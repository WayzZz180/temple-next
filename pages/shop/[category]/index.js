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

// svg
import dots from '@/assets/dots.svg'
import Arrow from '@/assets/arrow_page.svg'

export default function Category() {
  const router = useRouter()
  const { category } = router.query //抓出類別
  console.log(router.query)
  const query = new URLSearchParams(router.asPath.split('?')[1])
  const categoryData = TitleData.find((item) => item.id === category)

  // const [keyword, setKeyword] = useState('')
  const [data, setData] = useState()

  useEffect(() => {
    if (!category) return
    const usp = new URLSearchParams(router.query)
    fetch(`${process.env.API_SERVER}/shop/${category}?${usp.toString()}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
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
          <DropDownMenu />
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
      <Row className="nowrap mt50px">
        <Col className={`pageContainer`}>
          {/* 分頁 */}
          <div className={`${styles.pagination} fwBolder fs18px`}>
            <Image
              src={Arrow}
              alt="arrow_left"
              className={`${styles.arrowLeft}`}
              width={30}
            />
            {/* 第一頁 */}
            <Link
              className="link"
              href={`/shop/${router.query.category}?page=1`}
            >
              <button className={`${styles.button}`} onClick={() => {}}>
                1
              </button>
            </Link>
            {/* 點點 */}
            <Image
              src={dots}
              alt="dots"
              className={`${styles.dots}`}
              width={30}
            />

            {/* 頁碼 */}
            {Array.from({ length: 5 }, (_, index) => (
              <Link
                key={index}
                className="link"
                href={'?' + new URLSearchParams(query).toString()}
              >
                <button className={`${styles.button}`} onClick={() => {}}>
                  {index + 5}
                </button>
              </Link>
            ))}

            {/* 點點 */}
            <Image
              src={dots}
              alt="dots"
              className={`${styles.dots}`}
              width={30}
            />

            {/* 最後一頁 */}
            <Link
              className="link"
              href={`/shop/${router.query.category}?page=20`}
            >
              <button className={`${styles.button}`} onClick={() => {}}>
                20
              </button>
            </Link>
            <Image
              src={Arrow}
              alt="arrow_right"
              className={`${styles.arrowRight}`}
              width={30}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

// for ($i = $page - ($totalPages - 1); $i <=  $page + ($totalPages - 1); $i++) {}
