import styles from './WorshipTitle.module.sass'
import variables from '@/styles/_variables.module.sass'

//text = 大標
//text2 = 小標
// lineColor = black, green, hot_pink, brown
export default function Title({
  text = 'text',
  text2 = 'text',
  lineColor = 'green',
  width = '',
  marginTop = '120',
}) {
  const var_color = variables[lineColor]
  return (
    <div className={`${styles.flex}`} style={{ marginTop: `${marginTop}px` }}>
      <div className={`${styles.title} pb10px`}>{text}</div>
      <div className={`${styles.title} pb10px`}>{text2}</div>
      <div
        className={`${styles.line}`}
        style={{ backgroundColor: var_color, width: width }}
      ></div>
    </div>
  )
}
