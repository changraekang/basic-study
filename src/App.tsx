import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import TodoPage from '@/pages/TodoPage'
import MemoPage from '@/pages/MemoPage'
import CreatePage from '@/pages/memo/CreatePage'
import DetailPage from '@/pages/memo/DetailPage'
import EditPage from '@/pages/memo/EditPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todoList" element={<TodoPage />} />
      <Route path="/memo" element={<MemoPage />} />
      <Route path="/memo/create" element={<CreatePage />} />
      <Route path="/memo/:id" element={<DetailPage />} />
      <Route path="/memo/:id/edit" element={<EditPage />} />
    </Routes>
  )
}

export default App
