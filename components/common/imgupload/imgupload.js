import React, { useState } from 'react'
import styles from '@/components/common/imgupload/imgupload.module.sass'

function ImagePreview() {
  const [img, setImg] = useState('')

  const onChange = (e) => {
    const file = e.target.files.item(0)
    const fileReader = new FileReader()
    fileReader.addEventListener('load', fileLoad)
    fileReader.readAsDataURL(file)
  }

  const fileLoad = (e) => {
    setImg(e.target.result)
  }

  return (
    <div className={`${styles.app} `}>
      <h2>圖片上傳</h2>
      <input className="img-upload" type="file" onChange={onChange} />
      <img width="100%" src={img} alt="Preview" />
    </div>
  )
}

export default ImagePreview
