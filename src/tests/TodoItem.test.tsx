import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem/TodoItem';
import styles from './TodoItem.module.css';
import { ThemeProvider } from '../context/ThemeContext';


describe('TodoItem', () => {
  const mockProps = {
    id: 1,
    text: 'Test todo',
    completed: false,
    toggleTodo: jest.fn(),
  };

  it('renders todo item with correct text', () => {
    render(<ThemeProvider>
      <TodoItem {...mockProps} />
      </ThemeProvider>);
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  it('applies completed styles when todo is completed', () => {
    const completedProps = { ...mockProps, completed: true };
    render(<ThemeProvider>
      <TodoItem {...completedProps} />
      </ThemeProvider>);
    const todoItem = screen.getByText('Test todo').parentElement;
    expect(todoItem).toHaveClass(styles.todoItem);
    expect(todoItem).toHaveClass(styles.completed);
  });

  it('does not apply completed styles when todo is not completed', () => {
    render(<ThemeProvider><TodoItem {...mockProps} /></ThemeProvider>);
    const todoItem = screen.getByText('Test todo').parentElement;
    expect(todoItem).toHaveClass(styles.todoItem);
    expect(todoItem).not.toHaveClass(styles.completed);
  });

  it('calls toggleTodo with correct id when checkbox is clicked', () => {
    render(<ThemeProvider><TodoItem {...mockProps} /></ThemeProvider>);
    const checkbox = screen.getByRole('checkbox', { hidden: true });
    fireEvent.click(checkbox);
    expect(mockProps.toggleTodo).toHaveBeenCalledWith(mockProps.id);
  });

  it('renders checkbox with correct checked state', () => {
    render(<ThemeProvider><TodoItem {...mockProps} /></ThemeProvider>);
    const checkbox = screen.getByRole('checkbox', { hidden: true });
    expect(checkbox).not.toBeChecked();
  });
});
