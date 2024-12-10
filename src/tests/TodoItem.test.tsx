import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import TodoItem from '../components/TodoItem/TodoItem';
import styles from './TodoItem.module.css';

describe('TodoItem', () => {
  const mockProps = {
    id: 1,
    text: 'Test todo',
    completed: false,
    toggleTodo: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders todo item with correct text', () => {
    render(<TodoItem {...mockProps} />);
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  it('applies completed styles when todo is completed', () => {
    const completedProps = { ...mockProps, completed: true };
    render(<TodoItem {...completedProps} />);
    const todoItem = screen.getByText('Test todo').parentElement;
    expect(todoItem).toHaveClass(styles.todoItem);
    expect(todoItem).toHaveClass(styles.completed);
  });

  it('does not apply completed styles when todo is not completed', () => {
    render(<TodoItem {...mockProps} />);
    const todoItem = screen.getByText('Test todo').parentElement;
    expect(todoItem).toHaveClass(styles.todoItem);
    expect(todoItem).not.toHaveClass(styles.completed);
  });

  it('calls toggleTodo with correct id when checkbox is clicked', () => {
    render(<TodoItem {...mockProps} />);
    const checkbox = screen.getByRole('checkbox', { hidden: true });
    fireEvent.click(checkbox);
    expect(mockProps.toggleTodo).toHaveBeenCalledWith(mockProps.id);
  });

  it('renders checkbox with correct checked state', () => {
    render(<TodoItem {...mockProps} />);
    const checkbox = screen.getByRole('checkbox', { hidden: true });
    expect(checkbox).not.toBeChecked();

    cleanup();
    const completedProps = { ...mockProps, completed: true };
    render(<TodoItem {...completedProps} />);
    const checkedCheckbox = screen.getByRole('checkbox', { hidden: true });
    expect(checkedCheckbox).toBeChecked();
  });
});
