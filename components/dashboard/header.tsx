import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <h1 className="text-2xl font-semibold text-neutral-100">My Notes App</h1>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="relative w-full sm:w-64">
          <Input
            placeholder="Search tasks..."
            className="pl-10 bg-neutral-900 border-neutral-800 text-neutral-200 placeholder:text-neutral-600 focus-visible:ring-neutral-700"
          />
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-600" />
        </div>

        <Button className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700">
          <Plus className="h-4 w-4" /> New Task
        </Button>
      </div>
    </header>
  );
}
