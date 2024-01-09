// Best practice for instantiating PrismaClient with Next.js
import { PrismaClient } from "@prisma/client"

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// The code ensures that only a single instance of PrismaClient is created and reused across the entire Next.js application. This pattern is particularly important in a serverless environment or during development to avoid unnecessary database connections and potential performance issues.
