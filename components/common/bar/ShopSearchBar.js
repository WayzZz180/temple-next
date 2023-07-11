import { useState } from 'react'
import Image from 'next/image'
import styles from './ShopSearchBar.module.sass'
import search from '@/assets/search.svg'

export default function ShopSearchBar() {
  const [content, setContent] = useState('')
  const [placeholder, setPlaceholder] = useState('搜尋商品')

  const handleBlur = () => {
    if (content === '') {
      setPlaceholder('搜尋商品')
    }
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.searchIcon} ps5px pe5px`}>
        <Image src={search} alt="search" width={25} />
      </div>
      <input
        type="text"
        value={content}
        className={`${styles.searchBar} p5px`}
        placeholder={placeholder}
        onFocus={() => {
          setPlaceholder('')
        }}
        onBlur={handleBlur}
        onChange={(e) => {
          setContent(e.target.value)
        }}
        onKeyDown={(e) => {
          // 按下Enter鍵
          if (e.key === 'Enter') {
            // 清空文字輸入框
            setContent('')
          }
        }}
      ></input>
    </div>
  )
}
