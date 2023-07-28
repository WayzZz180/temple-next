import React, { useState } from 'react'
import styles from '@/components/common/inputBox/inputBox.module.sass'

export default function InputBox({
  type = 'text',
  prompt = '',
  placeholder = '',
  onChange,
  id,
  width = '453px',
  value = '',
  height = '45px',
<<<<<<< HEAD
  // 49 -2*2 border = 45
  name = '',
}) {
  // const [inputValue, setInputValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)
=======
>>>>>>> origin/Wayz

  isError,
  showError, // 新增一個 showError 屬性來控制錯誤訊息的顯示
  errorMessage,
}) {
  const [isFocus, setIsFocus] = useState(false)

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
<<<<<<< HEAD
    <div>
      <div className="mb10px fs20px"> {prompt}</div>
      <div>
=======
    <div className={styles.input_box_container}>
      <div className={styles.prompt}>{prompt}</div>
      <div className={styles.input_box_wrapper}>
>>>>>>> origin/Wayz
        <input
          type={type}
          value={value}
          id={id}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{ width, height }}
<<<<<<< HEAD
          name={name}
          className={`${isFocus ? styles.focus : ''} ${styles.standard_input}`}
=======
          // Apply error styles based on the isError prop
          className={`${styles.standard_input} ${
            isError ? styles.error_input : ''
          } ${isFocus ? styles.standard_focus : ''}`}
>>>>>>> origin/Wayz
        />
        {/* 根據 isError 屬性來決定是否顯示錯誤訊息 */}
        {isError && <div className={styles.error_message}>{errorMessage}</div>}
      </div>
    </div>
  )
}
