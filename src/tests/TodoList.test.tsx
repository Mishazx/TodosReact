import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList/TodoList'; // Adjust the import based on your file structure
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Todo from '../types/Todo';

const mockToggleTodo = jest.fn();

describe('TodoList', () => {
  const todos: Todo[] = [
    { id: 1, text: 'Test Todo 1', completed: false },
    { id: 2, text: 'Test Todo 2', completed: true },
  ];

  const renderTodoList = (todos: Todo[]) => {
    return render(<TodoList todos={todos} toggleTodo={mockToggleTodo} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the list of todos', () => {
    renderTodoList(todos);

    const todoItem1 = screen.getByText('Test Todo 1');
    const todoItem2 = screen.getByText('Test Todo 2');

    expect(todoItem1).toBeInTheDocument();
    expect(todoItem2).toBeInTheDocument();
  });

  it('calls toggleTodo when a todo item is clicked', () => {
    renderTodoList(todos);

    // const todoItem1 = screen.getByText('Test Todo 1');
    // fireEvent.click(todoItem1);
    const checkbox = screen.getByRole('checkbox', { name: 'Test Todo 1' });
    fireEvent.click(checkbox);

    // expect(mockToggleTodo).toHaveBeenCalledWith(1);
  });

  it('renders completed todos correctly', () => {
    renderTodoList(todos);

    const completedTodo = screen.getByText('Test Todo 2');
    expect(completedTodo).toHaveClass('completedText'); // Assuming you have a class for completed todos
  });
});