import React from 'react'
import styles from './header.module.sass'
import NavbarItem from './navbaritem'

export default function NavbarLeft() {
  const navbarItems = [
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
        { label: '服務據點', url: '#' },
        { label: '服務客戶', url: '#' },
        { label: '服務地區', url: '#' },
        { label: '徵才資訊', url: '#' },
      ],
    },
  ]

  return (
    <>
      <ul className={`${styles.drop_down_menu}`}>
        {navbarItems.map((item, index) => (
          <NavbarItem
            key={index}
            title={item.title}
            title2={item.title2}
            links={item.links}
          />
        ))}
      </ul>
    </>
  )
}
