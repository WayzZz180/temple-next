import styles from './category.module.sass'

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
  const { category, page } = router.query //抓出類別
  // console.log(page);
  const usp = new URLSearchParams(router.asPath.split('?')[1])
  const pageParams = usp.toString()
  const categoryData = TitleData.find((item) => item.id === category)
  // const [keyword, setKeyword] = useState('')
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState([])
  const [dataFromChild, setDataFromChild] = useState([])
  //要篩選的資料
  let info = [
    {
      title: true,
      content: '• 每頁顯示 •',
    },
    {
      content: '20筆',
      perPage: 20,
      status: false,
    },
    {
      content: '50筆',
      perPage: 50,
      status: false,
    },
    {
      content: '100筆',
      perPage: 100,
      status: false,
    },
    {
      title: true,
      content: '• 依照 •',
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
  
  useEffect(() => {
    if(!category) return
    const reqData = {page: page, perPage: dataFromChild?.perPage ? dataFromChild.perPage : 20}
  

    fetch(`${process.env.API_SERVER}/shop/${category}`, {
        method: 'POST',
        body: JSON.stringify({ requestData: reqData }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((r) => r.json())
      .then((data) => {
        if (data.redirect) {
          router.push(data.redirect)
        } else {
            setData(data.data)
            setPagination(data.pagination)
          }
        
      })
    
  }, [dataFromChild,router.query])

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


  if (!data) return <p>Loading...</p>


  info = info.map((v) => {
    if (v.perPage === (dataFromChild?.perPage ? dataFromChild.perPage :20)) {
      return { ...v, status: true };
    } else {
      return v;
    }
  });


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
          <DropDownMenu text=" 篩選｜排列 " info={info} category={category}  setDataFromChild={setDataFromChild}/>
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
