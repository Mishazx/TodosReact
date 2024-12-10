import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { addTodo, toggleTodo, clearCompleted, setFilter } from './store/todosSlice';
import Background from './common/Background/Background';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';
import { useTheme } from './context/ThemeContext';
import PageBackground from './common/PageBackground/PageBackground';

const App: React.FC = () => {
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

  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <PageBackground>
      <Background paperCount={paperCount}>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={filteredTodos} toggleTodo={(id) => dispatch(toggleTodo(id))} />
        <Footer
          count={todos.filter(todo => !todo.completed).length}
          setFilter={(filter) => dispatch(setFilter(filter))}
          filter={filter}
          clearCompleted={() => dispatch(clearCompleted())}
        />
      </Background>
    </PageBackground>
  );
};

export default App;
