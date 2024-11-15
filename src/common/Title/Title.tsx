import { ReactNode } from 'react'
import styles from './Title.module.css'

type Props = {
  children: ReactNode
}

const Title = (props: Props) => {
  return (
    <div>
      <h1 className={styles.title}>
        {props.children}
      </h1>
    </div>
  )
}


export default Title;
