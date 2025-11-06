import type { Todo } from "../App";

type TodoItemProps = {
  todo: Todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoItem = ({ todo, onRemove, onToggle }: TodoItemProps) => {
  return (
    <li className="flex items-center p-3 border-t border-gray-200 first:border-t-0 ">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 mr-4 cursor-pointer accent-cyan-500"
      />
      <span
        className={`flex-1 text-base cursor-pointer ${
          todo.done ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onRemove(todo.id)}
        className="p-1 text-red-500 text-xl font-bold bg-transparent border-none cursor-pointer hover:text-red-700 transition-colors"
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;