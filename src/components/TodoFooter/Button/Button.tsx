import { FC } from "react";
import styles from './Button.module.css'
import { useTheme } from "../../../context/ThemeContext";

interface ButtonProps {
  children: any
  onClick?: () => void
  active?: boolean
  all?: boolean
}

const Button: FC<ButtonProps> = ({ children, onClick, active, all }) => {
  const { theme } = useTheme();

  return (
    <span
      onClick={onClick}
      className={`${styles.button} ${styles[theme]} ${active ? styles.active : ''} ${all ? styles.all : ''}`}
    >
      {children}
    </span>
  );
};

export default Button;
