import { PrismaClient } from "@prisma/client"
import { PrismaLibSql } from "@prisma/adapter-libsql"

declare global {
  var prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  if (process.env.NODE_ENV === "production") {
    const adapter = new PrismaLibSql({
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN,
    })
    return new PrismaClient({ adapter })
  }

  // Local development
  const adapter = new PrismaLibSql({ url: "file:dev.db" })
  return new PrismaClient({ adapter })
}

// Lazy initialization — the client is only created on first property access
// (at request time), not at module load time during the build.
export const prisma = new Proxy({} as PrismaClient, {
  get(_, prop) {
    if (!global.prisma) {
      global.prisma = createPrismaClient()
    }
    return (global.prisma as any)[prop]
  },
})
