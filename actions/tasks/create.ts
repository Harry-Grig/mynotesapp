"use server";
import { db } from "@/utils/prisma";
import { z } from "zod";
import { createTaskSchema } from "@/lib/validation";
import { getAuth } from "@clerk/nextjs/server";
import { headers } from "next/headers";

export async function createTask(formData: z.input<typeof createTaskSchema>) {
  // Validate and coerce incoming data (ensures `deadline` becomes a `Date`)
  const parsed = createTaskSchema.parse(formData);
  const hdrs = await headers();
  const headersObj: Record<string, string> = {};
  for (const [key, value] of hdrs.entries()) {
    headersObj[key] = value;
  }

  const { userId } = getAuth({ headers: headersObj } as unknown as any);

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
