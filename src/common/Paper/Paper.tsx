import { FC } from "react";
import styles from './Paper.module.css';
import { useTheme } from "../../context/ThemeContext";

interface PaperLeafProps {
  zIndex: number;
  top: string;
  left: string;
}

const PaperLeaf: FC<PaperLeafProps> = ({ zIndex, top, left }) => {
  const { theme } = useTheme();
  return (
    <div className={`${styles.paper} ${styles[theme]}`} style={{ zIndex: zIndex, top: top, left: left}}/>
  );
};

export default PaperLeaf;
