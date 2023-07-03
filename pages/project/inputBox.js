import React from 'react'
import styles from '@/styles/inputBox.module.css'

export default function InputBox() {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control short_input"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <style jsx>
        {`
          .short_input {
            width: 500px;
          }
        `}
      </style>
    </>
  )
}
