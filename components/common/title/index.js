import styles from './title.module.sass'

export default function Title({
  text = 'text',
  text2 = 'text',
  lineColor = 'line_p',
}) {
  return (
    <>
      <div>
        <p className={`${styles.title}`}>{text}</p>
        <p className={`${styles.title2}`}>{text2}</p>
        <div className={`${styles.line} ${styles[lineColor]}`}></div>
      </div>
    </>
  )
}
