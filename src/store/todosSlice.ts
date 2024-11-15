import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosState } from '../types/Todo';

const initialState: TodosState = {
  items: [],
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    clearCompleted: (state) => {
      state.items = state.items.filter(todo => !todo.completed);
    },
    setFilter: (state, action: PayloadAction<'all' | 'active' | 'completed'>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, clearCompleted, setFilter } = todosSlice.actions;
export default todosSlice.reducer;
