import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus } from "lucide-react";

interface Props {
  onNewTask: () => void;
}

export default function Header({ onNewTask }: Props) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <h1 className="text-2xl font-semibold">My Notes App</h1>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="relative w-full sm:w-64">
          <Input
            placeholder="Search tasks..."
            className="pl-10 bg-[#111] border-[#222] text-white placeholder:text-gray-500"
          />
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>

        <Button
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white"
          onClick={onNewTask}
        >
          <Plus className="h-4 w-4" /> New Task
        </Button>
      </div>
    </header>
  );
}
