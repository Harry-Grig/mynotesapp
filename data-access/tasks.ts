import db from "@/utils/prisma";

export const getAllTasks = async () => {
  const tasks = await db.task.findMany();
  return tasks;
};
