import Image from 'next/image'
import styles from './pid.module.sass'

//hooks
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import { useClick } from '@/hooks/useClick.js'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

//components
import Marquee from '@/components/common/marquee'
import Title from '@/components/common/title'
import DetailsRoute from '@/components/common/shopTop/detailsRoute'
import Button from '@/components/common/button'
import heart_fill from '@/assets/heart_fill.svg'
import heart_outline from '@/assets/heart_outline.svg'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Pid() {
  const router = useRouter()
  const currentPath = router.asPath
  const [data, setData] = useState()
  const [rows, setRows] = useState()
  const [count, setCount] = useState(1)
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHoverIndex(-1)
  const isHeartHovered = hoveredIndex === 1

  //判斷有無點擊收藏和購物車
  const { clickState: heartClickState, handleClick: handleHeartClick } =
    useClick(false)

  // 抓資料
  useEffect(() => {
    fetch(`${process.env.API_SERVER}${currentPath}`)
      .then((r) => r.json())
      .then((data) => {
        // 單筆pid資料
        setData(data.data[0])
        // console.log(data.data[0])
        // 相關推薦
        setRows(data.rows)
        // console.log(data.rows)
      })
  }, [currentPath])

  // 防呆
  if (!data || !data.product_details) {
    return <div>product details Not found</div>
  }

  // 商品描述格式調整
  const replaceWhiteSpace = (productDetails) => {
    const symbolsToCheck = '●★◆＊'
    const hasSymbols = new RegExp(`[${symbolsToCheck}]`).test(productDetails)

    const lineBreakReplacement = hasSymbols ? '<br /><br />' : '<br /><br />'

    const result = productDetails
      .replace(`\\r\\n`, lineBreakReplacement)
      .replace(/\r\n(?=★)/g, lineBreakReplacement)
      .replace(/★([^★]+)★/g, (match, group) => {
        const withoutLineBreak = group.replace(`\\r\\n`, '<br />')
        return `${withoutLineBreak}`
      })
      .replace(/[●★◆]/g, `<br />★　`)
      // .replace(/(\d+)\./g, '<br />★　')

      .replace(/[。!]/g, (match) => `${match}<br /><br />`)
      .replace(/＊必買原因＊/g, '<br /><br />＊必買原因＊<br />')
      .replace(/＊必吃原因＊/g, '<br /><br />＊必吃原因＊<br />')
    return result
  }

  return (
    <>
      <Container>
        {/* 路由 */}
        <DetailsRoute
          category={data?.category_name}
          product_name={data?.product_name}
        />
        <Row className="nowrap ">
          <Col className={` ${styles.container} ${styles.flex_col}`}>
            {/* 商品名稱 */}
            <div className="fwBold fs27px mb30px">{data?.product_name}</div>
            {/* 商品價格 */}
            <div className="fwBold fs27px mb30px">${data?.product_price}</div>
            {/* 分隔線 */}
            <div className={`mb30px ${styles.line}`}></div>
            {/* 商品描述 */}
            <div className="fs20px mb30px">
              <div
                dangerouslySetInnerHTML={{
                  __html: replaceWhiteSpace(data.product_details),
                }}
              />
            </div>
          </Col>
          <Col className={`${styles.container}`}>
            <div className={`${styles.imgContainer}`}>
              {/* 產品圖 */}
              <Image
                src={`/${data?.image}`}
                alt="details"
                width={450}
                height={450}
                className={`shadow`}
              />
            </div>
          </Col>
          <Col className={`${styles.container} ${styles.flex_col}`}> 
            <div className={`${styles.add} fs24px mb50px`}>
              {/* － */}
              <button className={`${styles.button}`}
              onClick={()=>{ 
                if(count<=1){setCount(1)}else{setCount(count-1)}}}>–</button> 
               {/* 數量 */}
                {count} 
              <button className={`${styles.button}`} 
              onClick={()=>{setCount(count+1)}}>＋</button> 
            </div>
            {/* 加入購物車 & 收藏 */}
            <div className= {`${styles.flex_row}`}>
              <Button
                text="加入購物車"
                btnColor="black"
                width=""
                padding="15px 60px"
                fontSize="20px"
              />
              {/* 愛心 */}
              <span
                onClick={handleHeartClick}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                className={`${styles.inlineBlock} ms30px`}
              >
                <Image
                  src={
                    isHeartHovered || heartClickState ? heart_fill : heart_outline
                  }
                  alt=""
                  width={30}
                />
              </span>
            </div>
           
            {/* 其他描述 */}
            <div className={`fs20px`}>瀏覽量：{data?.browse_num}</div>
            <div className={`fs20px`}>購買人數：{data?.purchase_num}</div>
            <div className={`fs20px`}>庫存：{data?.stock_num}</div>
          </Col>
        </Row>
        {/* 跑馬燈 */}
        <Row>
          <Marquee data={rows ? rows : []} />
        </Row>
        <Title text="商品評價" text2="products rewiews" />
      </Container>
    </>
  )
}
