export default function TaskCard() {
  return (
    <div className="p-4 rounded-lg border bg-white hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer">
      <h3 className="font-semibold text-sm">Sample Task Title</h3>
      <p className="text-xs text-gray-500 mt-1 line-clamp-1">
        This is a sample description for UI preview.
      </p>

      <div className="flex items-center justify-between mt-3 text-xs">
        <div className="flex gap-2 items-center">
          <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600">
            Work
          </span>
          <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700">
            High
          </span>
        </div>
        <div className="text-gray-400">2025-02-10</div>
      </div>
    </div>
  );
}
