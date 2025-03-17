// src/components/TodoList.tsx
import { List, ListItem } from '@/styles';
/** @jsx React.createElement */

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          {todo.text} {todo.completed ? '(완료)' : '(미완료)'}
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
