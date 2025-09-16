// API-эндпоинт, который принимает данные от клиента (заявки с сайта), парсит и записывает в базу Neon

import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import fs from "fs/promises";
import path from "path";
import { sendRequestToTelegram } from "@/libs/sendRequestToTelegram";

// Функция-обработчки POST-запроса из ApplicationForm:
export async function POST(req: NextRequest) {
    try {
        // Получаем все поля формы и файл через стандартный парсер
        const formData = await req.formData();

        const question = formData.get("question");
        const contactType = formData.get("contactType");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const file = formData.get("file"); // ВАЖНО: это объект File, если был загружен

        // Приведение типов и проверка на null (можно добавить проверки, если нужно)
        const questionStr = typeof question === "string" ? question : "";
        const contactTypeStr = typeof contactType === "string" ? contactType : "";
        const phoneStr = typeof phone === "string" ? phone : "";
        const emailStr = typeof email === "string" ? email : "";

        let fileNameValue = "";
        let fileBufferValue: Buffer | null = null; // Специальный формат для файлов, который разбирает их на байты и в таком ивде их может обработать сервер
        let fileUrlValue = "";

        if (file instanceof File) {
            fileNameValue = file.name;
            const arrayBuffer = await file.arrayBuffer();
            fileBufferValue = Buffer.from(arrayBuffer);

            // Пример: сохраняем файл в /public/uploads
            const uploadDir = path.join(process.cwd(), "public/uploads");
            await fs.mkdir(uploadDir, { recursive: true });
            const savePath = path.join(uploadDir, fileNameValue);
            await fs.writeFile(savePath, fileBufferValue);

            // fileUrl — для доступа из браузера
            fileUrlValue = `/uploads/${fileNameValue}`;
        }

        // Сохраняем заявку в базу Neon через Prisma
        const app = await prisma.application.create({
            data: {
                question: questionStr,
                contactType: contactTypeStr,
                phone: phoneStr,
                email: emailStr,
                fileName: fileNameValue || null,
                fileUrl: fileUrlValue || null,
            },
        });

// Отправляем заявку в Telegram, обязательно передаём fileUrl
        await sendRequestToTelegram({
            reqType: "application",
            phone: phoneStr,
            contactType: contactTypeStr,
            email: emailStr,
            question: questionStr,
            fileName: fileNameValue,
            // fileBuffer, если нужно
        });

        return new Response(JSON.stringify({ success: true, app }), { status: 200 });
    } catch (err: unknown) {
        console.error("Ошибка POST /api/application", err);
        return new Response(
            JSON.stringify({ error: err instanceof Error ? err.message : String(err) }),
            { status: 500 }
        );
    }
}