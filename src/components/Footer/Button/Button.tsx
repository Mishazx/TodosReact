import { FC } from "react";
import styles from './Button.module.css'

interface ButtonProps {
  children: any
  onClick?: () => void
  active?: boolean
}

const Button: FC<ButtonProps> = ({ children, onClick, active }) => {
  return (
    <span
      onClick={onClick}
      className={`${styles.button} ${active ? styles.active : ''}`}
    >
        {children}
    </span>
  )
}

export default Button;

