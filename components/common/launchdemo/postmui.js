import * as React from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import AddIcon from '@mui/icons-material/Add'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import styles from '@/components/common/launchdemo/postmui.module.sass'
import BasicTextFields from '@/components/common/launchdemo/textfield'
import BasicTextFields2 from '@/components/common/launchdemo/textfield2'
import ForumButton from '@/components/common/button/'
import TextArea from '@/components/common/inputBox/textarea'
import ImgUpload from '@/components/common/imgupload/imgupload'
import { useState, useEffect } from 'react'
import data from '@/components/mydata/productsTitleData'
import { Logger } from 'sass'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AlertDialogSlide({ page = 1 }) {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState(null)
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const [inputTitle, setInputTitle] = React.useState('')
  const [inputContent, setInputContent] = React.useState('')
  //會員
  // const [memberId, setMemberId] = useState({
  //   member_id: '',
  // })
  // const [publishTime, setPublishTime] = React.useState('')

  const addData = async (title, content) => {
    const fd = new FormData()
    const input = document.querySelector('.img-upload')
    fd.append('preImg', input.files[0])

    const reqData = {
      title: title,
      content: content,
      img: input.files[0].name,
    }

    // console.log('file:', input.files[0].name)
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(
        `${process.env.API_SERVER}/forum/${router.query.category}/addphoto`,
        {
          method: 'POST',
          body: fd, // 確保這裡傳遞的是 FormData 物件
          headers: {
            Authorization,
          },
        }
      )
        .then((r) => r.json())
        .then((data) => {
          console.log(data)
          // console.log(fd)
          reqData.img = data
        })
    }
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/forum/${router.query.category}/add`, {
        method: 'POST',
        body: JSON.stringify({ requestData: reqData }),
        headers: {
          'Content-Type': 'application/json',
          Authorization,
        },
      }),
        handleClose()
    }
  }
  //會員
  // useEffect(() => {
  //   setMemberId('member_id')
  // })

  // if(!data) return <Loading />

  return (
    <div>
      <Button
        variant="text"
        onClick={handleClickOpen}
        className={`${styles.no_underline}`}
      >
        <AddIcon />
        新增貼文
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="md"
      >
        <form>
          <DialogTitle>{/* {"Use Google's location service?"} */}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div className={`${styles.container}`}>
                {/* <div className={`${styles.center}`}> */}
                <div className={`${styles.row3}`}>
                  <div className={`${styles.row1}`}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 77, height: 77 }}
                    />
                    <div className={`${styles.column1}`}>
                      <div className={`${styles.userid}`}>
                        {data[0]?.member_id}
                      </div>
                      <div className={`${styles.row2}`}>
                        <div className={`${styles.forumcategory}`}>123</div>
                        <div>·</div>
                        <div className={`${styles.posttime}`}>NOW</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
                <div className={`${styles.col2}`}>
                  <p className={`${styles.title}`}>文章標題</p>
                  <div className={`${styles.col2}`}>
                    <TextArea
                      height="40px"
                      // weight="500px"
                      // later-space="pre-line"
                      whiteSpace="pre-wrap"
                      value={inputTitle}
                      onChange={
                        (e) => {
                          setInputTitle(e.target.value)
                        }
                        // console.log('Input value changed:', e.target.value)
                      }
                      placeholder="請輸入標題"
                      autoComplete="off"
                      id="title"
                      required
                      // minLength={3}
                    />
                    {/* <BasicTextFields /> */}
                  </div>
                  <p className={`${styles.title}`}>文章內容</p>
                  <div className={`${styles.col2}`}>
                    <TextArea
                      type="text"
                      height="500px"
                      // weight="500px"
                      // later-space="pre-line"
                      whiteSpace="pre-wrap"
                      value={inputContent}
                      onChange={
                        (e) => {
                          setInputContent(e.target.value)
                        }
                        // console.log('Input value changed:', e.target.value)
                      }
                      placeholder="請輸入內容"
                      autoComplete="off"
                      id="content"
                      required
                      lineheight="32px"
                      // minLength={15}
                    />
                    {/* <BasicTextFields2 /> */}
                  </div>
                </div>
              </div>
            </DialogContentText>
            <div className={`${styles.row2}`}>
              <ImgUpload
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <div className={`${styles.row2}`}>
              <ForumButton
                btnColor="hot_pink"
                text="取消"
                type="button"
                link={() => {
                  console.log('Cancel button clicked')
                  handleClose()
                }}
              />
              <ForumButton
                btnColor="green"
                text="發文"
                type="button"
                link={(e) => {
                  // e.preventDefault()

                  addData(inputTitle, inputContent)
                  setInputTitle('')
                  setInputContent('')
                  setSelectedFile(null)
                  // console.log('page:', page)
                  // console.log('category:', router.query.category)
                }}
              />
              {/* <Button onClick={handleClose} color="error">
              取消
            </Button>
            <Button onClick={handleClose}>發文</Button> */}
            </div>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
