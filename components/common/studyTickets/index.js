import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext, useRef } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import styles from '@/components/common/studyTickets/studyTickets.module.sass'
import variables from '@/styles/_variables.module.sass'

// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/noButton'
import MemberNavbar from '@/components/common/memberNavbar/index.js'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function StudyTickets() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const router = useRouter()

  const [getImg, setGetImg] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false) // 設定 modal 是否打開
  const [member, setMember] = useState('')

  useEffect(() => {
    Modal.setAppElement('#__next') // 設置 appElement 為 #__next
  }, [])

  //   Modal.setAppElement('#__next'); // 設置 appElement, Modal專用

  // 讀出准考證
  useEffect(() => {
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/studyTickets', {
        headers: {
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data)
          setMember(data)
          if (data && data.Ticket_Img) {
            // 從後端獲取到圖片資料，現在您可以將其顯示在前端
            const imageURL = process.env.API_SERVER + '/img/' + data.Ticket_Img
            setGetImg(imageURL)
          }
        })
    } else {
      // Handle the case when auth.token is not available or user is not logged in
      // You can add any additional logic here
      console.log('用戶尚未註冊')
    }
  }, [auth.token, getImg])

  // 上傳准考證測試

  const handleImageClick = () => {
    // 當點擊准考證時，此函數將被觸發
    // 在此，您可以打開小視窗
    console.log('點擊准考證')

    // 觸發文件輸入框的點擊事件
    inputRef.current.click()
  }

  const handleFileChange = (e) => {
    // 當選擇了文件時，此函數將被觸發
    const file = e.target.files[0]
    // 執行上傳文件到伺服器的相關邏輯
    console.log('選擇的文件:', file)

    // 處理上傳圖片的邏輯
    e.preventDefault()
    const fd = new FormData()
    fd.append('preImg', file)

    const str = localStorage.getItem('auth')
    if (str) {
      const obj = JSON.parse(str)
      const Authorization = 'Bearer ' + obj.token
      fetch(process.env.API_SERVER + '/member/studyTickets', {
        method: 'POST',
        body: fd,
        headers: {
          Authorization,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setGetImg(process.env.API_SERVER + '/img/' + data.filename) // 設置用戶准考證的 URL
          setModalIsOpen(false) // 上傳完成後，關閉小視窗
        })
        .catch((error) => {
          console.error('上傳准考證時出錯:', error)
          setModalIsOpen(false) // 如果上傳失敗，也要關閉小視窗
        })
    }
  }

  const handleModalClose = () => {
    // 當點擊取消或按下 Esc 時，關閉小視窗
    setModalIsOpen(false)
  }

  const handleRemoveImage = () => {
    const str = localStorage.getItem('auth')
    if (str) {
      const obj = JSON.parse(str)
      const Authorization = 'Bearer ' + obj.token
      fetch(process.env.API_SERVER + '/member/studyTickets', {
        method: 'DELETE',
        headers: {
          Authorization,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setGetImg(null) // 刪除成功後，將 getImg 設為 null，表示沒有圖片
            console.log(data.message)
            setModalIsOpen(false)
          } else {
            console.error('刪除准考證時出錯:', data.message)
          }
        })
        .catch((error) => {
          console.error('刪除准考證時出錯:', error)
        })
    }
  }
  const inputRef = useRef(null)

  // if (loading) {
  //   return <div>Loading...</div>; // 等待取得使用者的 Ticket_Img
  // }
  console.log(getImg)
  return (
    <>
      <div className={`${styles.flex_centre} `}>
        <div className={styles.photoFrame}>
          <img
            src={getImg ? getImg : process.env.API_SERVER + '/img/nullGray.png'}
            alt="已上傳的圖片"
            width={200}
            height={200}
            onClick={() => setModalIsOpen(true)}
          />
        </div>
      </div>
      <div className={`${styles.flex_centre} mt40px`}>
        <div className={`${styles.flex} w525px`}>
          <InputBox
            prompt="姓名"
            width={200}
            value={member.member_name}
            readOnly
          />
          <InputBox
            prompt="第一志願"
            width={200}
            value={member.dream_school}
            readOnly
          />
        </div>
      </div>

      {/* 小視窗 */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        contentLabel="更換准考證"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
          },
          content: {
            maxWidth: '300px', // 調整最大寬度
            maxHeight: '325px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
          },
        }}
      >
        <div className={`${styles.flex_centre2} fwBold`}>
          <h2>更換准考證</h2>
          <p>選擇您想要進行的操作：</p>
        </div>
        {/* <div className={styles.flex_centre2}> */}
        <Button
          text="上傳准考證"
          btnColor="brown"
          link={() => {
            handleImageClick()
          }}
          width="100%"
          fontSize="20px"
          padding="10px 50px"
        />

        <Button
          text="移除准考證"
          btnColor="brown"
          link={() => {
            handleRemoveImage()
          }}
          width="100%"
          fontSize="20px"
          padding="10px 50px"
        />
        <Button
          text="取消"
          btnColor="brown"
          link={() => {
            handleModalClose()
          }}
          width="100%"
          fontSize="20px"
          padding="10px 50px"
        />
        {/* </div> */}
        {/* 文件輸入框初始時被隱藏 */}
        <input
          type="file"
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Modal>
    </>
  )
}
