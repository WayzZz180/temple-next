import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import SearchIcon from '@mui/icons-material/Search'
import BasicTextFields3 from '@/components/common/launchdemo/textfield3'
import styles from '@/components/common/launchdemo/postmui.module.sass'
import { useRouter } from 'next/router'
import ForumButton from '@/components/common/button/forumbutton2'

export default function AlertDialog() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { category, post_sid } = router.query
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    setKeyword(router.query.keyword || '')
    const usp = new URLSearchParams(router.query)

    fetch(
      `${
        process.env.API_SERVER
      }/forum/${category}/${post_sid}?${usp.toString()}`
    )
      .then((r) => r.json())
      .then((result) => {
        if (result.success) {
          setData(result.data)
        } else {
          // console.log('沒有資料!')
        }
      })
  }, [router.query])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="text"
        onClick={handleClickOpen}
        className={`${styles.no_underline}`}
      >
        <SearchIcon />
        查詢貼文
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'關鍵字搜尋'}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              router.push(
                `/forum/${category}/${post_sid}?keyword=` +
                  e.currentTarget.keyword.value
              )
              handleClose()
            }}
          >
            <DialogContentText id="alert-dialog-description">
              <BasicTextFields3
                // name="keyword"
                value={router.query.keyword || ''}
              />
            </DialogContentText>
            <DialogActions>
              <div className={`${styles.row2}`}>
                <ForumButton
                  btnColor="hot_pink"
                  text="cancel"
                  link={handleClose}
                  width="30px"
                  height="20px"
                  fontSize="15px"
                />
                <ForumButton
                  btnColor="green"
                  text="search"
                  // onClick={handleClose}
                  type="submit"
                  width="30px"
                  height="20px"
                  fontSize="15px"
                />
                {/* <Button onClick={handleClose} color="error">
                  取消
                </Button>
                <Button type="submit">搜尋</Button> */}
              </div>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
