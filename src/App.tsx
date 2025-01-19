import AddTodoForm from "./components/AddTodoForm";
import TodoSummary from "./components/TodoSummary";
import TodoList from "./components/TodoList";
import useTodoList from "./hooks/useTodoList";

function App() {
  const {
    todoList,
    addTodoItem,
    setTodoItemCompleted,
    deleteTodoItem,
    deleteAllCompletedTodoItems,
  } = useTodoList();

  return (
    <div className="flex flex-col items-center p-8 space-y-8 h-screen overflow-auto">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <div className="w-full max-w-lg bg-slate-100 border border-slate-300 rounded-md p-4 space-y-4">
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
