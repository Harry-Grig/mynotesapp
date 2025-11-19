import { z } from "zod";

export const CategoryEnum = z.enum(["WORK", "PERSONAL", "STUDY"]);
export const PriorityEnum = z.enum(["LOW", "MEDIUM", "HIGH"]);
export const StatusEnum = z.enum(["TODO", "IN_PROGRESS", "DONE"]);

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  category: CategoryEnum,
  priority: PriorityEnum,
  deadline: z.coerce.date(),
  status: StatusEnum.default("TODO"),
});

export const updateTaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string().optional(),
  category: CategoryEnum,
  priority: PriorityEnum,
  deadline: z.coerce.date(),
  status: StatusEnum,
});
