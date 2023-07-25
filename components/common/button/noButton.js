import styles from './noButton.module.sass'
import variables from '@/styles/_variables.module.sass'
import Star from '@/assets/Star_white.svg'
import Image from 'next/image'

// text = Button content
// btnColor = black, green, hot_pink, brown
export default function Button({ text = 'text', btnColor = 'btn', link }) {
  const var_color = variables[btnColor]
  return (
    <>
      <div>
        <button
          onClick={link}
          className={`${styles.btn}`}
          style={{ backgroundColor: var_color }}
        >
          <div className={`${styles.text}`}>{text}</div>
        </button>
      </div>
    </>
  )
}
