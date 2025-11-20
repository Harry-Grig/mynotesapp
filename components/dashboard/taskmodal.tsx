import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TaskModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#111] text-white border border-[#222] shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Create New Task
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <Input
            placeholder="Task title"
            className="bg-[#0a0a0a] border-[#222] text-white placeholder:text-gray-500"
          />

          <Textarea
            placeholder="Description..."
            className="bg-[#0a0a0a] border-[#222] text-white placeholder:text-gray-500"
          />

          <div className="flex gap-4">
            <Input
              placeholder="Category"
              className="bg-[#0a0a0a] border-[#222]"
            />
            <Input
              placeholder="Priority"
              className="bg-[#0a0a0a] border-[#222]"
            />
          </div>

          <Input type="date" className="bg-[#0a0a0a] border-[#222]" />
        </div>

        <DialogFooter>
          <Button
            onClick={onClose}
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            Cancel
          </Button>

          <Button className="bg-white/10 hover:bg-white/20 text-white">
            Save Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
