import prisma from '#prisma/client';

export async function getResults() {
    return prisma.result.findMany({
        where: {
            active: true,
        }
    });
}