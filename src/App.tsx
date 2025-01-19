import AddTodoForm from "./components/AddTodoForm";
import TodoSummary from "./components/TodoSummary";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import TodoItemType from "./types/TodoItemType";

function App() {
  const [todoList, setTodoList] = useState<TodoItemType[]>(
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function addTodoItem(title: string) {
    setTodoList((prevTodoList) => [
      {
        id: Date.now(),
        title,
        isCompleted: false,
      },
      ...prevTodoList,
    ]);
  }

  function setTodoItemCompleted(id: number, isCompleted: boolean) {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todoItem) =>
        todoItem.id == id ? { ...todoItem, isCompleted } : todoItem
      )
    );
  }

  function deleteTodoItem(id: number) {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todoItem) => todoItem.id !== id)
    );
  }

  function deleteAllCompletedTodoItems() {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todoItem) => !todoItem.isCompleted)
    );
  }

  return (
    <div className="flex flex-col items-center p-8 space-y-8 h-screen overflow-auto">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <div className="w-full max-w-lg bg-slate-100 border border-gray-300 rounded-md p-4 space-y-4">
        <AddTodoForm onSubmit={addTodoItem} />
        <TodoSummary
          todoList={todoList}
          onDeleteAllCompletedTodoItems={deleteAllCompletedTodoItems}
        />
        <TodoList
          todoList={todoList}
          onTodoItemCompleted={setTodoItemCompleted}
          onDeleteTodoItem={deleteTodoItem}
        />
      </div>
    </div>
  );
}

export default App;
