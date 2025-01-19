import AddTodoForm from "./components/AddTodoForm";
import TodoSummary from "./components/TodoSummary";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center p-8 space-y-8 h-screen overflow-auto">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <div className="w-full max-w-lg bg-slate-100 border border-gray-300 rounded-md p-4 space-y-4">
        <AddTodoForm />
        <TodoSummary />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
