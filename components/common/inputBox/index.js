import React from 'react'
import { useState } from 'react'
import styles from '@/components/common/inputBox/inputBox.module.sass'

// onChange 用來記錄輸入文字的
export default function InputBox({
  type = 'text',
  prompt = '',
  placeholder = '',
  onChange,
  width = ' 487px',
}) {
  const [inputValue, setInputValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)

  const handleChange = (event) => {
    setInputValue(event.target.value)
    if (onChange) {
      console.log(inputValue)
    }
  }

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
    <>
      <div> {prompt}</div>
      <div>
        <input
          type={type}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{ width }}
          className={`${isFocus ? styles.focus : ''} ${styles.standard_input}`}
        />
      </div>
    </>
  )
}
