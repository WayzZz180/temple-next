import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './studyA-2.module.sass'
import Button from '@/components/common/button'
import right from '@/assets/BHR.svg'
import left from '@/assets/BHL.svg'
import imgicon from '@/assets/imgicon.svg'
import { Route, useRouter } from 'next/router'

export default function StudyA2() {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    // console.log('file:', file.name)
    setSelectedFile(file)
  }
  const Router = useRouter()
  const [user, setUser] = useState({
    Member_ID: '',
    Name: '',
    School: '',
    Ticket_Img: '',
    Datetime: '',
  })
  useEffect(() => {
    const Name = Router.query.Name
    console.log('Name:', Name)
    if (Name) {
      setUser((prevUser) => ({ ...prevUser, Name: Name }))
    }
  }, [Router.query.Name])
  useEffect(() => {
    const School = Router.query.School
    console.log('School:', School)
    if (School) {
      setUser((prevUser) => ({ ...prevUser, School: School }))
    }
  }, [Router.query.School])

  const handleSumbit = (e) => {
    e.preventDefault()

    // const formData = new FormData()
    // formData.append('Name', user.Name)
    // formData.append('School', user.School)
    // formData.append('image_uploads', selectedFile)
    const formData = {
      Name: user.Name,
      School: user.School,
      image_uploads: selectedFile.name,
    }
    console.log('data:', formData)
    fetch(process.env.API_SERVER + '/pray/studyA-2', {
      method: 'POST',
      body: JSON.stringify({ requestData: formData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log(result)
      })
    setTimeout(() => {
      Router.push('/pray/studyA-3')
    }, 2000)
  }

  const renderPreview = () => {
    if (selectedFile) {
      return (
        <div
          className={styles.preview}
          style={{
            float: 'left',
            background: '#cccccc',
            height: '520px',
            width: '580px',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      )
    } else {
      return (
        <div
          className={styles.preview}
          style={{
            float: 'left',
            background: '#cccccc',
            height: '520px',
            width: '580px',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <Image
            src={imgicon}
            alt=""
            width="100"
            className={`${styles.imgicon}`}
          ></Image>
          <p className={styles.ptext}>+ 未選擇任何檔案 +</p>
        </div>
      )
    }
  }

  return (
    <>
      <div className={styles.parent_container}>
        <div className={`${styles.flex_row}`}>
          <div className={`${styles.circle}`}></div>
          <div className={`${styles.circle2}`}></div>
          <Image
            src={left}
            alt=""
            width="500"
            className={`${styles.left}`}
          ></Image>
          <div className={`${styles.flex_col}`}>
            <form method="post" encType="multipart/form-data">
              <div>
                <input
                  className={`${styles.input}`}
                  type="file"
                  id="image_uploads"
                  name="image_uploads"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileChange}
                />
              </div>
              {renderPreview()}
              <div className={`${styles.title}`}>姓名</div>
              <div className={`${styles.context}`}>{user.Name}</div>
              <div className={`${styles.title2}`}>第一志願</div>
              <div className={`${styles.context2}`}>{user.School}</div>
              <div className={`${styles.btn}`}>
                <Button
                  text="確定資訊"
                  btnColor="green"
                  type="submit"
                  link={(e) => {
                    handleSumbit(e)
                  }}
                />
              </div>
            </form>
          </div>
          <Image
            src={right}
            alt=""
            width="500"
            className={`${styles.right}`}
          ></Image>
        </div>
      </div>
    </>
  )
}

StudyA2.getLayout = (page) => <>{page}</>
