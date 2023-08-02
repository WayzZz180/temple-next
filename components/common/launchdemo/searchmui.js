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

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false)

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
          <DialogContentText id="alert-dialog-description">
            <BasicTextFields3 />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className={`${styles.row2}`}>
            <Button onClick={handleClose} color="error" color="error">
              取消
            </Button>
            <Button onClick={handleClose} autoFocus>
              搜尋
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  )
}
