import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <form className="flex space-x-4" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
