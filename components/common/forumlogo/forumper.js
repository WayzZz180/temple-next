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
      <div>
        {data.rows.map((i) => (
          <div key={i.sid}>
            <div>
              <div>
                <div className={`${styles.flex_row1}`}>
                  <li>吸貓是快樂泉源</li>
                  <li>·</li>
                  <li>{i.publish_time}</li>
                </div>
                <div className={`${styles.flex}`}>
                  <div className={`${styles.flex_row}`}>
                    <div className={`${styles.flex_col2}`}>
                      <div className={`${styles.title}`}>{i.title}</div>
                      <div className={`${styles.content}`}>{i.content}</div>
                    </div>
                    <div className={`${styles.flex_row3}`}>
                      <div className={`${styles.setmid}`}>
                        <FavoriteBorderSharpIcon className={`${styles.marr}`} />
                        999
                      </div>
                      <div className={`${styles.setmid}`}>
                        <ChatBubbleOutlineSharpIcon
                          className={`${styles.marr}`}
                        />
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
        ))}
      </div>
    </>
  )
}
