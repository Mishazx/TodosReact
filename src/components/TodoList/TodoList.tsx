import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <div className={styles.todo}>
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
    ))}
  </div>
);

export default TodoList;
