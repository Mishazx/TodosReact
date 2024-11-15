interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosState {
  items: Todo[];
  filter: 'all' | 'active' | 'completed';
}

export default Todo;