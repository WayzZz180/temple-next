import styles from './orderSummaryCard.module.sass'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//ccomponents
import Title from '@/components/common/title/orderTitle'
import Button from '@/components/common/button'

export default function OrderSummary({data}) {
  return (
    <>
        <Col className={`${styles.container}`}>
            <div>  
                <Title data={data}/>
            </div>
            <div className={`${styles.button}`}>
                <div className =''>
                    <Button text='訂單詳情' btnColor='brown' fontSize='20px' padding='10px 60px'/>
                </div>
                <div className=''>
                    <Button text='留下評論' btnColor='brown' fontSize='20px' padding='10px 60px'/>
                </div>
                <div className={`${styles.total}`}>
                    <div className={`${styles.totalTitle} fwBold fs20px`}>訂單金額</div>
                    <div className={`${styles.price} fwBold fs28px`}>${data?.total}</div>
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