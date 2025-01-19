import TodoItemType from "../types/TodoItemType";

interface TodoSummaryProps {
  todoList: TodoItemType[];
  onDeleteAllCompletedTodoItems: () => void;
}

export default function TodoSummary({
  todoList,
  onDeleteAllCompletedTodoItems,
}: TodoSummaryProps) {
  const completedTodoList = todoList.filter((todoItem) => todoItem.isCompleted);

  return (
    <div className="flex justify-between text-sm font-medium space-x-8">
      <p>
        {completedTodoList.length}/{todoList.length} Todos completed
      </p>
      {completedTodoList.length > 0 && (
        <button
          onClick={onDeleteAllCompletedTodoItems}
          className="text-red-500 hover:underline text-right"
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}
