import React from 'react'
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/pages/test/W-SignUpForm.module.sass'

export default function SignUpForm() {
  return (
    <div>
      <Container className={styles.flex}>
        <Row>
          <Col>
            <Title text="加入會員" text2="SIGN UP" lineColor="green" />
          </Col>
        </Row>

        <Row className="mb10px">
          <Col>
            <div className={styles.flexRow}>
              <InputBox type="text" placeholder="姓名" onChange />
              <InputBox type="text" placeholder="暱稱" onChange />
            </div>
          </Col>
        </Row>

        <Row className="mb10px">
          <Col>
            <InputBox type="email" placeholder=" 電子郵件信箱" onChange />
          </Col>
        </Row>
        <Row className="mb10px">
          <Col>
            <InputBox type="text" placeholder=" 密碼" onChange />
          </Col>
        </Row>
        <Row className="mb10px">
          <Col>
            <InputBox type="date" placeholder="出生年月日 " onChange />
          </Col>
        </Row>
        <Row className="mb10px">
          <Col>
            <InputBox type="text" placeholder="現居地址 " onChange />
          </Col>
        </Row>
        <Row className="mb10px">
          <Col>
            <p>
              如建立帳號，即同意錦囊廟祭的<b>隱私權政策</b>和<b>使用條款</b>
            </p>
          </Col>
        </Row>
        <Row className="mb10px">
          <Col>
            <Button text="加入" btnColor="black" className="w400px" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
