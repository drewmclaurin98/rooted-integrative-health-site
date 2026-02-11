import { PrismaClient } from "@prisma/client"
import { PrismaLibSql } from "@prisma/adapter-libsql"

declare global {
  var prisma: PrismaClient | undefined
}

const isProd = process.env.NODE_ENV === "production"

let client: PrismaClient

if (isProd) {
  if (!process.env.TURSO_DATABASE_URL) {
    throw new Error("TURSO_DATABASE_URL is not defined")
  }

  const adapter = new PrismaLibSql({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  })

  client = new PrismaClient({ adapter })
} else {
  const adapter = new PrismaLibSql({
    url: "file:dev.db",
  })

  client = new PrismaClient({ adapter })
}

export const prisma = global.prisma ?? client

if (!isProd) global.prisma = prisma
