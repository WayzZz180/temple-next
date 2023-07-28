import React from 'react'
import { useState } from 'react'
import styles from '@/components/common/inputBox/inputBox.module.sass'

// onChange 用來記錄輸入文字的
export default function InputBox({
  type = 'text',
  prompt = '',
  placeholder = '',
  onChange,
  width = ' 453px',
  // 487 - 15*2 空白 -2*2border = 453
  height = '45px',
  // 49 -2*2 border = 45
  name = '',
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
      <div className="mb6px"> {prompt}</div>
      <div>
        <input
          type={type}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{ width, height }}
          name={name}
          className={`${isFocus ? styles.focus : ''} ${styles.standard_input}`}
        />
      </div>
    </>
  )
}
