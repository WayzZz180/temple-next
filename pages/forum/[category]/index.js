import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './forumgossip.module.sass'
import Title from '@/components/common/title/'
import Forumline from '@/components/common/forumlogo/forumline'
import Navbar from '@/components/common/forumlogo/navbar'
import Forumper from '@/components/common/forumlogo/forumper'
// import { getForumContentByPostCategory } from '@/utils/forumper' // 替換為實際的 API 函數

function Forumgossip() {
  const router = useRouter()
  const { category } = router.query
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  // const forumContent = getForumContentByPostCategory(category) // 呼叫 API 函數來獲取相關內容
  useEffect(() => {
    // const usp = new URLSearchParams(router.query)
    // usp.append('postcategory_sid', postCategory) // 將 post_category 添加到查詢參數
    // console.log('page:', router.query.page)
    const page = router.query.page
    fetch(`${process.env.API_SERVER}/forum/${category}`, {
      method: 'POST',
      body: JSON.stringify({ page: page }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log('data:', data)
        setData(data[0])
        setTotalPages(data[1])
      })
  }, [router.query])

  // console.log(data)
  // console.log(totalPages.totalPages)
  return (
    <>
      <Head>
        <title>{data[0]?.type_name}</title>
      </Head>
      <div className={`${styles.container}`}>
        <div className={`${styles.flex}`}>
          <Title text={data[0]?.type_name} text2={router.query.category} />
        </div>
        <Navbar />
        <Forumline lineColor="brown" />
        <Forumper
          postCategory={category}
          data={data}
          totalPages={totalPages.totalPages}
        />
      </div>
    </>
  )
}

export default Forumgossip
