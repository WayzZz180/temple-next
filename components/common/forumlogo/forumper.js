import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import styles from './forumper.module.sass'
import Link from 'next/link'
import Forumline from '@/components/common/forumlogo/forumline'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp'
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp'
import BookmarkAddedSharpIcon from '@mui/icons-material/BookmarkAddedSharp'
import FigureExample from '@/components/common/forumlogo/forumperpic'
import Pagination from '@/components/common/pagination/index'
// import Button from '@mui/material/Button'

export default function Forumper({ postCategory, data = [], totalPages = 1 }) {
  const router = useRouter()

  const pagination = {
    page: router.query.page,
    totalPages: totalPages,
  }

  return (
    <>
      <div>
        {data?.map((i) => (
          <div key={i.sid}>
            <div>
              <div>
                <div className={`${styles.flex_row1}`}>
                  <li>{i.member_id}</li>
                  <li>·</li>
                  <li>{i.publish_time}</li>
                </div>
                <div className={`${styles.flex}`}>
                  <div className={`${styles.flex_row}`}>
                    <div className={`${styles.flex_col2}`}>
                      <Link
                        href={`/forum/${router.query.category}/${i.sid}`}
                        className={`${styles.link_sass}`}
                      >
                        <div className={`${styles.title}`}>{i.title}</div>
                        <div className={`${styles.content}`}>{i.content}</div>
                      </Link>
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
        <Pagination pagination={pagination} />
      </div>
    </>
  )
}
