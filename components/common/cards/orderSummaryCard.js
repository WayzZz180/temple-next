import styles from './orderSummaryCard.module.sass'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//components
import Title from '@/components/common/title/orderTitle'
import Button from '@/components/common/button'

export default function OrderSummary({
  data = [],
  text1 = '訂單詳情',
  text2 = '留下評論',
  link1 = () => {},
  link2 = () => {},
}) {
  const info = [
    {
      title: '訂單編號',
      content: data?.oid,
    },
    {
      title: '訂單日期',
      content: data?.created_at
        ? data?.created_at.slice(0, 10).replace(/\-/g, '/')
        : data?.created_at,
    },
    {
      title: '配送方式',
      content: `${data?.delivery}｜`,
    },
    {
      title: '付款方式',
      content: data?.payment,
    },
    {
      title: '收件資訊',
      content: data?.customer_address,
    },
  ]
  return (
    <>
      <Col className={`${styles.container}`}>
        <div className={`${styles.title}`}>
          <Title data={data} info={info} />
        </div>
        <div className={`${styles.button}`}>
          <div className="">
            <Button
              text={text1}
              btnColor="brown"
              fontSize="20px"
              padding="10px 60px"
              link={link1}
            />
          </div>
          <div className="">
            <Button
              text={text2}
              btnColor="brown"
              fontSize="20px"
              padding="10px 60px"
              link={link2}
            />
          </div>
          <div className={`${styles.total}`}>
            <div className={`${styles.totalTitle} fwBold fs20px`}>訂單金額</div>
            <div className={`${styles.price} fwBold fs28px`}>
              ${data?.total}
            </div>
          </div>
        </div>
        <div className={`${styles.rwdButton}`}>
          <div className="">
            <Button
              text={text1}
              btnColor="brown"
              fontSize="20px"
              padding="10px 120px"
              link={link1}
            />
          </div>
          <div className="">
            <Button
              text={text2}
              btnColor="brown"
              fontSize="20px"
              padding="10px 120px"
              link={link2}
            />
          </div>
          <div className={`${styles.total}`}>
            <div className={`${styles.totalTitle} fwBold fs20px`}>訂單金額</div>
            <div className={`${styles.price} fwBold fs28px`}>
              ${data?.total}
            </div>
          </div>
        </div>
      </Col>
      <div className={`${styles.lineContainer} pt30px`}>
        <div className={`${styles.line}`}></div>
      </div>
    </>
  )
}
2
