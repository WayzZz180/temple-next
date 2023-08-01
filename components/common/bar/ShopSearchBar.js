import styles from './ShopSearchBar.module.sass'
import Image from 'next/image'
import Link from 'next/link'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// svg
import search from '@/assets/search.svg'


export default function ShopSearchBar() {
  const [value, setValue] = useState('')
  const [placeholder, setPlaceholder] = useState('搜尋商品')

  const router = useRouter()
  
  // useEffect(()=>{
  //   localStorage.removeItem('keyword')
  // },[router.query])

  const handleBlur = () => {
    if (value === '') {
      setPlaceholder('搜尋商品')
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.set('page', 1);
      currentParams.delete('keyword');
      localStorage.removeItem('keyword')
      const currentPath = window.location.pathname;
      const newURL = `${currentPath}?${currentParams.toString()}`;
      router.push(newURL);
    }
  }
  const sendKeyword = (value) => {
    if(value){
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.set('page', 1);
      currentParams.set('keyword', value);
      localStorage.setItem('keyword',value)
      const currentPath = window.location.pathname;
      const newURL = `${currentPath}?${currentParams.toString()}`;
      router.push(newURL);
    }
  }
  


  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.searchIcon} ps5px pe5px`}
      onClick={()=>{
        sendKeyword(value)
        }}
      >
        <Image src={search} alt="search" width={25} />
      </div>
      <input
        type="text"
        value={value}
        className={`${styles.searchBar} fs16px p5px`}
        placeholder={placeholder}
        onFocus={() => {
          setPlaceholder('')
        }}
        onBlur={handleBlur}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        onKeyDown={(e) => {
          // 按下Enter鍵
          if (e.key === 'Enter') {
            sendKeyword(value)
          }
        }}
      ></input>
    </div>
  )
}
