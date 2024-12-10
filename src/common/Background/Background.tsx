import { FC, ReactNode } from 'react';
import Paper from '../Paper/Paper';
import styles from './Background.module.css';
import Title from '../Title/Title';

type BackgroundProps = {
  paperCount: number;
  children?: ReactNode;
};

const Background: FC<BackgroundProps> = ({ paperCount, children }) => {
  const paper = [];
  
  for (let i = 0; i < paperCount; i++) {
    paper.push(
      <Paper
        key={i}
        zIndex={paperCount - i}
        top={`${i * 8}px`}
        left={`${i * 6}px`}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <Title>todos</Title>
        <div className={styles.paper} >
          {paper}
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Background;

