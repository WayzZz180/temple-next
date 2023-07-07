import { useState } from 'react'

export default function InputBox({
  type = 'text',
  prompt = '',
  placeholder = '',
  onChange,
}) {
  const [inputValue, setInputValue] = useState('')
  // const [isFocus, setIsFocus] = useState(false)

  const handleChange = (event) => {
    setInputValue(event.target.value)
    if (onChange) {
      console.log(inputValue)
    }
  }

  // const handleFocus = () => {
  //   setIsFocus(true)
  // }
  // ??!

  return (
    <>
      <div> {prompt}</div>
      <div>
        <input
          type={type}
          value={inputValue}
          onChange={handleChange}
          // onFocus={handleFocus}
          placeholder={placeholder}
          // className={isFocus ? styles.focus : ''}
          // className="form-control"
        />
      </div>
    </>
  )
}

//TODO
//onClick 變色

// https://mui.com/material-ui/react-text-field/
//use ref
