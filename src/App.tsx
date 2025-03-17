import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import TodoPage from '@/pages/TodoPage'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todoList" element={<TodoPage />} />
    </Routes>
  )
}

export default App
