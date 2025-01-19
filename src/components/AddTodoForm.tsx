export default function AddTodoForm() {
  return (
    <form className="flex space-x-4">
      <input
        type="text"
        placeholder="Add your todos"
        className="border border-gray-300 px-4 py-2 rounded-md w-full"
      />
      <button
        type="submit"
        className="bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-700"
      >
        Add
      </button>
    </form>
  );
}
