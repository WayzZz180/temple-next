import * as React from 'react'
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
import { useEffect, useState, useContext } from 'react'
import InputBox from '@/components/common/inputBox/index'

export default function AlertDialog({ keywordSearch = () => {} }) {
  // const router = useRouter()
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [keyword, setKeyword] = React.useState(
    router.query.keyword ? router.query.keyword : ''
  )
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  console.log(router)

  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 6,
    totalPages: 0,
    page: 1,
    rows: [],
  })
  // useEffect(() => {
  //   const usp = new URLSearchParams(router.query)
  //   const page = router.query.page

  //   fetch(
  //     `${process.env.API_SERVER}/forum/${router.query.category}?keyword=${router.query.keyword}`,
  //     {
  //       method: 'POST',
  //       body: JSON.stringify({ page: page }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   )
  //     .then((r) => r.json())
  //     .then((data) => {
  //       console.log(data)
  //       setData(data)
  //     })
  // }, [router.query])
  // console.log(keyword)
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
        {/* <DialogTitle id="alert-dialog-title">{'關鍵字搜尋'}</DialogTitle> */}
        <DialogContent>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              keywordSearch()
              router.push(
                `/forum/${router.query.category}?page=1&keyword=` + keyword
              )
              setKeyword('')
              handleClose()
            }}
          >
            <DialogContentText id="alert-dialog-description">
              {/* <BasicTextFields3
                // name="keyword"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.currentTarget.value)
                }}
              /> */}
              <InputBox
                type="text"
                prompt="關鍵字搜尋"
                placeholder="關鍵字"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.currentTarget.value)
                }}
              />
            </DialogContentText>
            <DialogActions>
              <div className={`${styles.row2}`}>
                <Button onClick={handleClose} color="error">
                  取消
                </Button>
                <Button
                  type="submit"
                  // autoFocus
                >
                  搜尋
                </Button>
              </div>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
