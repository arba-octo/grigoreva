// Компонент, осдержаний 1-й экран со всем содержимым БЕЗ фото

import React from "react";
import styles from "@/components/Main.module.css";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";

type TMainContentProps = {
    onApplicationClick: () => void;
}

const Main = React.forwardRef<HTMLDivElement, TMainContentProps>((props: TMainContentProps, ref) => {
    return (
        <div ref={ref}>
            <div className={styles["main__main-page"]}>
                <div className={`${styles["main-content"]}`}>

                    <div>
                        <div className={styles["main__title"]}>
                            <h1>Юридические услуги</h1>
                            <h1>в области:</h1>
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
                                <Tooltip title="Написать в WhatsUp">
                                    <a
                                        href="https://wa.me/79218696715"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="WhatsApp"
                                        className={styles["contact-icons__icon"]}
                                    >
                                        < Image fill src="/images/whatsup.png" alt="Whatsup"
                                                style={{objectFit: "contain"}}/>
                                    </a>
                                </Tooltip>
                                <Tooltip title="Написать в Telegram">
                                    <a
                                        href="https://t.me/@dariya_grigorevaS"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Telegram"
                                        className={styles["contact-icons__icon"]}
                                    >
                                        < Image fill src="/images/telegram.png" alt="Telegram"
                                                style={{objectFit: "contain"}}/>
                                    </a>
                                </Tooltip>
                                <Tooltip title="Отправить заявку на косультацию">
                                    <a
                                        onClick={props.onApplicationClick}
                                        className={styles["contact-icons__icon"]}
                                    >
                                        <Image fill src="/images/consulting.png" alt="Отправить заявку"
                                               style={{objectFit: "contain"}}/>
                                    </a>
                                </Tooltip>

                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles["main__photo-container"]}></div>

            </div>
        </div>
    );
});

Main.displayName = "Main";
export default Main;