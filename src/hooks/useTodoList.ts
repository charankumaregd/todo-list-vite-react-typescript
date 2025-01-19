import { useEffect, useState } from "react";
import TodoItemType from "../types/TodoItemType";

export default function useTodoList() {
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

  return {
    todoList,
    addTodoItem,
    setTodoItemCompleted,
    deleteTodoItem,
    deleteAllCompletedTodoItems,
  };
}
