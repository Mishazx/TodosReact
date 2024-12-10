import { FC } from "react";
import styles from './Paper.module.css';

interface PaperLeafProps {
  zIndex: number;
  top: string;
  left: string;
}

const PaperLeaf: FC<PaperLeafProps> = ({ zIndex, top, left }) => {
  return (
    <div className={styles.paper} style={{ zIndex: zIndex, top: top, left: left}}/>
  );
};

export default PaperLeaf;