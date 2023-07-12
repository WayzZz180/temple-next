import React from 'react'
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/pages/test/W-SignUpForm.module.sass'

export default function SignUpForm() {
  return (
    <div className={styles.flex}>
      <Container>
        <Row>
          <Col>
            <Title text="加入會員" text2="SIGN UP" lineColor="green" />
          </Col>
        </Row>

        <Row className={styles.flex_space_between}>
          <Col>
            <InputBox type="text" placeholder="姓名" onChange width={232} />
          </Col>

          <Col>
            <InputBox type="text" placeholder="暱稱" onChange width={232} />
          </Col>
        </Row>

        <Row className={styles.flex_space_between}>
          <Col>
            <InputBox
              prompt="Email"
              type="email"
              placeholder="電子郵件信箱"
              onChange
            />
          </Col>
        </Row>
        <Row className={styles.flex_space_between}>
          <Col>
            <InputBox type="text" placeholder="密碼" onChange />
          </Col>
        </Row>
        <Row className={styles.flex_space_between}>
          <Col>
            <InputBox type="date" placeholder="出生年月日 " onChange />
          </Col>
        </Row>
        <Row className={styles.flex_space_between}>
          <Col>
            <InputBox type="text" placeholder="現居地址 " onChange />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <div>
              如建立帳號，即同意錦囊廟祭的<b>隱私權政策</b>和<b>使用條款</b>
            </div>
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <Button text="加入" btnColor="black" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
