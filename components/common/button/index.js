import styles from './button.module.sass'
import variables from '@/styles/_variables.module.sass'
import Star from '@/assets/Star_white.svg'
import Image from 'next/image'

// text = Button content
// btnColor = black, green, hot_pink, brown
export default function Button({ text = 'text', btnColor = 'btn' }) {
  const var_color = variables[btnColor]
  return (
    <>
      <div>
        <button
          className={`${styles.btn}`}
          style={{ backgroundColor: var_color }}
        >
          <span className={`${styles.IconContainer} `}>
            <Image
              src={Star}
              alt=""
              width="25"
              className={`${styles.img}`}
            ></Image>
          </span>
          <div className={`${styles.text}`}> {text}</div>
          <span className={`${styles.IconContainer2}`}>
            <Image
              src={Star}
              alt=""
              width="25"
              className={`${styles.img}`}
            ></Image>
          </span>
        </button>
      </div>
    </>
  )
}
