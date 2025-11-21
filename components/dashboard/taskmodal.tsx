"use client";

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

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createTaskSchema } from "@/lib/validation";
import { z } from "zod";
import { createTask } from "@/actions/tasks/create";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TaskModal({ open, onClose }: Props) {
  // -----------------------------
  // React Hook Form setup
  // -----------------------------
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.input<typeof createTaskSchema>>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "WORK",
      priority: "LOW",
      deadline: undefined,
      status: "TODO",
    },
  });

  // -----------------------------
  // On Submit
  // -----------------------------
  const onSubmit = async (data: z.input<typeof createTaskSchema>) => {
    console.log("TASK DATA ⇒", data);

    await createTask(data);

    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#111] text-white border border-[#222] shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Create New Task
          </DialogTitle>
        </DialogHeader>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-4"
        >
          {/* TITLE */}
          <div>
            <Input
              {...register("title")}
              placeholder="Task title"
              className="bg-[#0a0a0a] border-[#222] text-white placeholder:text-gray-500"
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div>
            <Textarea
              {...register("description")}
              placeholder="Description..."
              className="bg-[#0a0a0a] border-[#222] text-white placeholder:text-gray-500"
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* CATEGORY + PRIORITY */}
          <div className="flex gap-4">
            {/* CATEGORY SELECT */}
            <div className="flex-1">
              <Select
                onValueChange={(value) => setValue("category", value as any)}
                defaultValue="WORK"
              >
                <SelectTrigger className="bg-[#0a0a0a] border-[#222] text-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent className="bg-[#111] border-[#222] text-white">
                  <SelectItem value="WORK">Work</SelectItem>
                  <SelectItem value="PERSONAL">Personal</SelectItem>
                  <SelectItem value="STUDY">Study</SelectItem>
                </SelectContent>
              </Select>

              {errors.category && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* PRIORITY SELECT */}
            <div className="flex-1">
              <Select
                onValueChange={(value) => setValue("priority", value as any)}
                defaultValue="LOW"
              >
                <SelectTrigger className="bg-[#0a0a0a] border-[#222] text-white">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>

                <SelectContent className="bg-[#111] border-[#222] text-white">
                  <SelectItem value="LOW">Low</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="HIGH">High</SelectItem>
                </SelectContent>
              </Select>

              {errors.priority && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.priority.message}
                </p>
              )}
            </div>
          </div>

          {/* DEADLINE */}
          <div>
            <Input
              type="date"
              {...register("deadline")}
              className="bg-[#0a0a0a] border-[#222] text-white"
            />

            {errors.deadline && (
              <p className="text-red-400 text-sm mt-1">
                {errors.deadline.message}
              </p>
            )}
          </div>

          {/* FOOTER */}
          <DialogFooter>
            <Button
              type="button"
              onClick={onClose}
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-white/10 hover:bg-white/20 text-white"
            >
              Save Task
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
