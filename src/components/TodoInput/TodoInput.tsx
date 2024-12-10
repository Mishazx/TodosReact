import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import styles from './TodoInput.module.css'
import DownArrow from '../../common/Icons/DownArrow/DownArrow';

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

  return (
    <form id={'form'} onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrapper}>
        <DownArrow />
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          className={styles.input}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </form>
  );
};

export default TodoInput;
