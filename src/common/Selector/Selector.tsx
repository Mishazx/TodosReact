import React, { FC } from "react";
import styles from './Selector.module.css'
import { useTheme } from "../../context/ThemeContext";

interface SelectorProps {
  data: {id: number, name: string}[];
  value: number;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Selector: FC<SelectorProps> = ({ data, value, handleSelectChange }) => {
  const { theme } = useTheme();
  return (
    <select className={`${styles.select} ${styles[theme]}`} onChange={handleSelectChange} value={value}>
      {data.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ))}
    </select>
  );
}

export default Selector;
