// Компонент, осдержаний 1-й экран со всем содержимым БЕЗ фото

import styles from "@/components/MainContent.module.css";
import Image from "next/image";

function MainContent() {
    return (
        <div className={`${styles["main-content"]}`}>

            <div>
                <div className={styles["main__title"]}>
                    <h1>Юридические услуги</h1>
                    <h2>в области:</h2>
                </div>

                <ul className={styles["main__info"]}>
                    <li>защиты прав дольщиков в спорах с застройщиками</li>
                    <li>процедуре банкротства застройщиков</li>
                    <li>спорах с Фондом развития территории</li>
                </ul>
            </div>


            <div>
                <div className={styles["main__contacts"]}>
                    <div className={styles["main__phones"]}>
                        <a href="tel:+79218696715">+7 (921) 869 67 15</a>
                        <a href="tel:88007077994">8 (800) 707 79 94</a>
                    </div>
                    <div className={styles["main__contact-icons"]}>
                        <a
                            href="https://wa.me/79218696715"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            < Image width={60} height={60} src="/images/whatsup.png" alt="Whatsup" />
                        </a>
                        <a
                            href="https://t.me/@dariya_grigorevaS"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                        >
                            < Image width={60} height={60} src="/images/telegram.png" alt="Telegram" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default MainContent;