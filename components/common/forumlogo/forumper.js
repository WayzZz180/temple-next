import React from 'react'
import { useEffect, useState, useContext } from 'react'
import styles from './forumper.module.sass'
import Link from 'next/link'
import Forumline from '@/components/common/forumlogo/forumline'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp'
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp'
import BookmarkAddedSharpIcon from '@mui/icons-material/BookmarkAddedSharp'
import FigureExample from '@/components/common/forumlogo/forumperpic'

export default function Forumper() {
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 6,
    totalPages: 0,
    page: 1,
    rows: [],
  })
  useEffect(() => {
    fetch(`${process.env.API_SERVER}/forum`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }, [])
  return (
    <>
      <p>{JSON.stringify(data)}</p>
      <div>
        <div>
          <div>
            <div className={`${styles.flex_row1}`}>
              <li>吸貓是快樂泉源</li>
              <li>·</li>
              <li>2023-05-31 19:30</li>
            </div>
            <div className={`${styles.flex}`}>
              <div className={`${styles.flex_row}`}>
                <div className={`${styles.flex_col2}`}>
                  <div className={`${styles.title}`}>
                    #討論 玩遊戲就是要配XX才爽！😝打完吃什麼宵夜好？🤤
                  </div>
                  <div className={`${styles.content}`}>
                    「打完要不要吃宵夜？」 「怎麼一下就沒了？」
                    玩遊戲的時候總是希望旁邊有袋洋芋片、配...
                  </div>
                </div>
                <div className={`${styles.flex_row3}`}>
                  <div className={`${styles.setmid}`}>
                    <FavoriteBorderSharpIcon className={`${styles.marr}`} />
                    999
                  </div>
                  <div className={`${styles.setmid}`}>
                    <ChatBubbleOutlineSharpIcon className={`${styles.marr}`} />
                    999
                  </div>
                  <div className={`${styles.setmid}`}>
                    <BookmarkBorderSharpIcon />
                  </div>
                </div>
              </div>
              <FigureExample />
            </div>
          </div>

          {/* <div className={`${styles.flex_end}`}>123</div> */}
        </div>
        <Forumline lineColor="brown" />
      </div>
    </>
  )
}
