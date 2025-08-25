import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

    // Создаём результаты работы (кейсы) ----------------------------------------------------------------------------------
    const result1 = await prisma.result.upsert({
        where: { case: "№ А56-117381/2018(1)" }, // <-- уникальное поле
        update: {
            sumFirst: 1846170,
            sumNew: 3400000,
            sumResult: 3400000,
            comment: "Постановление Арбитражного суда Северо-Западного округа от 16.09.2024",
            active: true
        },
        create: {
            case: "№ А56-117381/2018(1)",
            sumFirst: 3016500,
            sumNew: 6040000,
            sumResult: 6040000,
            comment: "Постановление Тринадцатого арбитражного апелляционного суда от 27.09.2024",
            active: true
        },
    });
    const result2 = await prisma.result.upsert({
        where: { case: "№ А56-117381/2018(2)" }, // <-- уникальное поле
        update: {
            sumFirst: 3016500,
            sumNew: 6040000,
            sumResult: 6040000,
            comment: "Постановление Арбитражного суда Северо-Западного округа от 16.09.2024",
            active: true
        },
        create: {
            case: "№ А56-117381/2018(2)",
            sumFirst: 1846170,
            sumNew: 3400000,
            sumResult: 3400000,
            comment: "Постановление Тринадцатого арбитражного апелляционного суда от 27.09.2024",
            active: true
        },
    });

    // Создаем отзывы клиентов ---------------------------------------------------------------------------------------------
    const feedback1 = await prisma.feedback.upsert({
        where: { key: 1 },
        update: {
            author: "Наталья М.",
            city: "Санкт-Петербург",
            date: new Date("2024-11-25"),
            content: "Получили от фонда развития территорий сумму достаточную для покупкижилья, в два раза больше предложенной фондом!!! Счастью нашему нет предела!!!",
            active: true
        },
        create: {
            key: 1,
            author: "Наталья М.",
            city: "Санкт-Петербург",
            date: new Date("2024-11-25"),
            content: "Получили от фонда развития территорий сумму достаточную для покупкижилья, в два раза больше предложенной фондом!!! Счастью нашему нет предела!!!",
            active: true
        },
    });
    const feedback2 = await prisma.feedback.upsert({
        where: { key: 2 },
        update: {
            author: "Роман З.",
            city: "Краснодар",
            date: new Date("2025-05-23"),
            content: "Получили внушительную сумму неустойки за просрочку передачи квартиры. Очень довольны результатом. Спасибо!",
            active: true
        },
        create: {
            key: 2,
            author: "Роман З.",
            city: "Краснодар",
            date: new Date("2025-05-23"),
            content: "Получили внушительную сумму неустойки за просрочку передачи квартиры. Очень довольны результатом. Спасибо!",
            active: true
        },
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());