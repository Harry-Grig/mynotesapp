import { getAllTasks } from "@/data-access/tasks";
import TaskCard from "./taskcard";

interface TaskListProps {
  status: string;
}

export default async function TaskList({ status }: TaskListProps) {
  const tasks = await getAllTasks();
  const filteredTasks = tasks.filter((task) => task.status === status);

  if (filteredTasks.length === 0) {
    return (
      <div className="text-neutral-500 text-sm text-center py-8">
        No tasks yet
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
