import styles from './noButton.module.sass'
import variables from '@/styles/_variables.module.sass'

// text = Button content
// btnColor = black, green, hot_pink, brown
export default function Button({
  text = 'text',
  btnColor = 'hot_pink',
  width = '',
  padding = '15px 60px',
  fontSize = '24px',
  borderRadius = '7px',
  link = () => {},
}) {
  const var_color = variables[btnColor]
  return (
    <>
      <div>
        <button
          onClick={link}
          className={`${styles.btn}`}
          style={{
            backgroundColor: var_color,
            width: `${width}`,
            padding: `${padding}`,
            fontSize: `${fontSize}`,
            borderRadius: `${borderRadius}`,
          }}
        >
          <div className={`${styles.text}`}>{text}</div>
        </button>
      </div>
    </>
  )
}
