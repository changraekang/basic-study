import { Container, Title } from '@/styles'
import TodoList from '@/component/TodoList'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, text: '할일 1', completed: false },
  { id: 2, text: '할일 2', completed: true },
  { id: 3, text: '할일 3', completed: false },
];

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Container>
        <Title>Hello World</Title>
        <TodoList todos={todos} />
      </Container>
    </div>
  )
}

export default App
