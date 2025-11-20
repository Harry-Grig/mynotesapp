// TaskModal UI (Next.js 16 + Tailwind 4.3 + Shadcn 3.5)
// Pure UI – no functionality

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function TaskModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 rounded-xl">
          New Task
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-[#0f0f0f] border border-neutral-800 text-neutral-200 rounded-2xl shadow-xl shadow-black/40 p-6 w-[420px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-neutral-100">
            Create Task
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-neutral-400">Title</label>
            <Input
              placeholder="Task title..."
              className="bg-neutral-900 border-neutral-800 text-neutral-200 placeholder:text-neutral-600"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-neutral-400">Description</label>
            <Textarea
              placeholder="Description..."
              className="bg-neutral-900 border-neutral-800 text-neutral-200 placeholder:text-neutral-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Category</label>
              <Select>
                <SelectTrigger className="bg-neutral-900 border-neutral-800 text-neutral-200">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-neutral-800 text-neutral-200">
                  <SelectItem value="WORK">Work</SelectItem>
                  <SelectItem value="PERSONAL">Personal</SelectItem>
                  <SelectItem value="STUDY">Study</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Priority</label>
              <Select>
                <SelectTrigger className="bg-neutral-900 border-neutral-800 text-neutral-200">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-neutral-800 text-neutral-200">
                  <SelectItem value="LOW">Low</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="HIGH">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Deadline</label>
              <Input
                type="date"
                className="bg-neutral-900 border-neutral-800 text-neutral-200"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-400">Status</label>
              <Select>
                <SelectTrigger className="bg-neutral-900 border-neutral-800 text-neutral-200">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-neutral-800 text-neutral-200">
                  <SelectItem value="TODO">To Do</SelectItem>
                  <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                  <SelectItem value="DONE">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-6 flex justify-end gap-3">
          <Button className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 rounded-xl">
            Cancel
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl">
            Save Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
