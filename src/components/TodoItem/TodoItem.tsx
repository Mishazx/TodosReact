import React from 'react';
import styles from './TodoItem.module.css'; 
import Checkbox from '../TodoInput/Checkbox/Checkbox';
import { useTheme } from '../../context/ThemeContext';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, toggleTodo }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.todoItem} ${styles[theme]} ${completed ? styles.completed : ''}`}>
      <Checkbox isChecked={completed} onChange={() => toggleTodo(id)} label={text} />
      <div className={`${styles.text} ${completed ? `${styles.completedText} ${styles[theme]}` : ''}`}>{text}</div>
    </div>
  );
};

export default TodoItem;
