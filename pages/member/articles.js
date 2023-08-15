import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//components
// import Forumline from '@/components/common/forumlogo/forumline'
// import Navbar from '@/components/common/forumlogo/navbar'
// import Forumper from '@/components/common/forumlogo/forumper'
// import AdvancedExample from '@/components/common/forumlogo/pagination'
import MemberNavbar from '@/components/common/memberNavbar'
import MemberTitle from '@/components/common/title/memberTitle'
import ProfilePhoto from '@/components/common/profilePhoto'
import data from '@/components/mydata/memberNavbarData.js'
import ForumperDemo from '@/components/common/forumperdemo'

export default function Forumgossip() {
  return (
    <>
      <Head>
        <title>{data[5]?.text}</title>
      </Head>
      <div className={``}>
        <Container>
          <ProfilePhoto />
          <Row>
            <Col>
              <MemberTitle text="我的文章" text2="ARTICLES" lineColor="green" />
            </Col>
          </Row>
          <MemberNavbar />
          <ForumperDemo />
          {/* <Forumper /> */}
        </Container>
      </div>
    </>
  )
}
