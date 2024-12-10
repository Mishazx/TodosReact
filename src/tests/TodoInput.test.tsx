import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, createAction } from '@reduxjs/toolkit';
import TodoInput from '../components/TodoInput/TodoInput';
import { ThemeProvider } from '../context/ThemeContext';

const ADD_TODO = "todos/addTodo";

const mockStore = configureStore({
  reducer: {
    todos: (state = [], action) => state
  }
});

const addTodo = createAction<string, typeof ADD_TODO>(ADD_TODO);

describe('TodoInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderTodoInput = () => {
    return render(
      <Provider store={mockStore}>
        <ThemeProvider>
          <TodoInput addTodo={addTodo} />
        </ThemeProvider>
      </Provider>
    );
  };

  it('renders input field with correct placeholder', () => {
    renderTodoInput();
    const input = screen.getByPlaceholderText('What needs to be done?');
    expect(input).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    renderTodoInput();
    const input = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: 'New todo' } });
    expect(input.value).toBe('New todo');
  });
});
