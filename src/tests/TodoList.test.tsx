import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList/TodoList';
import Todo from '../types/Todo';
import { ThemeProvider } from '../context/ThemeContext';

const mockToggleTodo = jest.fn();

describe('TodoList', () => {
  const todos: Todo[] = [
    { id: 1, text: 'Test Todo 1', completed: false },
    { id: 2, text: 'Test Todo 2', completed: true },
  ];


  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the list of todos', () => {
    render(<ThemeProvider><TodoList todos={todos} toggleTodo={mockToggleTodo} /> </ThemeProvider>);
    const todoItem1 = screen.getByText('Test Todo 1');
    const todoItem2 = screen.getByText('Test Todo 2');

    expect(todoItem1).toBeInTheDocument();
    expect(todoItem2).toBeInTheDocument();
  });

  it('calls toggleTodo when a todo item is clicked', () => {
    render(<ThemeProvider><TodoList todos={todos} toggleTodo={mockToggleTodo} /> </ThemeProvider>);

    const checkbox = screen.getByRole('checkbox', { name: /Test Todo 1/i });
    fireEvent.click(checkbox);

    expect(mockToggleTodo).toHaveBeenCalledWith(1);
  });
});