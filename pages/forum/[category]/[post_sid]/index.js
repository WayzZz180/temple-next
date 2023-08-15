import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './readpost.module.sass'
import Forumline from '@/components/common/forumlogo/forumline'
import Avatar from '@mui/material/Avatar'
import Image from 'next/image'
import Head from 'next/head'
import TextArea from '@/components/common/inputBox/textarea'
import ForumButton from '@/components/common/button/'

export default function ReadPost({ src = '', post }) {
  const router = useRouter()
  const [inputComment, setInputComment] = useState('')
  const [data, setData] = useState([])
  const [comments, setComments] = useState([]) // 新增這個狀態來保存評論

  useEffect(() => {
    // 獲取文章資訊
    fetch(
      `${process.env.API_SERVER}/forum/${router.query.category}/${router.query.post_sid}`
    )
      .then((r) => r.json())
      .then((result) => {
        if (result.success) {
          setData(result.row)
        } else {
          console.log('沒有資料!')
        }
      })

    // 獲取文章評論
    fetch(
      `${process.env.API_SERVER}/forum/${router.query.category}/${router.query.post_sid}/comments`
    )
      .then((r) => r.json())
      .then((result) => {
        if (result.success) {
          setComments(result.comments)
        } else {
          console.log('沒有評論!')
        }
      })
  }, [router.query])

  const addData = async (comment) => {
    const auth = localStorage.getItem('auth')

    try {
      if (auth) {
        const obj = JSON.parse(auth)
        const Authorization = 'Bearer ' + obj.token

        // 新增評論
        const response = await fetch(
          `${process.env.API_SERVER}/forum/${router.query.category}/${router.query.post_sid}/add-comment`,
          {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
              'Content-Type': 'application/json',
              Authorization,
            },
          }
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        // 清空輸入框
        setInputComment('')

        // 重新獲取評論
        const commentResponse = await fetch(
          `${process.env.API_SERVER}/forum/${router.query.category}/${router.query.post_sid}/comments`,
          {
            headers: {
              Authorization,
            },
          }
        )
        const commentResult = await commentResponse.json()

        if (commentResult.success) {
          setComments(commentResult.comments)
        } else {
          console.log('沒有評論!')
        }
      }
    } catch (error) {
      console.error('An error occurred:', error)
      // 在這裡處理錯誤，例如顯示錯誤訊息給使用者
      // ...
    }
  }

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div className={`${styles.container}`}>
        <div className={`${styles.row}`}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 77, height: 77 }}
            className={`${styles.avatar}`}
          />
          <div className={`${styles.row5}`}>
            <div className={`${styles.adjust}`}>{data?.member_id}</div>
            <div>·</div>
            {/* <div className={`${styles.adjust}`}>{data?.postcategory_sid}</div>
            <div>·</div> */}
            <div className={`${styles.adjust}`}>{data?.publish_time}</div>
          </div>
        </div>
        <div>
          <div className={`${styles.row2}`}>{data?.title}</div>
          <div className={`${styles.row3}`}>{data?.content}</div>
        </div>
        <div className={`${styles.img}`}>
          <Image
            src={`${process.env.API_SERVER}/img/${data.img}`}
            alt="test"
            width={780}
            height={500}
          />
        </div>
        <Forumline />
        <div className={`${styles.col}`}>
          {comments.map((comment) => (
            <div className={`${styles.row4}`} key={comment.sid}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 66, height: 66 }}
                className={`${styles.avatar}`}
              />
              <div className={`${styles.col2}`}>
                <div className={`${styles.commenter}`}>{comment.member_id}</div>
                <div className={`{${styles.commenttime}`}>
                  {comment.comment_time}
                </div>
                <div className={`${styles.comment}`}>{comment.comment}</div>
              </div>
            </div>
          ))}
          <form>
            <div className={`${styles.row4}`}>
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 66, height: 66 }}
                  className={`${styles.avatar}`}
                />
              </div>
              <div className={`${styles.col2}`}>
                <div className={`${styles.commenter}`}></div>
                <div className={`{${styles.commenttime}`}>NOW</div>
                <div className={`${styles.comment}`}>
                  <TextArea
                    type="text"
                    height="100px"
                    width="100%"
                    value={inputComment}
                    onChange={(e) => {
                      setInputComment(e.target.value)
                    }}
                    placeholder="請輸入內容"
                    autoComplete="off"
                    id="content"
                    required
                    lineheight="20px"
                  />
                  <div className={`${styles.button}`}>
                    <ForumButton
                      btnColor="green"
                      height="10px"
                      width="40px"
                      fontSize="10px"
                      text="留言"
                      type="button"
                      padding="20px 50px"
                      link={(e) => {
                        addData(inputComment)
                      }}
                    />
                    {console.log(inputComment)}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
