import {type Todo} from '../App';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList = ({ todos, onRemove, onToggle }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default TodoList;