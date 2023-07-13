import styles from './ShopTitle.module.sass'
import variables from '@/styles/_variables.module.sass'

//text = 大標
// lineColor = black, green, hot_pink, brown
export default function ShopTitle({
  text = 'text',
  lineColor = 'green',
}) {
  const var_color = variables[lineColor]
  return (
    <div className={`${styles.flex} mt120px`}>
      <div className={`${styles.title} mb30px`}>{text}</div>
      <div
        className={`${styles.line}`}
        style={{ backgroundColor: var_color }}
      ></div>
    </div>
  )
}
