"use server";
import db from "@/utils/prisma";
import { z } from "zod";
import { createTaskSchema } from "@/lib/validation";
import { auth } from "@clerk/nextjs/server";

export async function createTask(formData: z.input<typeof createTaskSchema>) {
  // Validate and coerce incoming data (ensures `deadline` becomes a `Date`)
  const parsed = createTaskSchema.parse(formData);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized: user is not authenticated");
  }

  const newTask = await db.task.create({
    data: {
      title: parsed.title,
      description: parsed.description,
      category: parsed.category,
      priority: parsed.priority,
      deadline: parsed.deadline,
      status: parsed.status,
      userId,
    },
  });
  return newTask;
}
