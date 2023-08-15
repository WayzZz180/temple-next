import React from 'react'
import styles from './forumper.module.sass'
import Link from 'next/link'
import Image from 'next/image'

// hooks
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import { useClick } from '@/hooks/useClick.js'

// components
import Forumline from '@/components/common/forumlogo/forumline'
// import FigureExample from '@/components/common/forumlogo/forumperpic'

// svg
import heart_fill from '@/assets/heart_fill.svg'
import heart_outline from '@/assets/heart_outline.svg'
import collect_fill from '@/assets/collect_fill.svg'
import collect_outline from '@/assets/collect_outline.svg'
import index from '@/pages/member'

// import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp'
// import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
// import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp'
// import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp'
// import BookmarkAddedSharpIcon from '@mui/icons-material/BookmarkAddedSharp'
// import Button from '@mui/material/Button'

export default function Forumper({
  data = [],
  state_heart = false,
  state_collect = false,
  setHeart = () => {},
  rows = [],
}) {
  const router = useRouter()
  // const [getImg, setGetImg] = useState('')
  // const [imageURLs, setImageURLs] = useState([])
  //判斷hover
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHoverIndex(-1)
  const isHeartHovered = hoveredIndex === 1
  const isCollectHovered = hoveredIndex === 2
  //判斷有無點擊愛心收藏
  const {
    clickState: collectClickState,
    handleClick: handleCollectClick,
    setClickState: setCollectClickState,
  } = useClick({ state_collect })

  useEffect(() => {
    if (state_collect != collectClickState) setCollectClickState(state_collect)
  }, [router.query])

  const {
    clickState: heartClickState,
    handleClick: handleHeartClick,
    setClickState: setHeartClickState,
  } = useClick({ state_heart })

  useEffect(() => {
    if (heartClickState != state_heart) {
      setHeartClickState(state_heart)
    }
  }, [state_heart])

  useEffect(() => {
    setHeart(heartClickState)
  }, [heartClickState])

  // 按讚
  const addToGood = () => {
    const addData = { sid: data?.sid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/forum/good`, {
        method: 'POST',
        body: JSON.stringify({ requestData: addData }),
        headers: {
          'Content-Type': 'application/json',
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {})
    }
  }

  // 收回讚
  const deleteFromGood = () => {
    const deletedData = { sid: data?.sid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/forum/good`, {
        method: 'DELETE',
        body: JSON.stringify({ requestData: deletedData }),
        headers: {
          'Content-Type': 'application/json',
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {})
    }
  }
  // 珍藏
  const addToCollect = () => {
    const addData = { sid: data?.sid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/forum/collect`, {
        method: 'POST',
        body: JSON.stringify({ requestData: addData }),
        headers: {
          'Content-Type': 'application/json',
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {})
    }
  }
  // 收回收藏
  const deleteFromCollect = () => {
    const deletedData = { sid: data?.sid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/forum/collect`, {
        method: 'DELETE',
        body: JSON.stringify({ requestData: deletedData }),
        headers: {
          'Content-Type': 'application/json',
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {})
    }
  }

  return (
    <>
      <div>
        <div key={data?.sid}>
          <div>
            <div>
              <div className={`${styles.flex_row1}`}>
                <li>{data?.member_id}</li>
                <li>·</li>
                <li>{data?.publish_time}</li>
              </div>
              <div className={`${styles.flex}`}>
                <div className={`${styles.flex_row}`}>
                  <div className={`${styles.flex_col2}`}>
                    <Link
                      href={`/forum/${router.query.category}/${data?.sid}`}
                      className={`${styles.link_sass}`}
                    >
                      <div className={`${styles.title}`}>{data?.title}</div>
                      <div className={`${styles.content}`}>{data?.content}</div>
                    </Link>
                  </div>
                  <div className={`${styles.flex_row3}`}>
                    <div
                      role="presentation"
                      className={`${styles.setmid}`}
                      onClick={() => {
                        heartClickState ? deleteFromGood() : addToGood()
                        handleHeartClick()
                      }}
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Image
                        src={
                          heartClickState || isHeartHovered
                            ? heart_fill
                            : heart_outline
                        }
                        alt="heart"
                        width={20}
                      />
                      {/* <FavoriteBorderSharpIcon className={`${styles.marr}`} /> */}
                      {data?.good}
                    </div>
                    <div className={`${styles.setmid}`}>
                      {/* <ChatBubbleOutlineSharpIcon
                          className={`${styles.marr}`}
                        /> */}
                      999
                    </div>
                    <div
                      role="presentation"
                      className={`${styles.setmid}`}
                      onClick={() => {
                        collectClickState ? deleteFromCollect() : addToCollect()
                        handleCollectClick()
                      }}
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Image
                        src={
                          collectClickState || isCollectHovered
                            ? collect_fill
                            : collect_outline
                        }
                        alt="collect"
                        width={30}
                      />
                      {/* <BookmarkBorderSharpIcon /> */}
                    </div>
                  </div>
                </div>
                {/* {imageURLs.map((imageURL, sid) => (
                  <div key={sid}> */}
                <Image
                  src={`${process.env.API_SERVER}/img/${data.img}`}
                  width={175}
                  height={128}
                  className={`${styles.margin}`}
                  alt="175x128"
                />
                {/* {console.log(data?.img)} */}
                {/* </div> */}
                {/* ))} */}
                {/* <FigureExample /> */}
              </div>
            </div>

            {/* <div className={`${styles.flex_end}`}>123</div> */}
          </div>
          <Forumline lineColor="brown" />
        </div>
      </div>
    </>
  )
}
