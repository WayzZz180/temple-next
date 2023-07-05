// import variables from '@/styles/_variables.module.scss'
// import '@/styles/mixins/button.module.scss'

// export default function Page() {
//   return (
//     <>
//       <h1 style={{ color: variables.green }}>Hello, Next.js!</h1>
//       <h1 className="btn_p">Hello, Next.js!</h1>
//     </>
//   )
// }
import Button from '@/components/common/button/test'

export default function SassTest() {
  return (
    <>
      <Button text="TRY1" btnColor="green" />
      <Button text="TRY2" btnColor="hot-pink" />
    </>
  )
}
