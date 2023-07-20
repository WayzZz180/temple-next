import React from 'react'
import Image from 'next/image'
import styles from '@/pages/W/W-SignUp.module.sass'
// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/memberButton.js'
import doorGodLeft from '@/assets/doorGodLeft.svg'
import doorGodRight from '@/assets/doorGodRight.svg'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function SignUp() {
  return (
    <div className={styles.flex}>
      <Container>
        <Row>
          <Col>
            <Image
              src={doorGodLeft}
              alt="doorGodLeft"
              height={835}
              width={631}
            ></Image>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Title text="加入會員" text2="SIGN UP" lineColor="green" />
          </Col>
        </Row>
        <Row className={styles.flex_space_between}>
          <Col>
            <InputBox type="text" placeholder="姓名" onChange width={202} />
          </Col>
          {/* 202-15*2空白 = 202 */}
          <Col>
            <InputBox type="text" placeholder="暱稱" onChange width={202} />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox
              prompt="Email"
              type="email"
              placeholder="電子郵件地址"
              onChange
            />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox type="text" placeholder="密碼" onChange />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox type="date" placeholder="出生年月日 " onChange />
          </Col>
          {/* Q3 */}
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <InputBox type="text" placeholder="現居地址 " onChange />
          </Col>
        </Row>
        <Row className={styles.flex_container}>
          <Col>
            <div>
              {/* <div style={{ letterSpacing: '4.1px' }}> */}
              {/* Q4 */}
              如建立帳號，即同意錦囊廟祭的 <a href="">隱私權政策</a>和
              <a href="">使用條款</a>
            </div>
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <Button text="加入" btnColor="black" width={487} />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <div>
              已經是會員了嗎? <a href="">登入</a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image
              src={doorGodRight}
              alt="doorGodRight"
              height={835}
              width={631}
            ></Image>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
