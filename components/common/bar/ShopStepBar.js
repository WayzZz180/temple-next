import styles from './ShopStepBar.module.sass'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ShopStepBar({ path = '/shop/cart' }) {
  const steps = [
    {
      path: '/shop/cart',
      text: '購 物 車',
    },
    {
      path: '/shop/order',
      text: '填 寫 資 料',
    },
    {
      path: '/shop/order/complete',
      text: '訂 單 確 認',
    },
  ]
  return (
    <Row className="nowrap mt100px">
      <Col>
        <div className={`${styles.circleContainer}`}>
          {steps.map((v, i) => {
            return (
              <Fragment key={i}>
                <div className={`${styles.align}`}>
                  <div
                    className={`${styles.circle} ${styles.active} fs24px`}
                    style={{ opacity: v.path === path ? 1 : 0.5 }}
                  >
                    {i + 1}
                  </div>
                  <div
                    className={`${styles.text} fwBold mt10px`}
                    style={{ opacity: v.path === path ? 1 : 0.5 }}
                  >
                    {v.text}
                  </div>
                </div>
                {i != steps.length - 1 ? (
                  <div className={`${styles.line} mb30px`}></div>
                ) : (
                  ''
                )}
              </Fragment>
            )
          })}
        </div>
      </Col>
    </Row>
  )
}
