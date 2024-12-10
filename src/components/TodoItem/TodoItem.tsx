import React from 'react';
import styles from './TodoItem.module.css'; 
import Checkbox from '../TodoInput/Checkbox/Checkbox';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, toggleTodo }) => {
  return (
    <div className={`${styles.todoItem} ${completed ? styles.completed : ''}`}>
      <Checkbox isChecked={completed} onChange={() => toggleTodo(id)} label={text} />
      <div className={`${styles.text} ${completed ? styles.completedText : ''}`}>{text}</div>
    </div>
  );
};

export default TodoItem;
