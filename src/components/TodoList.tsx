import { NotebookPen } from "lucide-react";
import TodoItemType from "../types/TodoItemType";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoList: TodoItemType[];
  onTodoItemCompleted: (id: number, isCompleted: boolean) => void;
  onDeleteTodoItem: (id: number) => void;
}

export default function TodoList({
  todoList,
  onTodoItemCompleted,
  onDeleteTodoItem,
}: TodoListProps) {
  const sortedTodoList = todoList.sort((a, b) => {
    if (a.isCompleted === b.isCompleted) {
      return a.id - b.id;
    }
    return a.isCompleted ? 1 : -1;
  });

  return todoList.length === 0 ? (
    <div className="flex flex-col items-center p-8 space-y-2 text-slate-400">
      <NotebookPen />
      <span>Your Todos will appear here.</span>
    </div>
  ) : (
    <ul className="space-y-4">
      {sortedTodoList.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onTodoItemCompleted={onTodoItemCompleted}
            onDeleteTodoItem={onDeleteTodoItem}
          />
        );
      })}
    </ul>
  );
}
