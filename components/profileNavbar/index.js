import React from 'react'
import styles from '@/components/profileNavbar/profileNavbar.module.sass'

//Components
import data from '@/components/mydata/profileNavbar'
import { Row, Col } from 'react-bootstrap'

export default function ProfileNavbar() {
  return (
    <Row className={styles.flex_space_around}>
      {data.map((v, i) => (
        <Col key={i}>{v.text}</Col>
      ))}
    </Row>
  )
}
