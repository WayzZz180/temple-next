import styles from './category.module.sass'
import Head from 'next/head'
// hooks
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container'

// components
import ShopTop from '@/components/common/shopTop'
import ShopTitle from '@/components/common/title/ShopTitle'
import TitleData from '@/components/mydata/productsTitleData'
import DropDownMenu from '@/components/common/dropDownMenu'
import GetData from '@/components/common/category/getData'
import NoData from '@/components/common/category/noData'
import Loading from '@/components/common/loading'

export default function Category() {
  const router = useRouter()
  const { category, page, keyword } = router.query //抓出類別
  const categoryData = TitleData.find((item) => item.id === category)
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState([])
  const [dataFromChild, setDataFromChild] = useState([])
  const [encode, setEncode] = useState()
  const [pidArr, setPidArr] = useState([])

  //要篩選的資料
  const [info, setInfo] = useState([
    {
      title: true,
      content: '• 每頁顯示 •',
    },
    {
      content: '20筆',
      perPage: 20,
      status: false,
    },
    {
      content: '50筆',
      perPage: 50,
      status: false,
    },
    {
      content: '100筆',
      perPage: 100,
      status: false,
    },
    {
      title: true,
      content: '• 依照 •',
    },
    {
      content: '熱銷排序',
      orderBy: 'purchase_num',
      status: false,
    },
    {
      content: '類別排序',
      orderBy: 'recommend',
      status: false,
    },
    {
      content: '價錢排序',
      orderBy: 'product_price',
      status: false,
    },
    {
      content: '星星排序',
      orderBy: 'stars',
      status: false,
    },
  ])

  useEffect(() => {
    if (!category) return

    if (localStorage.getItem('keyword') && !keyword) {
      const currentParams = new URLSearchParams(window.location.search)
      currentParams.set('keyword', localStorage.getItem('keyword'))
      const currentPath = window.location.pathname
      const newURL = `${currentPath}?${currentParams.toString()}`
      router.push(newURL)
    }
    let reqData = {
      page: page,
      perPage: dataFromChild?.perPage ? dataFromChild.perPage : 20,
      sort: dataFromChild?.order ? dataFromChild.order : 'DESC',
      orderBy: dataFromChild?.orderBy ? dataFromChild.orderBy : 'purchase_num',
    }
    if (keyword) {
      reqData = { ...reqData, keyword: keyword }
    }

    const updatedInfo = info.map((v) => {
      if (v.perPage === reqData.perPage || v.orderBy === reqData.orderBy) {
        return { ...v, status: true }
      } else {
        return { ...v, status: false }
      }
    })
    setInfo(updatedInfo)

    fetch(`${process.env.API_SERVER}/shop/${category}`, {
      method: 'POST',
      body: JSON.stringify({ requestData: reqData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        data.redirect && router.push(data.redirect)

        if (data.success) {
          setData(data.data)
          setPagination(data.pagination)
          setEncode(data.keyword)
        } else {
          setData([])
        }
      })
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/favoriteMatch`, {
        headers: {
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setPidArr(data)
        })
    }
  }, [dataFromChild, router.query])

  if (!data) return <Loading />

  return (
    <Container className={`${styles.container}`}>
      <Head>
        <title>{categoryData?.text}</title>
      </Head>
      {/* 類別&搜尋 */}
      <ShopTop />
      {/* Title */}
      <div className={`${styles.menuContainer}`}>
        <ShopTitle
          text={categoryData?.text}
          lineColor="green"
          link={`/shop/cookies`}
        />
        {/* 篩選｜排列 */}
        <span
          className={`${styles.menu}`}
          style={{ display: data?.length > 0 ? '' : 'none' }}
        >
          <DropDownMenu
            text=" 顯示 ｜ 排列 "
            info={info}
            setDataFromChild={setDataFromChild}
            keyword={keyword}
          />
        </span>
      </div>
      {/* 商品 */}
      {data?.length > 0 ? (
        <GetData
          data={data}
          pagination={pagination}
          encode={encode}
          pidArr={pidArr}
        />
      ) : (
        <NoData />
      )}
    </Container>
  )
}
