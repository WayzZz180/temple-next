export default function Button({ text = 'text', btnColor = 'btn' }) {
  return (
    <>
      <div>
        <button className={btnColor}>{text}</button>
      </div>
    </>
  )
}
