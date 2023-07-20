import React from 'react'
import styles from '@/components/common/memberNavbar/memberNavbar.module.sass'
import Link from 'next/link'
//Components
import data from '@/components/mydata/memberNavbarData'
import { Row, Col } from 'react-bootstrap'

export default function MemberNavbar() {
  return (
    <Row className={styles.flex_space_around}>
      {data.map((v, i) => (
        <Col key={i}>
          <Link href="" className="link">
            {v.text}
          </Link>
        </Col>
      ))}
    </Row>
  )
}
