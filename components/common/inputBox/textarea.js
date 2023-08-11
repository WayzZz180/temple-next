import React, { useState } from 'react'
import styles from '@/components/common/inputBox/textarea.module.sass'

export default function TextArea({
  type = 'text',
  prompt = '',
  placeholder = '',
  onChange,
  id,
  width = '453px',
  value = '',
  height = '45px',
  isError,
  showError, // 新增一個 showError 屬性來控制錯誤訊息的顯示
  errorMessage,
  lineheight = '',
}) {
  const [isFocus, setIsFocus] = useState(false)

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
    <div className={styles.input_box_container}>
      <div className={`${styles.prompt} mb10px fwBold fs18px`}>{prompt}</div>
      <div className={styles.input_box_wrapper}>
        <textarea
          type={type}
          value={value}
          id={id}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{ width, height }}
          lineheight={lineheight}
          // Apply error styles based on the isError prop
          className={`${styles.standard_input} ${
            isError ? styles.error_input : ''
          } ${isFocus ? styles.standard_focus : ''}`}
        />
        {/* 根據 isError 屬性來決定是否顯示錯誤訊息 */}
        {isError && <div className={styles.error_message}>{errorMessage}</div>}
      </div>
    </div>
  )
}
