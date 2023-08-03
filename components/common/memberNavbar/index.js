import React  from 'react'
import styles from '@/components/common/memberNavbar/memberNavbar.module.sass'
import Link  from 'next/link'
import { useRouter } from 'next/router'

//Components
import data from '@/components/mydata/memberNavbarData'
import { Row, Col } from 'react-bootstrap'



// 點到該頁面會變色
export default function MemberNavbar() {
  const router = useRouter();
  return (
    <Row className={styles.flex_space_around}>
      {data.map((v, i) => (
        <Col key={i}>
          <Link href={`/member/${v.id}`} className="link" >
           <span className={router.pathname.includes(v.id) ? styles.currentPage : ""}>{v.text}</span> 
          </Link>
        </Col>
      ))}
    </Row>
  )
}
