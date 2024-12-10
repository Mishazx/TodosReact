import React from 'react';
import styles from './PageFooter.module.css';
import { useTheme } from '../../context/ThemeContext';
import Selector from '../Selector/Selector';


const PageFooter = () => {
  const { theme, themeId, setThemeById } = useTheme();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('Selected:', event.target.value);
    setThemeById(parseInt(event.target.value));
  };

  const themes = [
    {
      id: 0, name: 'light'
    },
    {
      id: 1, name: 'dark'
    },
    {
      id: 2, name: 'blue',
    },
    {
      id: 3, name: 'sunny'
    }

  ]

  return (
    <div className={`${styles.pageFooter} ${styles[theme]}`} id={styles.footer}>
      <div className={styles.leftBlock}></div>
      <div className={styles.rightBlock}>
        <Selector data={themes} value={themeId} handleSelectChange={handleSelectChange} />
      </div>
    </div>
  );
};

export default PageFooter;
