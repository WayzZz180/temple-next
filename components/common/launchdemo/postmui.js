import * as React from 'react'
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AlertDialogSlide() {
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
        maxWidth="lg"
      >
        <DialogTitle>{/* {"Use Google's location service?"} */}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className={`${styles.container}`}>
              {/* <div className={`${styles.center}`}> */}
              <div className={`${styles.flex_start}`}>
                <div className={`${styles.row1}`}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 77, height: 77 }}
                  />
                  <div className={`${styles.column1}`}>
                    <div className={`${styles.userid}`}>5678</div>
                    <div className={`${styles.row2}`}>
                      <div className={`${styles.forumcategory}`}>5678</div>
                      <div>·</div>
                      <div className={`${styles.posttime}`}>5678</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
              <div>
                <div>文章標題</div>
                <div>
                  <BasicTextFields />
                </div>
                <div>文章內容</div>
                <div>
                  <BasicTextFields2 />
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className={`${styles.row2}`}>
            <Button onClick={handleClose} color="error">
              取消
            </Button>
            <Button onClick={handleClose}>發文</Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  )
}
