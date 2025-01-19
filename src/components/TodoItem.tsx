import { Trash } from "lucide-react";
import TodoItemType from "../types/TodoItemType";

interface TodoItemProps {
  todoItem: TodoItemType;
  onTodoItemCompleted: (id: number, isCompleted: boolean) => void;
  onDeleteTodoItem: (id: number) => void;
}

export default function TodoItem({
  todoItem,
  onTodoItemCompleted,
  onDeleteTodoItem,
}: TodoItemProps) {
  return (
    <li className="flex space-x-4">
      <label className="flex items-center px-4 py-2 bg-white grow rounded-md space-x-2 border border-slate-300  hover:bg-slate-50 cursor-pointer">
        <input
          checked={todoItem.isCompleted}
          onChange={(e) => onTodoItemCompleted(todoItem.id, e.target.checked)}
          type="checkbox"
          className="scale-125 cursor-pointer"
        />
        <span
          className={todoItem.isCompleted ? "line-through text-slate-400" : ""}
        >
          {todoItem.title}
        </span>
      </label>
      <button
        onClick={() => onDeleteTodoItem(todoItem.id)}
        className="px-2 text-slate-400 hover:text-slate-500"
      >
        <Trash />
      </button>
    </li>
  );
}
