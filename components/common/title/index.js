import styles from './title.module.sass'
import variables from '@/styles/_variables.module.sass'

//text = 大標
//text2 = 小標
// lineColor = black, green, hot_pink, brown
export default function Title({
  text = 'text',
  text2 = 'text',
  lineColor = 'green',
}) {
  const var_color = variables[lineColor]
  return (
    <div className={`${styles.flex} mt120px`}>
      <div className={`${styles.title}`}>{text}</div>
      <div className={`${styles.title2}`}>{text2}</div>
      <div
        className={`${styles.line}`}
        style={{ backgroundColor: var_color }}
      ></div>
    </div>
  )
}
