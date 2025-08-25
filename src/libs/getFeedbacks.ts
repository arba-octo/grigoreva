import prisma from '#prisma/client';

export async function getFeedbacks() {
    return prisma.feedback.findMany({
        where: {
            active: true,
        }
    });
}