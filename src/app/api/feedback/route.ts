// API-эндпоинт, который принимает данные от клиента (заявки с сайта), парсит и записывает в базу Neon

import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import {sendRequestToTelegram} from "@/app/api/sendRequestToTelegram/route";

// Функция-обработчки POST-запроса из ApplicationForm:
export async function POST(req: NextRequest) {
    try {
        // Получаем все поля формы- извлекаем данные из formData
        const formData = await req.formData();

        // Извлекаем значения из formData
        const keyStr = formData.get("key")?.toString() || "";
        const authorStr = formData.get("author")?.toString() || "";
        const contentStr = formData.get("content")?.toString() || "";
        const cityStr = formData.get("city")?.toString() || "";
        const dateStr = formData.get("date")?.toString() || new Date().toISOString();
        const activeBool = false;

        // Сохраняем заявку в базу Neon через Prisma
        const app = await prisma.feedback.create({
            data: {
                key: Number(keyStr),
                author: authorStr,
                content: contentStr,
                city: cityStr,
                date: dateStr,
                active: activeBool,
            },
        });

// Отправляем заявку в Telegram, обязательно передаём fileUrl
        await sendRequestToTelegram({
            reqType: "feedback",
            author: authorStr,
            content: contentStr,
            city: cityStr,
            active: false,
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