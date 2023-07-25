import React from 'react'
import { Form } from 'react-bootstrap'
import styles from '@/components/common/checkBox/checkBox.module.sass'

export default function Checkbox({ width = ' ', height = '', label = '' }) {
  return (
    <>
      <div className={styles.flex_checkbox}>
        <input
          type="checkbox"
          id="myCheckbox"
          className={styles.customCheckbox}
          label=""
        />
        <label htmlFor="myCheckbox">{label}</label>
      </div>
    </>
  )
}
