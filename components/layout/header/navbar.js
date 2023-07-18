import React from 'react'
import styles from './header.module.sass'
import NavbarItem from './navbaritem'

export default function Navbar({ info = 'left' }) {
  const info_left = [
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
  const info_right = [
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

  const data = info === 'left' ? info_left : info_right
  return (
    <ul className={`${styles.drop_down_menu}`}>
      {data.map((item, index) => (
        <NavbarItem
          key={index}
          title={item.title}
          title2={item.title2}
          links={item.links}
        />
      ))}
    </ul>
  )
}
