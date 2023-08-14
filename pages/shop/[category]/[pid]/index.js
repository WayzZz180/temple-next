import Image from 'next/image'
import styles from './pid.module.sass'
import Head from 'next/head'

// hooks
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import { useClick } from '@/hooks/useClick.js'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { css, keyframes } from '@emotion/css'
import CartCountContext from '@/contexts/CartCountContext'
import CartDataContext from '@/contexts/CartDataContext'

// components
import Marquee from '@/components/common/marquee'
import Title from '@/components/common/title'
import DetailsRoute from '@/components/common/shopTop/detailsRoute'
import Button from '@/components/common/button'
import NoButton from '@/components/common/button/noButton'
import Comment from '@/components/common/cards/ShopCommentCard'
import Stars from '@/components/common/stars'
import Alert from '@/components/common/alert'

// svg
import cart_fill from '@/assets/cart_fill.svg'
import cart_outline from '@/assets/cart_outline.svg'
import cart_noStock from '@/assets/cart_noStock.svg'
import heart_fill from '@/assets/heart_fill.svg'
import heart_outline from '@/assets/heart_outline.svg'
import add from '@/assets/add.svg'
import minus from '@/assets/minus.svg'
import monkey from '@/assets/monkey.svg'
import buy from '@/assets/buy.svg'
import inStock from '@/assets/inStock.svg'
import emptyStock from '@/assets/emptyStock.svg'
import Loading from '@/components/common/loading'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Pid() {
  const { cartCount, setCartCount, getCartCount } = useContext(CartCountContext)
  const { cartData, setCartData, getCartData } = useContext(CartDataContext)
  const router = useRouter()
  const currentPath = router.asPath
  const [data, setData] = useState()
  const [related, setRelated] = useState()
  const [count, setCount] = useState(1)
  const [animationEnd, setAnimationEnd] = useState(false)
  const [pidArr, setPidArr] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  //判斷有無 Hover
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHoverIndex(-1)
  const isHeartHovered = hoveredIndex === 1
  const isCartHovered = hoveredIndex === 2
  useClick(false)

  // 商品資料
  useEffect(() => {
    fetch(`${process.env.API_SERVER}${currentPath}`)
      .then((r) => r.json())
      .then((data) => {
        // 單筆pid資料
        setData(data.data[0])
        // 相關推薦
        setRelated(data.related)
        // 重置數量
        setCount(1)
      })

    // 判斷有沒有加入收藏
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

  // 查看有無喜好商品
  const foundFav = pidArr?.some((v) => v.pid === Number(router.query.pid))
  const foundCart = cartData.some((v) => v.pid === Number(router.query.pid))
  // console.log(foundCart);

  //判斷有無點擊收藏和購物車
  const {
    clickState: heartClickState,
    handleClick: handleHeartClick,
    setClickState: setHeartClickState,
  } = useClick(foundFav)
  const {
    clickState: cartClickState,
    handleClick: handleCartClick,
    setClickState: setCartClickState,
  } = useClick(foundCart)

  // 確定喜好商品狀態
  useEffect(() => {
    if (foundFav != heartClickState) {
      setHeartClickState(foundFav)
    }
  }, [foundFav])

  // 確定購物車狀態
  useEffect(() => {
    if (foundCart != cartClickState) {
      setCartClickState(foundCart)
    }
  }, [foundCart])

  // 防呆
  if (!data) return <Loading />

  // 商品描述格式調整
  const replaceWhiteSpace = (productDetails) => {
    const symbolsToCheck = '●★◆＊'
    const hasSymbols = new RegExp(`[${symbolsToCheck}]`).test(productDetails)

    const lineBreakReplacement = hasSymbols ? '<br /><br />' : '<br /><br />'

    const result = productDetails
      .replace(/\?/g, '')
      .replace(`\\r\\n`, lineBreakReplacement)
      .replace(/\r\n(?=★)/g, lineBreakReplacement)
      .replace(/★([^★]+)★/g, (match, group) => {
        const withoutLineBreak = group.replace(`\\r\\n`, '<br />')
        return `${withoutLineBreak}`
      })
      .replace(/[●★◆]/g, `<br />★　`)
      .replace(/[。]/g, (match) => `${match}<br /><br />`)
      .replace(/＊必買原因＊/g, '<br /><br />＊必買原因＊<br />')
      .replace(/＊必吃原因＊/g, '<br /><br />＊必吃原因＊<br />')
    return result
  }

  // 購物車彈跳動畫
  const y = 0
  const y2 = y - 30
  const y3 = y - 15
  const y4 = y - 4
  const x = 0
  const bounce = keyframes({
    'from, 20%, 53%, 80%, to': {
      transform: `translate3d(${x}px,${y}px,0)`,
    },
    '40%, 43%': {
      transform: `translate3d(${x}px, ${y2}px, 0)`,
    },
    '70%': {
      transform: `translate3d(${x}px, ${y3}px, 0)`,
    },
    '90%': {
      transform: `translate3d(${x}px, ${y4}px, 0)`,
    },
  })

  const handleAnimationEnd = () => {
    setAnimationEnd(true)
    setTimeout(() => {
      setAnimationEnd(false)
    }, 1200)
  }

  // 加入購物車
  const addToCart = (count) => {
    const reqData = { count: count, pid: router.query.pid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/cart`, {
        method: 'POST',
        body: JSON.stringify({ requestData: reqData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          getCartData()
          getCartCount()
        })
    }
  }

  // 加入瀏覽紀錄
  const insertHistory = () => {
    const addData = { pid: router.query.pid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/history`, {
        method: 'POST',
        body: JSON.stringify({ requestData: addData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {})
    }
  }
  insertHistory()

  // 加入喜好商品
  const addToFav = () => {
    const addData = { pid: router.query.pid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/favorite`, {
        method: 'POST',
        body: JSON.stringify({ requestData: addData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {})
    }
  }

  // 刪除喜好商品
  const deleteFromFav = () => {
    const deletedData = { pid: router.query.pid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/favorite`, {
        method: 'DELETE',
        body: JSON.stringify({ requestData: deletedData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {})
    }
  }
  return (
    <>
      <Head>
        <title>{data?.product_name}</title>
      </Head>

      {isOpen ? (
        <Alert
          status="wrong"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text="沒有庫存了！"
        />
      ) : (
        ''
      )}
      <Container className={'mb125px'}>
        {/* 路由 */}
        <DetailsRoute
          category={data?.category_name}
          product_name={data?.product_name}
        />
        <Row className="nowrap">
          {/* Left */}
          <Col className={` ${styles.container} ${styles.flex_col}`}>
            <div className={`${styles.detailsContainer}`}>
              {/* 商品名稱 */}
              <div className="fwBold fs27px mb30px">{data?.product_name}</div>
              {/* 商品價格 */}
              <div className="fwBold fs27px">${data?.product_price}</div>
              {/* 分隔線 */}
              <div className={`${styles.line} mt30px pt3px mb30px`}></div>
              {/* 商品描述 */}
              <div className="fs20px">
                <div
                  dangerouslySetInnerHTML={{
                    __html: replaceWhiteSpace(data.product_details),
                  }}
                />
              </div>
            </div>
          </Col>
          {/* Middle */}
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
          {/* Right */}
          <Col className={`${styles.container} ${styles.flex_col} `}>
            <div className={``}>
              {/* 選擇數量 */}
              <div className={`${styles.add} fs24px mb35px `}>
                {/* － */}
                <Image
                  src={minus}
                  width={30}
                  alt="minus"
                  className={`${styles.button}`}
                  style={{
                    cursor: data?.stock_num !== 0 ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (count <= 1) {
                      setCount(1)
                    } else {
                      setCount(count - 1)
                    }
                  }}
                />
                {/* 數量 */}
                <input
                  type="text"
                  inputmode="numeric"
                  value={data?.stock_num ? count : 0}
                  className={`${styles.addValue} fs16px `}
                  onChange={(e) => {
                    if (!isNaN(e.target.value) && e.target.value != 0) {
                      if (Number(e.target.value) > data?.stock_num) {
                        setCount(Number(data?.stock_num))
                      } else {
                        setCount(Number(e.target.value))
                      }
                    } else {
                      setCount(Number(count))
                    }
                  }}
                  readOnly={data?.stock_num === 0}
                ></input>
                <Image
                  src={add}
                  width={30}
                  alt="add"
                  className={`${styles.button}`}
                  style={{
                    cursor: data?.stock_num !== 0 ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (count >= data?.stock_num) {
                      setCount(data?.stock_num)
                    } else {
                      setCount(count + 1)
                    }
                  }}
                />
              </div>
              {/* 加入購物車 & 收藏 */}
              {/* 購物車 */}
              <div
                role="presentation"
                className={`${styles.flex_row} mb35px `}
                onClick={() => {
                  if (data?.stock_num != 0) {
                    cartClickState ? '' : handleCartClick()
                    handleAnimationEnd()
                  } else {
                    setIsOpen(true)
                  }
                }}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                {data?.stock_num === 0 ? (
                  <NoButton
                    text="加入購物車"
                    btnColor="black"
                    width="275px"
                    padding="15px 60px"
                    fontSize="20px"
                    hoverColor="hot_pink"
                  />
                ) : (
                  <Button
                    text="加入購物車"
                    btnColor="black"
                    width="275px"
                    padding="15px 60px"
                    fontSize="20px"
                    hoverColor="hot_pink"
                    link={() => {
                      addToCart(count)
                    }}
                  />
                )}
                {/* 購物車 */}
                <span
                  role="presentation"
                  onClick={() => {
                    if (data?.stock_num != 0) {
                      cartClickState ? '' : handleCartClick()
                      handleAnimationEnd()
                      addToCart(count)
                    }
                  }}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                  className={`${styles.inlineBlock} ms25px`}
                >
                  <Image
                    src={
                      data?.stock_num === 0
                        ? cart_noStock
                        : isCartHovered || cartClickState
                        ? cart_fill
                        : cart_outline
                    }
                    alt="cart"
                    width={38}
                  />
                </span>
                {/* 數量alert */}
                <span
                  className={css({
                    display: animationEnd ? 'block' : 'none',
                    width: 60,
                    height: 10,
                    position: 'absolute',
                    top: 527,
                    right: 145,
                    color: '#363636',
                    animation: `${bounce} 1s ease-out 1`,
                    transformOrigin: 'center bottom',
                  })}
                >
                  + {count}
                </span>
              </div>
              {/* 收藏 */}
              <div
                role="presentation"
                className={`${styles.flex_row} mb35px `}
                onClick={handleHeartClick}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <Button
                  text={heartClickState ? '取消收藏' : '加入收藏'}
                  btnColor="black"
                  width="275px"
                  padding="15px 60px"
                  fontSize="20px"
                  link={() => {
                    heartClickState ? deleteFromFav() : addToFav()
                  }}
                />
                {/* 愛心 */}
                <span
                  role="presentation"
                  className={`${styles.inlineBlock} ms30px`}
                  onClick={() => {
                    heartClickState ? deleteFromFav() : addToFav()
                  }}
                >
                  <Image
                    src={
                      isHeartHovered || heartClickState
                        ? heart_fill
                        : heart_outline
                    }
                    alt="heart"
                    width={30}
                  />
                </span>
              </div>
              {/* 其他描述 */}
              <div className={`${styles.detailsData}`}>
                <div className={`${styles.flex_row} fs20px  pb10px`}>
                  <Image src={monkey} width={50} height={50} alt="browse" />
                  &ensp;瀏覽量 &ensp;{data?.browse_num} /次
                </div>

                <div className={`${styles.flex_row} fs20px pb10px`}>
                  <Image src={buy} width={50} height={50} alt="sales" />
                  &ensp;銷售量&ensp;{data?.purchase_num} /件
                </div>

                <div className={`${styles.flex_row} fs20px`}>
                  <Image
                    src={data?.stock_num ? inStock : emptyStock}
                    width={50}
                    height={50}
                    alt="stock"
                  />
                  &ensp;庫存&ensp;{data?.stock_num} /件
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* 跑馬燈 */}
        <Row>
          <Marquee data={related ? related : []} />
        </Row>
        {/* 商品評價 */}
        <Row>
          <Col>
            <Title text="商品評價" text2="products rewiews" />
            <div className={`${styles.stars} mt25px mb30px`}>
              <Stars stars={data?.stars} width={30} />
            </div>
          </Col>
          <Col className={`mt50px`}>
            <div className={`${styles.commentLine}`}></div>
            {/* 評價內容 */}
            <Comment num={4} />
            <Comment
              name="森上梅岱前"
              content="好吃！CP值高！"
              date="2023-07-18 12:12"
              num={5}
            />
            <Comment
              name="梅川伊芙"
              content="就算會胖還是要吃....."
              date="2023-08-12 18:20"
              num={3}
            />

            {/* 新增評論 */}
            {/* <div className={`${styles.addComment} fs20px pt50px pb50px`}>
              <input type='text' placeholder='新增評論......' 
              className={`${styles.inputComment} fs20px`} ></input>
            </div>
            <div className={`${styles.commentLine}`}></div> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}
