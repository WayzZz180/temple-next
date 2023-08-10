import React from 'react'
import styles from '@/components/common/memberNavbar/memberNavbar.module.sass'
import Link from 'next/link'
import variables from '@/styles/_variables.module.sass'
import { useRouter } from 'next/router'

//Components
import data from '@/components/mydata/memberNavbarData'
import { Row, Col } from 'react-bootstrap'

// 點到該頁面會變色
export default function MemberNavbar() {
  const router = useRouter()

  return (
    <Row className={styles.flex_space_around}>
      {data.map((v, i) => (
        <Col key={i}>
          <Link href={`/member/${v.id}`} className="link">
            <span
              className={`${styles.text} fs20px fwBold`}
              style={{
                color: router.asPath.includes(`/member/${v.id.split('?')[0]}`)
                  ? variables['green']
                  : '',
              }}
            >
              {v.text}
            </span>
          </Link>
        </Col>
      ))}
    </Row>
  )
}
