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
  //   console.log(router)
  // const [row, setRow] = useState(post)
  const [data, setData] = useState([])
  // const addData = [{ title: [], content: [] }]

  useEffect(() => {
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
  }, [router.query])

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
          {/* {row.map((i) => (
            <div key={i.sid}> */}

          <div className={`${styles.row5}`}>
            <div className={`${styles.adjust}`}>{data?.member_id}</div>
            <div>·</div>
            <div className={`${styles.adjust}`}>{data?.postcategory_sid}</div>
            <div>·</div>
            <div className={`${styles.adjust}`}>{data?.publish_time}</div>
          </div>

          {/* </div>
          ))} */}
        </div>
        <div>
          <div className={`${styles.row2}`}>{data?.title}</div>
          <div className={`${styles.row3}`}>{data?.content}</div>
        </div>
        <div className={`${styles.img}`}>
          <Image
            src={`${process.env.API_SERVER}/img/${data.img}`}
            alt="test"
            // className={`${styles.img}`}
            width={780}
            height={500}
          />
        </div>
        <Forumline />
        <div className={`${styles.col}`}>
          {/* 讀出留言 */}
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
              <div className={`${styles.commenter}`}>吸貓是快樂泉源</div>
              <div className={`{${styles.commenttime}`}>
                2023-05-11-08:11:15
              </div>
              <div className={`${styles.comment}`}>
                窩魯妹啦 一大群人追著很明顯就是人為操控的轎子到處跑
                而且對轎子是自己動的深信 窩魯妹啦
                一大群人追著很明顯就是人為操控的轎子到處跑
                而且對轎子是自己動的深信
              </div>
            </div>
          </div>
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
                <div className={`${styles.commenter}`}>吸貓是快樂泉源</div>
                <div className={`{${styles.commenttime}`}>
                  2023-05-11-08:11:15
                </div>
                <div className={`${styles.comment}`}>
                  {/* 窩魯妹啦 一大群人追著很明顯就是人為操控的轎子到處跑
                而且對轎子是自己動的深信 窩魯妹啦
                一大群人追著很明顯就是人為操控的轎子到處跑
                而且對轎子是自己動的深信 */}
                  <TextArea
                    type="text"
                    height="100px"
                    width="100%"
                    value={inputComment}
                    onChange={
                      (e) => {
                        setInputComment(e.target.value)
                      }
                      // console.log('Input value changed:', e.target.value)
                    }
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
                        // e.preventDefault()

                        addData(inputComment)

                        // console.log('page:', page)
                        // console.log('category:', router.query.category)
                      }}
                    />
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
