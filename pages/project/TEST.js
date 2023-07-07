import Title from '@/components/common/title'
import styles from '@/pages/project/TEST.module.css'
import InputBox from '@/components/common/inputBox/index.js'

export default function TEST0() {
  return (
    <>
      <Title
        CHNtext="登入會員"
        ENGtext="SIGN UP"
        colored_line={styles.colored_line_green}
      />
      <Title
        CHNtext="步驟"
        ENGtext="STEPS"
        colored_line={styles.colored_line_red}
      />

      <InputBox prompt="name" type="text" placeholder="insert your name" />
      <InputBox prompt="email" type="email" placeholder="insert your email" />
    </>
  )
}
