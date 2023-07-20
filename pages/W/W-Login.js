import React from 'react'
import Image from 'next/image'
import styles from '@/pages/W/W-Login.module.sass'

// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/memberButton.js'
import doorGodLeft from '@/assets/doorGodLeft.svg'
import doorGodRight from '@/assets/doorGodRight.svg'
import Checkbox from '@/components/common/checkBox'

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
        <Row className={styles.flex_centre}>
          <Col>
            <Title text="登入會員" text2="LOGIN" lineColor="green" />
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
        <Row>
          <Col className={styles.flex_checkbox}>
            <Checkbox label="保持登入狀態?" />
            <a href="">忘記密碼？</a>
          </Col>
        </Row>
        <Row className={styles.flex_container}>
          <Col>
            <div>
              如登入，即同意錦囊廟祭的 <a href="">隱私權政策</a>和
              <a href="">使用條款</a>
            </div>
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <Button text="登入" btnColor="black" width={487} />
          </Col>
        </Row>
        <Row className={styles.flex_centre}>
          <Col>
            <div>
              不是會員? <a href="">加入我們</a>
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
