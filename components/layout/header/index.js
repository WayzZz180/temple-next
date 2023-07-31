import React from 'react'
import Image from 'next/image'
import styles from './header.module.sass'
import Logo from './logo'
import headerBg from '@/assets/header.svg'
import NavbarItem from './navbaritem'
import { useRouter } from 'next/router'
import variables from '@/styles/_variables.module.sass'

export default function Header() {
  const info = [
    {
      title: '01',
      title2: '會員中心',
      links: [
        { label: '變更資料', url: '#' },
        { label: '拜拜紀錄', url: '#' },
        { label: '訂單記錄', url: '#' },
        { label: '喜好商品', url: '#' },
        { label: '我的優惠券', url: '#' },
        { label: '護身符', url: '#' },
        { label: '每日簽到', url: '#' },
      ],
    },
    {
      title: '02',
      title2: '線上拜拜',
      links: [
        { label: '服務據點', url: '#' },
        { label: '服務客戶', url: '#' },
        { label: '服務地區', url: '#' },
        { label: '徵才資訊', url: '#' },
      ],
    },
    {
      title: '03',
      title2: '供品商城',
      links: [
        { label: '商城首頁', url: '/shop' },
        { label: '購物車', url: '/shop/cart?tab=1' },
        { label: '訂單紀錄', url: '#' },
      ],
    },
    {
      title: '04',
      title2: '線上遶境',
      links: [
        { label: '線上測驗', url: '#' },
        { label: '遶境直播', url: '#' },
      ],
    },
    {
      title: '05',
      title2: '求神問卜',
      links: [
        { label: '求籤詩', url: '#' },
        { label: '求紅線', url: '#' },
        { label: '點姻緣燈', url: '#' },
        { label: '點學業燈', url: '#' },
        { label: '上傳准考證', url: '#' },
      ],
    },
    {
      title: '06',
      title2: '民俗論壇',
      links: [
        { label: '八卦板', url: '#' },
        { label: '鬼故事板', url: '#' },
        { label: '愛情板', url: '#' },
        { label: '籤詩板', url: '#' },
        { label: '神佛介紹', url: '#' },
        { label: '禁忌百科', url: '#' },
        { label: '節期拜法', url: '#' },
        { label: '山野怪談', url: '#' },
      ],
    },
  ]

  const router = useRouter()
  const currentPath = router.asPath
  // console.log(currentPath)
  return (
    <header className={`${styles.header}`}>
      <div
        className={`${styles.navbarContainer} pt20px pb25px`}
        style={{
          backgroundColor: currentPath === '/Home' ? variables['brown'] : '',
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
          <Logo />
        </div>
        {/* 右半邊選單 */}
        <ul className={`${styles.drop_down_menu}`}>
          {info.map((v, i) => {
            if (i > 2) {
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
      </div>
      <div className={`${styles.bgContainer} `}>
        <Image src={headerBg} alt="headerBg" className={`${styles.bg}`} />
      </div>
    </header>
  )
}
