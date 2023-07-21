import Image from 'next/image'
import styles from './pid.module.sass'

// hooks
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import { useClick } from '@/hooks/useClick.js'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import Marquee from '@/components/common/marquee'
import Title from '@/components/common/title'
import DetailsRoute from '@/components/common/shopTop/detailsRoute'
import Button from '@/components/common/button'

// svg
import heart_fill from '@/assets/heart_fill.svg'
import heart_outline from '@/assets/heart_outline.svg'
import add from '@/assets/add.svg'
import minus from '@/assets/minus.svg'
import monkey from '@/assets/monkey.svg'
import buy from '@/assets/buy.svg'
import inStock from '@/assets/in_stock.svg'
import emptyStock from '@/assets/empty_stock.svg'

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
            <div className={`${styles.detailsContainer}`}>
              {/* 商品名稱 */}
              <div className="fwBold fs27px mb30px">{data?.product_name}</div>
              {/* 商品價格 */}
              <div className="fwBold fs27px mb30px">${data?.product_price}</div>
              {/* 分隔線 */}
              <div className={`${styles.line}`}></div>
              {/* 商品描述 */}
              <div className="fs20px mt30px">
                <div
                  dangerouslySetInnerHTML={{
                    __html: replaceWhiteSpace(data.product_details),
                  }}
                />
              </div>
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
            <div className={`${styles.add} fs24px mb50px pt10px pb10px`}>
              {/* － */}
              <Image src={minus} width={30} className={`${styles.button}`}
               style={{ cursor: data?.stock_num !== 0 ? 'pointer' : 'default' }}
              onClick={()=>{ 
                if(count<=1){setCount(1)}else{setCount(count-1)}}} />
               {/* 數量 */}
               <input type='text' 
               inputmode="numeric"
               value={data?.stock_num ? count : 0} 
               className={`${styles.addValue} fs16px `} 
               onChange={(e)=>{
                if(!isNaN(e.target.value) && e.target.value!=0){
                  if(Number(e.target.value) > data?.stock_num){
                    setCount(Number(data?.stock_num))
                  }else{
                    setCount(Number(e.target.value))
                  }
                }else{
                  setCount(Number(count))
                }
                }}
                readOnly={data?.stock_num === 0}
                >
               </input>
              <Image src={add} width={30} className={`${styles.button}`} 
               style={{ cursor: data?.stock_num !== 0 ? 'pointer' : 'default' }}
              onClick={()=>{
                if(count >= data?.stock_num){
                  setCount(data?.stock_num)
                }else{
                  setCount(count+1)
                }
                }} />
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
            <div className={`${styles.detailsData}`}>
              <div className={`${styles.flex_row} fs20px mt50px pb30px`}>
                <Image src={monkey} width={30} height={30}/>
                　瀏覽量　{data?.browse_num} /次
              </div>

              <div className={`${styles.flex_row} fs20px pb30px`}>
                <Image src={buy } width={30} height={30} />
                　購買人數　{data?.purchase_num} /人
              </div>

              <div className={`${styles.flex_row} fs20px pb30px`}>
                <Image src={emptyStock} width={30} height={30}/>
                　庫存　{data?.stock_num} /個
              </div>
            </div>
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
