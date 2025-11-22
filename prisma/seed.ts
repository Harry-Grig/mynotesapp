import { PrismaClient, Prisma } from "@/lib/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import "dotenv/config";

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL || "file:./prisma/dev.db",
});

const db = new PrismaClient({ adapter });

const userData: Prisma.TaskCreateInput[] = [
  {
    title: "Task 1",
    description: "Description for Task 1",
    category: "WORK",
    priority: "HIGH",
    deadline: new Date("2024-07-01T10:00:00Z"),
    userId: "user123",
  },
];

export async function main() {
  console.log("Start seeding...");
  for (const u of userData) {
    const task = await db.task.create({ data: u });
    console.log(`Created task with id: ${task.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
