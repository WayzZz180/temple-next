// import '@/styles/mixins/button.module.sass'
import '@/styles/mixins/button.module.scss'
import variables from '@/styles/_variables.module.scss'

export default function Button({ text = 'content', btnColor = 'black' }) {
  const dynamicColor = variables[btnColor]
  return (
    <>
      <div>
        <button className={`btn`} style={{ background: dynamicColor }}>
          {text}
        </button>
      </div>
    </>
  )
}
