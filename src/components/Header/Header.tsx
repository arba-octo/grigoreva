import {useState, RefObject, useEffect} from "react";
import Image from "next/image";
import styles from "@/components/Header/Header.module.css";
import {ApplicationModal} from "@/components/ApplicationModal";
import {MenuDrawer} from "@/components/MenuDrawer";

type THeaderMainProps = {mainPageRef: RefObject<HTMLDivElement | null>;};

function Header({ mainPageRef }: THeaderMainProps) {
    // Отображение иконок контактов в header
    const [showContactsInHeader, setShowContactsInHeader] = useState(false);
    useEffect(() => {
        if (!mainPageRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => setShowContactsInHeader(!entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(mainPageRef.current);
        return () => observer.disconnect();
    }, [mainPageRef]);

    return (
        <div className={styles["header__bg"]}>
            <div className={styles["header-main"]}>
                <h1 className={styles["header__logo"]}>GRIGOREVA</h1>

                <div className={styles["header__right"]}>

                        <div className={ `${styles["header__contacts"]} ${styles["header__contacts_no"]} ${showContactsInHeader ? styles["header__contacts_yes"] : ""}` }>
                            < ApplicationModal />
                            <a
                                href="https://wa.me/79218696715"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                < Image width={30} height={30} src="/images/whatsup.png" alt="Whatsup"/>
                            </a>
                            <a
                                href="https://t.me/@dariya_grigorevaS"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                            >
                                < Image width={30} height={30} src="/images/telegram.png" alt="Telegram"/>
                            </a>
                        </div>

                        <MenuDrawer />
                </div>
            </div>
        </div>
    )
};
export default Header;