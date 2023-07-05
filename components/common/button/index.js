import '@/styles/mixins/button.module.sass'

export default function Button({ text = 'text', btnColor = 'btn' }) {
  return (
    <>
      <div>
        <button className={`btn ${btnColor}`}>{text}</button>
      </div>
    </>
  )
}
