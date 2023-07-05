import styles from './button.module.sass'

export default function Button({ text = 'text', btnColor = 'btn' }) {
  return (
    <>
      <div>
        <button className={`${styles.btn} ${styles[btnColor]}`} width="10">
          {text}
        </button>
      </div>
    </>
  )
}
