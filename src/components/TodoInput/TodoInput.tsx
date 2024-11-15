import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import styles from './TodoInput.module.css'

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
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        className={styles.input}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TodoInput;
