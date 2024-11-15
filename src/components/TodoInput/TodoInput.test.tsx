import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import TodoInput from './TodoInput';
import { addTodo } from '../../store/todosSlice';
import { Store, UnknownAction } from '@reduxjs/toolkit';

const mockStore = configureStore([]);
let store: MockStoreEnhanced<unknown, {}> | Store<unknown, UnknownAction, unknown>;

describe('TodoInput Component', () => {
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  test('renders input field', () => {
    render(
      <Provider store={store}>
        <TodoInput addTodo={addTodo} />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('What needs to be done?');
    expect(inputElement).toBeInTheDocument();
  });

  test('updates input field value on change', () => {
    render(
      <Provider store={store}>
        <TodoInput addTodo={addTodo} />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(inputElement, { target: { value: 'New Task' } });

    expect(inputElement).toHaveValue('New Task');
  });

  test('does not dispatch addTodo action if input is empty', () => {
    render(
      <Provider store={store}>
        <TodoInput addTodo={addTodo} />
      </Provider>
    );

    const formElement = screen.getByPlaceholderText('What needs to be done?');

    fireEvent.submit(formElement);

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
