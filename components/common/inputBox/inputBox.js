import { useState } from 'react'
import styles from '@/components/common/inputBox/inputBox.module.css'

function InputBox({ type = 'text', prompt = '', placeholder, onChange }) {
  const [inputValue, setInputValue] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  const handleChange = (event) => {
    setInputValue(event.target.value)
    if (onChange) {
      onChange(event.target.value)
      console.log(inputValue)
    }
  }

  const handleClick = () => {
    setIsClicked(true)
  }

  return (
    <>
      <div> {prompt}</div>
      <div>
        <input
          type={type}
          value={inputValue}
          onChange={handleChange}
          onClick={handleClick}
          placeholder={placeholder}
          // className={isClicked ? styles.clicked : ''}
          // className="form-control"
        />
      </div>
    </>
  )
}

export default function InputBoxTest2() {
  return (
    <>
      <InputBox prompt="name" type="text" placeholder="insert your name" />
      <InputBox prompt="email" type="email" placeholder="insert your email" />
    </>
  )
}

//TODO
//onClick 變色

// https://mui.com/material-ui/react-text-field/
