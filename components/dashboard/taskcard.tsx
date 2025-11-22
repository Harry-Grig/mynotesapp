import { Task } from "@/lib/generated/prisma/client";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:shadow-lg hover:shadow-black/40 transition-all transform hover:-translate-y-1 cursor-pointer">
      <h3 className="font-semibold text-sm text-neutral-100">{task.title}</h3>
      <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
        {task.description}
      </p>

      <div className="flex items-center justify-between mt-3 text-xs">
        <div className="flex gap-2 items-center">
          <span className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
            {task.category}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-red-900/40 text-red-300 border border-red-800">
            {task.priority}
          </span>
        </div>
        <div className="text-neutral-500">
          {new Date(task.deadline).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
