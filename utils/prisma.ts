import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@/lib/prisma-adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const db = new PrismaClient({
  adapter,
});
