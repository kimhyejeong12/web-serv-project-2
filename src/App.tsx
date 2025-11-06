import { useState, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const nextId = useRef(1);

  const handleAdd = (text: string) => {
    setTodos((prev) => [ ...prev, { id: nextId.current++, text, done: false } ]);
  };

  const handleRemove = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prev) => prev.map((todo) => (
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )));
  };

  return (
    <TodoTemplate>
      <h1 className= "font-bold text-2xl">Todo List</h1>
      <TodoInsert onAdd={handleAdd} />
      <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
    </TodoTemplate>
  );
};

export default App;
