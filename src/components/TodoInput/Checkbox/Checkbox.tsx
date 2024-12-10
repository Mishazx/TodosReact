import React, { FC } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  isChecked: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox: FC<CheckboxProps> = ({ isChecked, onChange, label }) => {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className={styles.checkboxInput}
        aria-label={label}
      />
      <span className={styles.customCheckbox} />
    </label>
  );
};

export default Checkbox;
