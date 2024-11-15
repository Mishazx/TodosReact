import React, { FC } from 'react';
import styles from './Checkbox.module.css'; // Импортируйте CSS-модуль

interface CheckboxProps {
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox: FC<CheckboxProps> = ({ isChecked, onChange }) => {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className={styles.checkboxInput}
      />
      <span className={styles.customCheckbox}></span>
    </label>
  );
};

export default Checkbox;
