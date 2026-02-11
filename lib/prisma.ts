import { PrismaClient } from "@prisma/client"
import { PrismaLibSql } from "@prisma/adapter-libsql"

declare global {
  var prisma: PrismaClient | undefined
}

const adapter = new PrismaLibSql({
  url: process.env.TURSO_DATABASE_URL || "file:./dev.db",
  authToken: process.env.TURSO_AUTH_TOKEN,
})

export const prisma =
  global.prisma ??
  new PrismaClient({
    adapter,
    log: ["query", "error", "warn"],
  })

if (process.env.NODE_ENV !== "production") global.prisma = prisma
