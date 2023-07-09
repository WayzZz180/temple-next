import React from 'react'
import styles from './header.module.sass'
import NavbarItem from './navbaritem'

export default function NavbarRight() {
  const navbarItems = [
    {
      title: '04',
      title2: '線上遶境',
      links: [
        { label: '服務據點', url: '#' },
        { label: '服務客戶', url: '#' },
        { label: '服務地區', url: '#' },
        { label: '徵才資訊', url: '#' },
      ],
    },
    {
      title: '05',
      title2: '求神問卜',
      links: [
        { label: '服務據點', url: '#' },
        { label: '服務客戶', url: '#' },
        { label: '服務地區', url: '#' },
        { label: '徵才資訊', url: '#' },
      ],
    },
    {
      title: '06',
      title2: '民俗論壇',
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
