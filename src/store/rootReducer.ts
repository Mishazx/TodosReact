
import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
