import styles from './header.module.sass'
import variables from '@/styles/_variables.module.sass'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '@/contexts/AuthContext'
// svg
import headerBg from '@/assets/header.svg'
// components
import Logo from './logo'
import NavbarItem from './navbaritem'

export default function Header() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(false)

  const info = [
    {
      title: '01',
      title2: '會員中心',
      links: [
        { label: '變更資料', url: '/member/personalinfo' },
        { label: '拜拜紀錄', url: '/member/praying' },
        { label: '訂單記錄', url: '/member/orders' },
        { label: '收藏清單', url: '/member/wishlist' },
        { label: '我的優惠券', url: '/member/myCoupons' },
        { label: '我的文章', url: '/member/articles' },
        { label: '護身符', url: '/member/amulet' },
        { label: '每日簽到', url: '/member/dailySignIn' },
        { label: '遊戲區', url: '/member/myCardGame' },

        auth.id === 0
          ? { label: '登入', url: '/member/login' }
          : { label: '登出', url: '/member/logout' },
      ],
    },
    {
      title: '02',
      title2: '線上拜拜',
      links: [
        { label: '預約拜拜', url: '/worship' },
        { label: '預約紀錄', url: '/member/praying' },
        { label: '供品一覽', url: '/worship/offeringsAll' },
      ],
    },
    {
      title: '03',
      title2: '供品商城',
      links: [
        { label: '商城首頁', url: '/shop' },
        { label: '購物車', url: '/shop/cart?tab=1' },
        { label: '喜好商品', url: '/member/wishlist' },
        { label: '訂單紀錄', url: '/member/orders' },
        { label: '優惠券', url: '/member/coupons' },
      ],
    },
    {
      title: '04',
      title2: '線上遶境',
      links: [
        { label: '線上測驗', url: '/pilgrimage' },
        { label: '遶境直播', url: '/pilgrimage' },
      ],
    },
    {
      title: '05',
      title2: '求神問卜',
      links: [
        { label: '求籤詩', url: '/pray' },
        { label: '求紅線', url: '/pray' },
        { label: '點姻緣燈', url: '/pray' },
        { label: '點學業燈', url: '/pray' },
        { label: '上傳准考證', url: '/pray' },
      ],
    },
    {
      title: '06',
      title2: '民俗論壇',
      links: [
        { label: '論壇首頁', url: '/forum' },
        { label: '八卦板', url: '/forum/gossip?page=1' },
        { label: '鬼故事板', url: '/forum/ghost?page=1' },
        { label: '愛情板', url: '/forum/love?page=1' },
        { label: '籤詩板', url: '/forum/fortunesticks?page=1' },
      ],
    },
  ]

  const router = useRouter()
  const currentPath = router.asPath
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsLogin(true)
    }
    setIsMenuOpen(false)
  }, [router.query])

  // 底色要變咖啡色的路由
  const bgChangeUrl = ['/', '/Home', '/forum', '/worship']

  const bgChange = bgChangeUrl.filter((v) => {
    return v === currentPath
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className={`${styles.header}`}>
      <div
        role="presentation"
        className={`${styles.mobilemenu} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => {
          toggleMenu()
        }}
      >
        <span className={`${styles.mobilemenuline} `}></span>
      </div>
      <div
        className={`${styles.navbarContainer} pt20px pb25px`}
        style={{
          backgroundColor:
            currentPath === String(bgChange[0]) ? variables['brown'] : '',
        }}
      >
        {/* 左半邊選單 */}
        <ul className={`${styles.drop_down_menu}`}>
          {info.map((v, i) => {
            if (i < 3) {
              return (
                <NavbarItem
                  key={i}
                  title={v.title}
                  title2={v.title2}
                  links={v.links}
                />
              )
            }
          })}
        </ul>
        {/* logo */}
        <div className={`${styles.logoContainer}`}>
          <Logo link={isLogin ? '/Home/signOut' : '/'} />
        </div>
        {/* 右半邊選單 */}
        <ul className={`${styles.drop_down_menu}`}>
          {info.map((v, i) => {
            if (i > 2) {
              return (
                <NavbarItem
                  key={v.title}
                  title={v.title}
                  title2={v.title2}
                  links={v.links}
                />
              )
            }
          })}
        </ul>
      </div>

      <div
        className={`${styles.rwdnavbarContainer} pt20px pb25px`}
        style={{
          backgroundColor:
            currentPath === String(bgChange[0]) ? variables['brown'] : '',
        }}
      >
        {/* logo */}
        <div className={`${styles.logoContainer}`}>
          <div className={`${styles.logo}`}>
            <Logo link={isLogin ? '/Home/signOut' : '/'} />
          </div>
        </div>
        <div style={{ display: isMenuOpen ? 'block' : 'none' }}>
          <ul className={`${styles.drop_down_menu}`}>
            {info.map((v, i) => {
              return (
                <NavbarItem
                  key={i}
                  title={v.title}
                  title2={v.title2}
                  links={v.links}
                />
              )
            })}
          </ul>
        </div>
      </div>
      <div className={`${styles.bgContainer} `}>
        <Image src={headerBg} alt="headerBg" className={`${styles.bg}`} />
      </div>
    </header>
  )
}

//   //手機版

//   return (
//     <header className={`${styles.header}`}>
//       <div
//         role="presentation"
//         className={`${styles.mobilemenu} ${isMenuOpen ? styles.open : ''}`}
//         onClick={toggleMenu}
//       >
//         <span className={`${styles.mobilemenuline} `}></span>
//       </div>
//       <div
//         className={`${styles.navbarContainer} ${
//           isMenuOpen ? styles.open : ''
//         } pt20px pb25px`}
//         style={{
//           backgroundColor:
//             currentPath === String(bgChange[0]) ? variables['brown'] : '',
//         }}
//       >
//         {/* 左半邊選單 */}
//         <ul className={`${styles.drop_down_menu}`}>
//           {info.map((v, i) => {
//             if (i < 3) {
//               return (
//                 <div style={{ display: openinsild ? 'block' : 'none' }} key={i}>
//                   <NavbarItem
//                     title={v.title}
//                     title2={v.title2}
//                     links={v.links}
//                   />
//                 </div>
//               )
//             }
//           })}
//         </ul>

//         {/* logo */}
//         <div className={`${styles.logoContainer}`}>
//           <Logo link={auth.id === 0 ? '/' : '/Home/signOut'} />
//         </div>
//         {/* 右半邊選單 */}
//         <ul className={`${styles.drop_down_menu}`}>
//           {info.map((v, i) => {
//             if (i > 2) {
//               return (
//                 <NavbarItem
//                   key={v.title}
//                   title={v.title}
//                   title2={v.title2}
//                   links={v.links}
//                 />
//               )
//             }
//           })}
//         </ul>
//       </div>

//       <div className={`${styles.bgContainer} `}>
//         <Image src={headerBg} alt="headerBg" className={`${styles.bg}`} />
//       </div>
//     </header>
//   )
// }
