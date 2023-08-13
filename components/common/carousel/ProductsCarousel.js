import styles from './ProductsCarousel.module.sass'
import Image from 'next/image'
// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// hooks
import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import usePath from '@/hooks/usePath.js'
//components
import ShopCategory from '@/components/common/title/ShopCategory'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
//svg
import arrowR_outline from '@/assets/arrowR_outline.svg'
import arrowR_fill from '@/assets/arrowR_fill.svg'
import arrowL_outline from '@/assets/arrowL_outline.svg'
import arrowL_fill from '@/assets/arrowL_fill.svg'
//data
import TitleData from '@/components/mydata/productsTitleData'

export default function ProductsCarousel({ text, color, i, id }) {
  const router = useRouter()
  const reqData = TitleData.filter((v) => {
    return text === v.text
  })
  const [data, setData] = useState()
  const [pidArr, setPidArr] = useState([])

  useEffect(() => {
    localStorage.getItem('keyword') && localStorage.removeItem('keyword')

    fetch(process.env.API_SERVER + '/shop', {
      method: 'POST',
      body: JSON.stringify({ requestData: reqData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  useEffect(() => {
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/favoriteMatch`, {
        headers: {
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setPidArr(data)
        })
    }
  }, [router.query])

  const { imgSrc } = usePath(data)

  const {
    hoveredIndex: hoveredIndexLeft,
    handleMouseEnter: handleMouseEnterLeft,
    handleMouseLeave: handleMouseLeaveLeft,
  } = useHoverIndex(-1)
  const {
    hoveredIndex: hoveredIndexRight,
    handleMouseEnter: handleMouseEnterRight,
    handleMouseLeave: handleMouseLeaveRight,
  } = useHoverIndex(-1)

  // for carousel
  const [position, setPosition] = useState(0)

  return (
    // 一個類別
    <Fragment key={i}>
      {/* 類別標題 */}
      <ShopCategory text={text} color={color} link={`/shop/${id}`} />
      {/* 第一層row */}
      <Row className={`${styles.row} `}>
        {/* 左箭頭 */}
        <Image
          src={hoveredIndexLeft === i ? arrowL_fill : arrowL_outline}
          width={30}
          height={40}
          alt="arrow_left"
          onMouseEnter={() => handleMouseEnterLeft(i)}
          onMouseLeave={handleMouseLeaveLeft}
          className={`${styles.arrow} ${position <= 0 ? styles.display : ''}`}
          onClick={() => {
            position <= 0 ? setPosition(0) : setPosition(position - 1)
          }}
        />
        {/*一大個商品類別 */}
        <div className={`${styles.carousel}`}>
          <div
            className={`${styles.move} `}
            style={{ right: `${240 * position}px` }}
          >
            {/*個別商品類別 */}

            {imgSrc.map((src, i) => {
              const foundItem = pidArr.some((v) => v.pid === data[i].pid)
              return (
                <Col key={i} className={`${styles.cards}`}>
                  <ShopProductsCard
                    src={src}
                    text={data[i].product_name}
                    price={data[i].product_price}
                    pid={data[i].pid}
                    category={reqData[0].id}
                    stars={data[i].stars}
                    stock_num={data[i].stock_num}
                    state={foundItem}
                  />
                </Col>
              )
            })}
          </div>
        </div>
        {/* 右箭頭 */}

        <Image
          src={hoveredIndexRight === i ? arrowR_fill : arrowR_outline}
          width={30}
          height={40}
          alt="arrow_right"
          onMouseEnter={() => handleMouseEnterRight(i)}
          onMouseLeave={handleMouseLeaveRight}
          className={`${styles.arrow} ${position > 4 ? styles.display : ''}`}
          onClick={() => {
            position > 4 ? setPosition(5) : setPosition(position + 1)
          }}
        />
      </Row>
    </Fragment>
  )
}
