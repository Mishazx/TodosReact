import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Background from '../../common/Background/Background';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import { addTodo, clearCompleted, setFilter, toggleTodo } from '../../store/todosSlice';
import TodoFooter from '../TodoFooter/TodoFooter';

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.items);
  const filter = useSelector((state: RootState) => state.todos.filter);
  let paperCount = 0;
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (filter === 'all') {
    paperCount = 3;
  }
  if (filter === 'active') {
    paperCount = 2;
  }
  if (filter === 'completed') {
    paperCount = 1;
  }
  
  return (
    <Background paperCount={paperCount}>
    <TodoInput addTodo={addTodo} />
    <TodoList todos={filteredTodos} toggleTodo={(id) => dispatch(toggleTodo(id))} />
    <TodoFooter
      count={todos.filter(todo => !todo.completed).length}
      setFilter={(filter) => dispatch(setFilter(filter))}
      filter={filter}
      clearCompleted={() => dispatch(clearCompleted())}
    />
  </Background>
  );
};

export default Todo;
