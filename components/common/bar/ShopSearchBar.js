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
      <div className={`${styles.searchIcon} p5px`}>
        <Image src={search} alt="search" width={30} />
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
      ></input>
    </div>
  )
}
