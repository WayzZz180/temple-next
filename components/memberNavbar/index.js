import React from 'react'
import styles from '@/components/memberNavbar/memberNavbar.module.sass'

//Components
import data from '@/components/mydata/memberNavbar'
import { Row, Col } from 'react-bootstrap'

export default function MemberNavbar() {
  return (
    <Row className={styles.flex_space_around}>
      {data.map((v, i) => (
        <Col key={i}>{v.text}</Col>
      ))}
    </Row>
  )
}
