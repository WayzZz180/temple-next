import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './forumgossip.module.sass'
import Title from '@/components/common/title/'
import Forumline from '@/components/common/forumlogo/forumline'
import Navbar from '@/components/common/forumlogo/navbar'
import Forumper from '@/components/common/forumlogo/forumper'
import Pagination from '@/components/common/pagination/index'
// import { getForumContentByPostCategory } from '@/utils/forumper' // 替換為實際的 API 函數

function Forumgossip() {
  const router = useRouter()
  const { category } = router.query
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [stateHeart, setStateHeart] = useState([])
  const [stateCollect, setStateCollect] = useState([])
  const [heart, setHeart] = useState()
  const [keyword, setKeyword] = useState('')
  // const forumContent = getForumContentByPostCategory(category) // 呼叫 API 函數來獲取相關內容
  useEffect(() => {
    setKeyword(router.query.keyword || '')
    const usp = new URLSearchParams(router.query)
    // const usp = new URLSearchParams(router.query)
    // usp.append('postcategory_sid', postCategory) // 將 post_category 添加到查詢參數
    // console.log('page:', router.query.page)
    const page = router.query.page
    // console.log('k:', router.query.keyword)
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/forum/${category}?${usp.toString()}`, {
        method: 'POST',
        body: JSON.stringify({ page: page }),
        headers: {
          'Content-Type': 'application/json',
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          // console.log('data:', data)
          // console.log('here')
          setData(data[0])
          setTotalPages(data[1])
          setStateHeart(data[2])
          setStateCollect(data[3])
        })
    }
  }, [router.query, heart])

  const pagination = {
    page: router.query.page,
    totalPages: totalPages?.totalPages,
  }
  // if (!data) return
  const keywordSearch = () => {
    // const page = router.query.page
    // console.log(router.query.keyword)
    // fetch(
    //   `${process.env.API_SERVER}/forum/${category}?keyword=${router.query.keyword}`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({ page: page }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // )
    //   .then((r) => r.json())
    //   .then((data) => {
    //     console.log('data:', data)
    //     setData(data[0])
    //     setTotalPages(data[1])
    //     setStateHeart(data[2])
    //     setStateCollect(data[3])
    //   })
  }
  return (
    <>
      <Head>
        <title>{data[0]?.type_name}</title>
      </Head>
      <div className={`${styles.container}`}>
        <div className={`${styles.flex}`}>
          <Title text={data[0]?.type_name} text2={router.query.category} />
        </div>
        <Navbar keywordSearch={keywordSearch} />
        <Forumline lineColor="brown" />
        {data?.map((v, i) => {
          const found_heart = stateHeart.some((i) => i.post_sid === v.sid)
          const found_collect = stateCollect.some((i) => i.post_sid === v.sid)
          return (
            <div key={v.sid}>
              <Forumper
                data={v}
                state_heart={found_heart}
                state_collect={found_collect}
                setHeart={setHeart}
              />
            </div>
          )
        })}
        <Pagination pagination={pagination} />
      </div>
    </>
  )
}

export default Forumgossip
