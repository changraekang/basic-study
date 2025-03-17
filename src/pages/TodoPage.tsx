import { Container, Title } from '@/styles'
import TodoList from '@/component/TodoList'
import NewTodo from '@/component/NewTodo'
import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };


  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Container>
        <Title>Hello Vite TodoList</Title>
        <TodoList todos={todos} />
        <NewTodo onAddTodo={addTodo} />
      </Container>
    </div>
  )
}

export default TodoPage
