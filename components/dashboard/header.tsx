import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <h1 className="text-2xl font-semibold">My Notes App</h1>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="relative w-full sm:w-64">
          <Input placeholder="Search tasks..." className="pl-10" />
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> New Task
        </Button>
      </div>
    </header>
  );
}
