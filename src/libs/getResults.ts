import prisma from '#prisma/client';

export async function getResults() {
    return prisma.results.findMany({
        select: {
            active: true,
        }
    });
}