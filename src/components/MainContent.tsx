// Компонент, осдержаний 1-й экран со всем содержимым БЕЗ фото

import styles from "@/components/MainContent.module.css";
import Image from "next/image";

function MainContent() {
    return (
        <div className={`${styles["main-content"]} section`}>

            <div className={styles["main__title"]}>
                <h1>Юридические услуги</h1>
                <h2>в области:</h2>
            </div>

            <ul className={styles["main__info"]}>
                <li>защиты прав дольщиков в спорах с застройщиками</li>
                <li>процедуре банкротства застройщиков</li>
                <li>спорах с Фондом развития территории</li>
            </ul>

            <div className={styles["main__contacts"]}>
                <div className={styles["main__phones"]}>
                    <div>+7 (921) 869 67 15</div>
                    <div>8 (800) 707 79 94</div>
                </div>
                <div className={styles["main__contact-icons"]}>
                    < Image width={60} height={60} src="/images/whatsup.png" alt="Whatsup" />
                    < Image width={60} height={60} src="/images/telegram.png" alt="Telegram" />
                </div>
            </div>
        </div>
    )
};
export default MainContent;