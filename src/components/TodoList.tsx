import { NotebookPen, Trash2 } from "lucide-react";
import sampleTodoList from "../data/sampleTodoList";

export default function TodoList() {
  const todoList = sampleTodoList;

  return todoList.length === 0 ? (
    <div className="flex flex-col items-center p-4 space-y-2 text-gray-400 text-sm font-semibold">
      <NotebookPen size="1.2rem" />
      <span>Your Todos will appear here.</span>
    </div>
  ) : (
    <ul className="space-y-4">
      {todoList.map((todo) => {
        return (
          <li key={todo.id} className="flex space-x-4">
            <label className="px-4 py-2 bg-white grow rounded-md space-x-2 border border-gray-300">
              <input type="checkbox" className="scale-125" />
              <span
                className={todo.isCompleted ? "line-through text-gray-400" : ""}
              >
                {todo.title}
              </span>
            </label>
            <button className="px-2 text-gray-400 hover:text-gray-500">
              <Trash2 />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
