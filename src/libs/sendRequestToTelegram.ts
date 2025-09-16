import path from "path";
import fs from "fs";
import FormData from "form-data";
import fetch from "node-fetch";

type TSendApplicationToTelegramProps = {
    reqType: "application",
    phone: string;
    contactType: string;
    email: string;
    question: string;
    fileName: string
};
type TSendFeedbackToTelegramProps = {
    reqType: "feedback",
    author: string;
    content: string;
    city: string;
    active: boolean;
}
type TSendReqToTelegram = TSendApplicationToTelegramProps | TSendFeedbackToTelegramProps;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// Преобразуем CHAT_IDS в массив, например: "839973244,123456789"
const CHAT_IDS = process.env.CHAT_IDS ? process.env.CHAT_IDS.split(',').map(id => id.trim()) : [];

export async function sendRequestToTelegram(props: TSendReqToTelegram) {
    switch (props.reqType) {

        case "application":
            const { contactType, phone, email, question, fileName } = props as TSendApplicationToTelegramProps;
            const textApplication =
                `Новая заявка с сайта grigoreva:\n` +
                `Способ связи: ${contactType}\n` +
                (phone ? `Телефон: ${phone}\n` : "") +
                (email ? `Email: ${email}\n` : "") +
                `Запрос: ${question}\n`;
            if (fileName) {
                // Собираем путь к файлу
                const filePath = path.join(process.cwd(), "public", "uploads", fileName);

                // Проверяем, существует ли файл по этому пути
                if (!fs.existsSync(filePath)) {
                    throw new Error(`File does not exist: ${filePath}`);
                }

                // Отправляем файл только если он существует
                for (const chat_id of CHAT_IDS) {
                    try {
                        const formData = new FormData();
                        formData.append('chat_id', chat_id);
                        formData.append('caption', textApplication);
                        formData.append('document', fs.createReadStream(filePath), fileName);

                        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`, {
                            method: "POST",
                            body: formData,
                        });
                        const result = await response.json() as { ok: boolean; [key: string]: unknown };
                        if (!result.ok) {
                            console.error("Telegram error:", result);
                            console.log('Telegram API response:', result);
                        }
                    } catch (err) {
                        console.error(`Error sending to chat ${chat_id}:`, err);
                    }
                }
            } else {
                // Если файла нет, отправляем только текст!
                for (const chat_id of CHAT_IDS) {
                    try {
                        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                chat_id,
                                text: textApplication
                            }),
                        });
                        const result = await response.json() as { ok: boolean; [key: string]: unknown };
                        if (!result.ok) {
                            console.error("Telegram error:", result);
                        }
                    } catch (err) {
                        console.error(`Error sending to chat ${chat_id}:`, err);
                    }
                }
            };
            break;

        case "feedback":
            const { author, content, city } = props as TSendFeedbackToTelegramProps;
            const textFeedback =
                `Новый отзыв с сайта grigoreva:\n` +
                `Автор: ${author}\n` +
                `Город: ${city}\n` +
                `Текст отзыва: ${content}\n`;
            // Отправляем отзыв в telegram
            for (const chat_id of CHAT_IDS) {
                try {
                    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            chat_id,
                            text: textFeedback
                        }),
                    });
                    const result = await response.json() as { ok: boolean; [key: string]: unknown };
                    if (!result.ok) {
                        console.error("Telegram error:", result);
                    }
                } catch (err) {
                    console.error(`Error sending to chat ${chat_id}:`, err);
                }
            };
            break;
        default:
            console.error(`С сервера пришел неизвестный reqType`);
            break;
    }
}