import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import styles from './TodoInput.module.css'
import DownArrow from '../../common/Icons/DownArrow/DownArrow';
import { useTheme } from '../../context/ThemeContext';

type TodoInputProps = {
  addTodo: ActionCreatorWithPayload<string, 'todos/addTodo'>;
};

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const { theme } = useTheme();

  return (
    <form id={'form'} onSubmit={handleSubmit} className={`${styles.form} ${styles[theme]}`}>
      <div className={`${styles.inputWrapper} ${styles[theme]}`}>
        <DownArrow />
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          className={`${styles.input} ${styles[theme]}`} 
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </form>
  );
};

export default TodoInput;
