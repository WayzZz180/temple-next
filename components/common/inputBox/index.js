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
  validationRules,
  isError,
  errorMessage, // Receive the error message as a prop
}) {
  const [isFocus, setIsFocus] = useState(false)

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  const validateInput = () => {
    const errors = {}
    if (validationRules) {
      for (const field in validationRules) {
        const rule = validationRules[field]
        if (rule.required && (!value || value.trim() === '')) {
          errors[field] = rule.message
        }
        if (rule.regex && !rule.regex.test(value)) {
          errors[field] = rule.message
        }
        if (rule.regex && !rule.regex.test(value)) {
          errors[field] = rule.message
        }
      }
    }
    return errors
  }

  const errors = validateInput()

  return (
    <div className={styles.input_box_container}>
      <div className={styles.prompt}>{prompt}</div>
      <div className={styles.input_box_wrapper}>
        <input
          type={type}
          value={value}
          id={id}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{ width, height }}
          // Apply error styles based on the isError prop
          className={`${styles.standard_input} ${
            isError && errors[id] ? styles.error_input : ''
          } ${isFocus ? styles.standard_focus : ''}`}
        />
        {isError && errors[id] && (
          <div className={styles.error_message}>{errors[id]}</div>
        )}
      </div>
    </div>
  )
}
