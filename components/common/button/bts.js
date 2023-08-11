import styles from './button.module.sass'
import variables from '@/styles/_variables.module.sass'
import Star from '@/assets/Star_white.svg'
import Image from 'next/image'

// text = Button content
// btnColor = black, green, hot_pink, brown
export default function Button({
  text = 'text',
  btnColor = 'hot_pink',
  width = '',
  height = '',
  padding = '15px 60px',
  fontSize = '24px',
  link = () => {},
  type = '',
}) {
  const var_color = variables[btnColor]
  return (
    <>
    <div
        style={{
          transform: 'scale(0.6)',
          transformOrigin: 'center',
          width: '106px',
        }}
      >
      <button
        onClick={link}
        type={type}
        className={`${styles.btn}`}
        style={{
          backgroundColor: var_color,
          width: `${width}`,
          height: `${height}`,
          padding: `${padding}`,
          fontSize: `${fontSize}`,
        }}
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
