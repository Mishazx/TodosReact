import React, { FC } from 'react';
import styles from './Checkbox.module.css';
import { useTheme } from '../../../context/ThemeContext';

interface CheckboxProps {
  id: string;
  isChecked: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox: FC<CheckboxProps> = ({ id, isChecked, onChange, label }) => {
  const { theme } = useTheme();

  return (
    <label className={`${styles.checkbox} ${styles[theme]}`}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className={`${styles.checkboxInput} ${styles[theme]}`}
        aria-label={label}
      />
      <span className={`${styles.customCheckbox} ${styles[theme]}`} />
    </label>
  );
};

export default Checkbox;
