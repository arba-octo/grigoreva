import { PrismaClient } from '@prisma/client';

// Глобальный объект для предотвращения пересоздания клиента в dev (hot reload)
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;