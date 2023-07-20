import styles from './memberButton.module.sass'
import variables from '@/styles/_variables.module.sass'

// text = Button content
// btnColor = black, green, hot_pink, brown
export default function Button({
  text = 'text',
  btnColor = 'btn',
  width = ' ',
}) {
  const var_color = variables[btnColor]

  return (
    <>
      <div>
        <button
          className={`${styles.btn}`}
          style={{ backgroundColor: var_color, width }}
        >
          <div className={`${styles.text}`}> {text}</div>
        </button>
      </div>
    </>
  )
}
