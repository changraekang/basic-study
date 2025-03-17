// src/components/NewTodo.tsx
import { useState } from 'react';
import { Form, Input, Button } from '@/styles';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

function NewTodo({ onAddTodo }: NewTodoProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAddTodo(value.trim());
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit">추가</Button>
    </Form>
  );
}

export default NewTodo;
