import Image from 'next/image'
import Link from 'next/link'
import styles from './ShopProductsCard.module.sass'

// svg
import heart_fill from '@/assets/heart_fill.svg'
import heart_outline from '@/assets/heart_outline.svg'
import cart_fill from '@/assets/cart_fill.svg'
import cart_outline from '@/assets/cart_outline.svg'
import cart_noStock from '@/assets/cart_noStock.svg'
import loading from '@/assets/loading.gif'

//hooks
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import { useClick } from '@/hooks/useClick.js'
import { css, keyframes } from '@emotion/css'
import CartCountContext from '@/contexts/CartCountContext'
import CartDataContext from '@/contexts/CartDataContext'

//components
import Stars from '@/components/common/stars'
import Alert from '@/components/common/alert'

export default function ShopProductsCard({
  src,
  text = '洋芋片',
  category = 'cookies',
  price = 100,
  pid = 1,
  stars = 5,
  stock_num = 10,
  keyword = '',
  state = false,
}) {
  const router = useRouter()
  const { cartCount, setCartCount, getCartCount } = useContext(CartCountContext)
  const { cartData, setCartData, getCartData } = useContext(CartDataContext)

  //判斷hover
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHoverIndex(-1)
  const isHeartHovered = hoveredIndex === 1
  const isCartHovered = hoveredIndex === 2

  //判斷有無點擊收藏和購物車
  const {
    clickState: heartClickState,
    handleClick: handleHeartClick,
    setClickState: setHeartClickState,
  } = useClick({ state })

  useEffect(() => {
    if (heartClickState != state) {
      setHeartClickState(state)
    }
  }, [state])

  const foundCart = cartData.some((v) => v.pid === pid)

  const {
    clickState: cartClickState,
    handleClick: handleCartClick,
    setClickState: setClickState,
  } = useClick(foundCart)

  useEffect(() => {
    if (cartClickState != foundCart) {
      setHeartClickState(foundCart)
    }
  }, [foundCart])

  //購物車彈跳＋1動畫
  const [animationEnd, setAnimationEnd] = useState(false)
  const y = 0
  const y2 = y - 25
  const y3 = y - 10
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
  const addToCart = () => {
    const addData = { count: 1, pid: pid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/cart`, {
        method: 'POST',
        body: JSON.stringify({ requestData: addData }),
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

  // 加入喜好商品
  const addToFav = () => {
    const addData = { pid: pid }
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
    const deletedData = { pid: pid }
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

  const regex = new RegExp(keyword, 'gi')
  const hightlight = `<span style="background:#F4E62A
  ">${keyword}</span>`
  const result = text.replace(regex, hightlight)

  const browse = () => {
    // 瀏覽量加一
    fetch(`${process.env.API_SERVER}/shop/${category}/${pid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {})
  }

  // for alert
  const [isOpen, setIsOpen] = useState(false)
  const [reset, setReset] = useState(true)
  // let handleReset = () => {}
  // useEffect(() => {
  //   handleReset = () => {
  //     const timer = setTimeout(() => {
  //       setReset(!reset)
  //     }, 1500) // 3000毫秒 = 3秒

  //     return () => {
  //       clearTimeout(timer) // 清除定时器，以防组件卸载时触发
  //     }
  //   }
  // }, [router.query])

  useEffect(() => {
    if (isOpen) setIsOpen(false)
  }, [reset])

  return (
    <div className={`${styles.container}  p30px`}>
      {/* 產品圖 */}
      <div
        role="presentation"
        onClick={() => {
          browse()
        }}
      >
        <Link href={`/shop/${category}/${pid}`}>
          <Image
            src={src}
            alt="product"
            width={150}
            height={150}
            className={`${styles.img} shadow mb20px`}
          ></Image>
        </Link>
      </div>
      {/* 分隔線 */}
      <div className={`${styles.line} w180px h3px`}></div>
      {/* 標題 */}
      <div
        role="presentation"
        onClick={() => {
          browse()
        }}
      >
        <Link href={`/shop/${category}/${pid}`} className="link">
          <div className={`${styles.flexStart} mt15px fwBold fs18px`}>
            <div
              className={`${styles.textContainer} w180px h55px`}
              id="text"
              dangerouslySetInnerHTML={{ __html: result }}
            ></div>
          </div>
        </Link>
      </div>
      {/* 星星 */}
      <div className={`${styles.flexStart} mt15px`}>
        <Stars width={20} stars={stars} />
      </div>
      {/* 價格+icons */}
      <div className={`${styles.alert}`}>
        <div
          className={css({
            display: animationEnd && cartClickState ? '' : 'none',
            width: 180,
            height: 30,
            position: 'absolute',
            marginLeft: 160,
            color: '#363636',
            animation: `${bounce} 1s ease-out 1`,
            transformOrigin: 'center bottom',
            fontSize: 14,
            letterSpacing: 2,
          })}
        >
          +1
        </div>
      </div>
      <div className={`${styles.flexBetween}`}>
        {/* 價格 */}
        <span className={`${styles.inlineBlock} fs20px fwBold`}>${price}</span>
        <span className={`${styles.inlineBlock} ${styles.icons}`}>
          {/* 愛心 */}
          <span
            role="presentation"
            onClick={() => {
              heartClickState ? deleteFromFav() : addToFav()
              handleHeartClick()
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className={`${styles.inlineBlock} me5px`}
          >
            <Image
              src={
                heartClickState || isHeartHovered ? heart_fill : heart_outline
              }
              alt=""
              width={20}
            />
          </span>
          {/* 購物車 */}
          <span
            role="presentation"
            onClick={() => {
              if (stock_num != 0) {
                !foundCart && handleCartClick()
                handleAnimationEnd()
                addToCart()
              } else {
                // handleReset()
                setIsOpen(true)
              }
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            className={`${styles.inlineBlock}`}
          >
            {isOpen ? (
              <Alert
                isOpen={isOpen}
                text={'沒有庫存了！'}
                status="wrong"
                setIsOpen={setIsOpen}
              />
            ) : (
              ''
            )}
            <Image
              src={
                stock_num === 0
                  ? cart_noStock
                  : isCartHovered || cartClickState
                  ? cart_fill
                  : cart_outline
              }
              alt="cart"
              width={25}
            />
          </span>
        </span>
      </div>
    </div>
  )
}
