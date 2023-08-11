import Figure from 'react-bootstrap/Figure'
import styles from './forumperpic.module.sass'

function FigureExample() {
  return (
    <Figure className={`${styles.margin}`}>
      <Figure.Image
        width={118}
        height={118}
        alt="118x118"
        src="http://localhost:3002/img/babyDory.jpg"
      />
    </Figure>
  )
}

export default FigureExample
