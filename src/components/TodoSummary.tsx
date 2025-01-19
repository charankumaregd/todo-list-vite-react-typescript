export default function TodoSummary() {
  return (
    <div className="flex justify-between text-sm font-medium">
      <p>0/3 todos completed</p>
      <button className="text-red-500 hover:underline text-right">
        Delete all completed
      </button>
    </div>
  );
}
