export default function TaskCard() {
  return (
    <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:shadow-lg hover:shadow-black/40 transition-all transform hover:-translate-y-1 cursor-pointer">
      <h3 className="font-semibold text-sm text-neutral-100">
        Sample Task Title
      </h3>
      <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
        This is a sample description for UI preview.
      </p>

      <div className="flex items-center justify-between mt-3 text-xs">
        <div className="flex gap-2 items-center">
          <span className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
            Work
          </span>
          <span className="px-2 py-0.5 rounded-full bg-red-900/40 text-red-300 border border-red-800">
            High
          </span>
        </div>
        <div className="text-neutral-500">2025-02-10</div>
      </div>
    </div>
  );
}
