import { NextRequest } from "next/server";
import { sendRequestToTelegram } from "@/libs/sendRequestToTelegram";

// Обработчик POST - нужен для корректной обработки запроса:
export async function POST(request: NextRequest) {
    try {
        const props = await request.json();
        // Вызов логики обработки запроса отправки:
        await sendRequestToTelegram(props);
        return new Response(JSON.stringify({ ok: true }));
    } catch (e) {
        console.error(e);
        return new Response(
            JSON.stringify({ ok: false, error: (e as Error)?.message || String(e) }),
            { status: 500 }
        );
    }
}