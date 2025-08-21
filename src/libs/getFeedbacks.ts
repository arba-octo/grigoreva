import prisma from '#prisma/client';

export async function getFeedbacks() {
    return prisma.feedback.findMany({
        select: {
            active: true,
        }
    });
}