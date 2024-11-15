import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../App';
import { clearCompleted } from '../store/todosSlice';
import rootReducer from '../store/rootReducer';
import { TodosState } from '../types/Todo';

let store: any;

describe('App Component', () => {

  beforeEach(() => {
    const initialState: TodosState = {
      items: [],
      filter: 'all',
    };
    store = createStore(rootReducer, { todos: initialState });
    store.dispatch = jest.fn();
  });

  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/What needs to be done?/i)).toBeInTheDocument();
  });

  test('clears completed todos', () => {
    const initialState: TodosState = {
      items: [
        { id: 1, text: 'Completed Todo', completed: true },
        { id: 2, text: 'Active Todo', completed: false },
      ],
      filter: 'all',
    };
  
    const mockDispatch = jest.fn();
    
    store = createStore(rootReducer, { todos: initialState });
    store.dispatch = mockDispatch;
  
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    const clearButton = screen.getByText(/Clear Completed/i);
  
    fireEvent.click(clearButton);
  
    expect(mockDispatch).toHaveBeenCalledWith(clearCompleted());
  });
});

