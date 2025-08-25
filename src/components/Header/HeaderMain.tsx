import styles from "@/components/Header/HeaderMain.module.css";
import {useState, RefObject, useEffect} from "react";
import Image from "next/image";

type THeaderMainProps = {
    mainPageRef: RefObject<HTMLDivElement | null>;
}

function HeaderMain({ mainPageRef }: THeaderMainProps) {
    const [showContactsInHeder, setShowContactsInHeder] = useState(false);

    useEffect(() => {
        if (!mainPageRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => setShowContactsInHeder(!entry.isIntersecting),
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
                    {showContactsInHeder &&
                        <div className={styles["header__contacts"]}>
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
                    }

                    <div>МЕНЮ</div>
                </div>
            </div>
        </div>
    )
};
export default HeaderMain;