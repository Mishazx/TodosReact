import React from 'react';
import styles from './TodoFooter.module.css';
import Button from './Button/Button';
import { useTheme } from '../../context/ThemeContext';

interface FooterProps {
  count: number;
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ count, filter, setFilter, clearCompleted }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.footer} ${styles[theme]}`}>
      <span className={styles.text}>{count} items left</span>
      <div>
        <Button onClick={() => setFilter('all')} active={filter === 'all'}>
          <span className={styles.text}>All</span>
        </Button>
        <Button onClick={() => setFilter('active')} active={filter === 'active'}>
          <span className={styles.text}>Active</span>
        </Button>
        <Button onClick={() => setFilter('completed')} active={filter === 'completed'}>
          <span className={styles.text}>Completed</span>
        </Button>
    </div>
      <Button onClick={clearCompleted}>
        <span className={styles.text}> 
          Clear completed
        </span>
      </Button>
    </div>
  );
};

export default Footer;
