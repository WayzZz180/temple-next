import styles from './checkOrder.module.sass'

export default function CheckOrder({
  text = '收件人姓名',
  content = '沈子威',
}) {
  return (
    <div className={`${styles.col} fwBold fs20px mb10px`}>
      <div className={`${styles.title} pe10px`}>{text}：</div>
      <div className={`${styles.customer} pb5px`}>{content}</div>
    </div>
  )
}
