// import styles from './cart.module.sass'

// //hooks
// import { useState, useEffect, useContext } from 'react'
// import { useRouter } from 'next/router'
// import CartContext from '@/contexts/CartContext'

// // bootstrap
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// // components
// import ShopStepBar from '@/components/common/bar/ShopStepBar'
// import ShopCartContentCard from '@/components/common/cards/ShopCartContentCard'
// import ShopWannaBuyCard from '@/components/common/cards/ShopWannaBuyCard'
// import CartCategory from '@/components/common/button/CartCategory'
// import Button from '@/components/common/button'
// import Marquee from '@/components/common/marquee'

// export default function Cart() {
//   const router = useRouter()

//   // 購物車標題
//   const title_cart = [
//     { width: '16%', text: '商品圖片' },
//     { width: '16.8%', text: '商品名稱' },
//     { width: '11.3%', text: '單價' },
//     { width: '11.1%', text: '數量' },
//     { width: '17%', text: '小計' },
//   ]

//   // 下次再買標題
//   const title_wannaBuy = [
//     { width: '19%', text: '商品圖片' },
//     { width: '21%', text: '商品名稱' },
//     { width: '6%', text: '單價' },
//     { width: '5.5%', text: '庫存' },
//     { width: '17%', text: '加入時間' },
//   ]

//   // 回傳的資料（購物車或下次再買）
//   const [data, setData] = useState([])
//   const [wannaBuydata, setWannaBuyData] = useState([])

//   // 瀏覽紀錄資料
//   const [marquee, setMarquee] = useState([])

//   // reqData
//   const [dataFromChild, setDataFromChild] = useState({})

//   // 即時更新資料的狀態
//   const [state, setState] = useState(false)
//   const {tab} = router.query
//   // console.log(tab);
//   // id = 1 (購物車) , id = 2 (下次再買)
//   const [idFromChild, setIdFromChild] = useState(tab ? parseInt(tab) : 1);

//   // for navbar購物車數量
//   const { cartCount, setCartCount, getCartCount } = useContext(CartContext)

  
//   // 抓購物車或下次再買的資料
//   useEffect(() => {
//     // console.log(tab);
//     // console.log(idFromChild);
//     // if(tab){
//       // if(!tab) return
//       if(tab){
//         setIdFromChild(parseInt(tab))
//       }
//       // const path = idFromChild === 1 ? '/shop/cart' : '/shop/wannaBuy'

//       fetch(`${process.env.API_SERVER}/shop/cart`)
//       .then((r) => r.json())
//       .then((data) => {
//         setData(data)
//         getCartCount()
//       })

//       fetch(`${process.env.API_SERVER}/shop/wannaBuy`)
//       .then((r) => r.json())
//       .then((data) => {
//         setWannaBuyData(data)
//         getCartCount()
//       })
//   }, [state, router.query])

//   // 瀏覽紀錄
//   useEffect(() => {
//     fetch(`${process.env.API_SERVER}/shop/history`)
//       .then((r) => r.json())
//       .then((data) => {
//         setMarquee(data)
//       })
//   }, [router.query])

//   if (!data) return <p>Loading...</p>

//   // for 清空購物車
//   const pid_array = data?.map((v, i) => {
//     return v.pid
//   })

//   // 清空購物車(需要pid＿array)
//   const deleteFromCart = (pid_array) => {
//     setState(!state) // 會從購物車刪除因此要即時更新狀態
//     const deletedData = { pid: pid_array }
//     fetch(`${process.env.API_SERVER}/shop/cart`, {
//       method: 'DELETE',
//       body: JSON.stringify({ requestData: deletedData }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((r) => r.json())
//       .then((data) => {
//         getCartCount()
//       })
//   }
//   // 小計
//   const total = data?.reduce((result, v) => {
//     return result + v.product_price * v.quantity
//   }, 0)

//   // 優惠券
//   const coupon = 100

//   if (!marquee) return <p>Loading...</p>
//   // ////
//   //////

//   // console.log(tab);
//   return (
//     <>
//       <Container>
//         {/* Step */}
//         <Row>
//           <Col>
//             <ShopStepBar />
//           </Col>
//         </Row>
//         {/* 購物車、下次再買、一鍵清空 */}
//         <Row className={`${styles.row} nowrap mt100px`}>
//           <Col className={`${styles.top}`}>
//             <CartCategory
//               idFromChild={idFromChild}
//               setIdFromChild={setIdFromChild}
//             />
//           </Col>
//         </Row>
//         {/* 標題列 */}
//         <Row className="nowrap">
//           <Col className={`${styles.container} `}>
//             {(idFromChild === 1 ? title_cart : title_wannaBuy).map((v, i) => {
//               return (
//                 <span
//                   key={i}
//                   className={`${styles.title} ${
//                     i === 0 ? 'ps65px' : ''
//                   } fs20px p15px`}
//                   style={{ width: v.width }}
//                 >
//                   {v.text}
//                 </span>
//               )
//             })}
//             {/* 下次再買不顯示清空購物車 */}
//             {idFromChild === 1 ? (
//               <button
//                 className={`${styles.button} fwBold fs18px`}
//                 onClick={() => {
//                   // setDataFromChild({count:null, pid:pid_array})
//                   deleteFromCart(pid_array)
//                 }}
//               >
//                 清空購物車
//               </button>
//             ) : (
//               ''
//             )}
//           </Col>
//         </Row>
//         {/* 購物車內容 */}
//         {data?.length === 0 ? (
//           <Row className="nowrap">
//             <Col className={`${styles.insertInfo} mt100px fs24px`}>
//               {/* 快去新增幾筆商品吧！ */}
//               物即是空，空即是物
//               <div className={`${styles.line} mt100px`}></div>
//             </Col>
//           </Row>
//         ) : idFromChild === 1 ? (
//           data?.map((v, i) => (
//             <>
//               <ShopCartContentCard
//                 key={v.pid}
//                 src={`/${v.image}`}
//                 name={`${v.product_name}`}
//                 price={`${v.product_price}`}
//                 quantity={`${Number(v.quantity)}`}
//                 stock_num={`${v.stock_num}`}
//                 pid={`${v.pid}`}
//                 cid={`${v.cid}`}
//                 setState={setState}
//                 state={state}
//               />
//             </>
//           ))
//         ) : (
//           wannaBuydata?.map((v, i) => (
//             <ShopWannaBuyCard
//               key={`${v.pid}`}
//               src={`/${v.image}`}
//               name={`${v.product_name}`}
//               price={`${v.product_price}`}
//               stock_num={`${Number(v.stock_num)}`}
//               pid={`${v.pid}`}
//               cid={`${v.cid}`}
//               date={`${v.created_at}`}
//               setState={setState}
//               state={state}
//             />
//           ))
//         )}

//         {/* 明細 */}
//         {idFromChild === 1 ? (
//           <Row className="nowrap">
//             <Col className={`${styles.col} mt50px fs18px`}>
//               <div className={`${styles.detailsContainer}`}>
//                 <div className={`${styles.detailsCategory}`}>
//                   <span className={`${styles.details}`}>小計：</span>
//                   <span className={`${styles.details}`}>${total}</span>
//                 </div>
//                 <div className={`${styles.detailsCategory}`}>
//                   <span className={`${styles.details}`}>使用優惠券：</span>
//                   <span className={`${styles.details}`}>-${coupon}</span>
//                 </div>
//                 <div className={`${styles.detailsCategory} mt30px`}>
//                   <span className={`${styles.details}`}>合計：</span>
//                   <span className={`${styles.details}`}>${total - coupon}</span>
//                 </div>
//               </div>
//               <div className={`${styles.detailsButton} mt30px`}>
//                 <Button
//                   text="前往結帳"
//                   btnColor="hot_pink"
//                   width="100%"
//                   height=""
//                   padding="15px 60px"
//                   fontSize="18px"
//                   link={() => {
//                     if (data?.length != 0) {
//                       router.push('/shop/order')
//                     }
//                   }}
//                 />
//               </div>
//             </Col>
//           </Row>
//         ) : (
//           ''
//         )}
//         <Row>
//           <Marquee
//             data={marquee}
//             text="瀏覽紀錄"
//             text2="browse history"
//             lineColor="green"
//           />
//         </Row>
//       </Container>
//     </>
//   )
// }

import styles from './cart.module.sass'

//hooks
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import CartContext from '@/contexts/CartContext'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import ShopStepBar from '@/components/common/bar/ShopStepBar'
import Cart from '@/components/common/cart/cart'
import WannaBuy from '@/components/common/cart/wannaBuy'
import ShopCartContentCard from '@/components/common/cards/ShopCartContentCard'
import ShopWannaBuyCard from '@/components/common/cards/ShopWannaBuyCard'
import CartCategory from '@/components/common/button/CartCategory'
import Button from '@/components/common/button'
import Marquee from '@/components/common/marquee'

export default function IndexCart() {
  const router = useRouter()

  // 購物車標題
  const title_cart = [
    { width: '16%', text: '商品圖片' },
    { width: '16.8%', text: '商品名稱' },
    { width: '11.3%', text: '單價' },
    { width: '11.1%', text: '數量' },
    { width: '17%', text: '小計' },
  ]

  // 下次再買標題
  const title_wannaBuy = [
    { width: '19%', text: '商品圖片' },
    { width: '21%', text: '商品名稱' },
    { width: '6%', text: '單價' },
    { width: '5.5%', text: '庫存' },
    { width: '17%', text: '加入時間' },
  ]

  // 回傳的資料（購物車或下次再買）
  const [cartData, setCartData] = useState([])
  const [wannaBuyData, setWannaBuyData] = useState([])

  // 瀏覽紀錄資料
  const [marquee, setMarquee] = useState([])

  // 即時更新資料的狀態
  const [stateFromChild, setStateFromChild] = useState(false)
  const {tab} = router.query
  // id = 1 (購物車) , id = 2 (下次再買)
  const [idFromChild, setIdFromChild] = useState(tab ? parseInt(tab) : 1);

  // for navbar購物車數量
  const { cartCount, setCartCount, getCartCount } = useContext(CartContext)

  
  // 抓購物車或下次再買的資料
  useEffect(() => {
      if(tab){
        setIdFromChild(parseInt(tab))
      }

      fetch(`${process.env.API_SERVER}/shop/cart`)
      .then((r) => r.json())
      .then((data) => {
        setCartData(data)
        getCartCount()
      })

      fetch(`${process.env.API_SERVER}/shop/wannaBuy`)
      .then((r) => r.json())
      .then((data) => {
        setWannaBuyData(data)
        getCartCount()
      })
  }, [stateFromChild, router.query])

  // 瀏覽紀錄
  useEffect(() => {
    fetch(`${process.env.API_SERVER}/shop/history`)
      .then((r) => r.json())
      .then((data) => {
        setMarquee(data)
      })
  }, [router.query])

  if (!cartData) return <p>Loading...</p>
  if (!wannaBuyData) return <p>Loading...</p>

 
  if (!marquee) return <p>Loading...</p>

  // ////derrick
  // if tab===1 && return <Cart {...data}/>
  // if tab ===2 && return <WannaBuy {...wannaBuydata}/>
  //////

  // console.log(tab);
  return (
    <>
      <Container>
        {/* Step */}
        <Row>
          <Col>
            <ShopStepBar />
          </Col>
        </Row>
        {/* 購物車、下次再買、一鍵清空 */}
        <Row className={`${styles.row} nowrap mt100px`}>
          <Col className={`${styles.top}`}>
            <CartCategory
              idFromChild={idFromChild}
              setIdFromChild={setIdFromChild}
            />
          </Col>
        </Row>
       {idFromChild===1 ? 
       <Cart data={cartData} setStateFromChild={setStateFromChild}/> : <WannaBuy data={wannaBuyData} setStateFromChild={setStateFromChild} /> }
        <Row>
          <Marquee
            data={marquee}
            text="瀏覽紀錄"
            text2="browse history"
            lineColor="green"
          />
        </Row>
      </Container>
    </>
  )
}
