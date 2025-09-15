import {useState, RefObject, useEffect, useTransition} from "react";
import styles from "@/components/Header.module.css";
import {MenuDrawer} from "@/components/MenuDrawer";
import {contacts, sections} from "@/libs/const";
import {SvgIcon} from "@mui/material";
import MenuText from "@/components/MenuText";
import MenuImg from "@/components/MenuIcon";
import ContactsIcons from "@/components/ContactsIcons";

type TSection = {
    id: string,
    text: string,
    icon: typeof SvgIcon
}
type TContact = {
    id: string,
    text: string,
    icon: typeof SvgIcon,
    link?: string
}
type THeaderMainProps = {
    mainPageRef: RefObject<HTMLDivElement | null>;
    onApplicationClick: () => void;
};

function Header({ mainPageRef, onApplicationClick }: THeaderMainProps) {

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

    // Боковое меню drawer
    const [menuOpen, setMenuOpen] = useState(false);

    // Переход к секции при клике не пункте меню через useTransition
    const [isPending, startTransition] = useTransition();
    const handleSectionClick = (id: string) => {
        setMenuOpen(false);
        startTransition(() => {
            const targetSection = document.getElementById(id);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    };

    return (
        <>
            {/*Header внизу экрана на малых экранах*/}
            <div className={styles["header__bg"]}>
                <div className={styles["header-main"]}>
                    <h1 className={styles["header__logo"]}>GRIGOREVA</h1>

                    <div className={styles["header__right"]}>

                        {showContactsInHeader && (
                            <div className={`${styles["header__contacts"]}`}>
                                < ContactsIcons onApplicationClick={onApplicationClick}/>
                            </div>
                        )}


                        <button
                            onClick={() => setMenuOpen(true)}
                            className={styles["header__menu"]}
                            type="button"
                        >
                        <span className={`${styles["header__menu-text"]} visible`}>
                            < MenuText/>
                        </span>
                                <div className={`${styles["header__menu-icon"]} hidden`}>
                                    < MenuImg/>
                                </div>
                            </button>
                            <MenuDrawer
                                open={menuOpen}
                                onClose={() => setMenuOpen(false)}
                            >
                                <nav>
                                    <ul className={styles["menu__ul"]}>
                                        {sections.map((sectionItem: TSection) => {
                                            const Icon = sectionItem.icon;
                                            return (
                                                <li key={sectionItem.id} className={styles["list__li"]}>
                                                    <button
                                                        className={styles.menu__li}
                                                        onClick={() => handleSectionClick(sectionItem.id)}
                                                    >
                                                        {Icon && <span className={styles.icon}><Icon/></span>}
                                                        {sectionItem.text}
                                                    </button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <hr className={styles["menu__separator"]}/>
                                    <ul className={styles["menu__ul"]}>
                                        {contacts.map((contactItem: TContact) => {
                                            const Icon = contactItem.icon;
                                            return (
                                                <li key={contactItem.id} className={styles["list__li"]}>
                                                    {contactItem.id === "application" ? (
                                                        <button
                                                            className={styles.menu__li}
                                                            onClick={onApplicationClick}
                                                        >
                                                            {Icon && <span className={styles.icon}><Icon/></span>}
                                                            {contactItem.text}
                                                        </button>
                                                    ) : (
                                                        <a
                                                            className={styles.menu__li}
                                                            href={contactItem.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {Icon && <span className={styles.icon}><Icon/></span>}
                                                            {contactItem.text}
                                                        </a>
                                                    )}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            </MenuDrawer>
                        </div>
                    </div>
                </div>

            {/*Footer внизу экрана на малых экранах*/}
            {showContactsInHeader && (
                <footer className={`${styles["footer__bg"]} hidden`}>
                    <div className={styles["footer__main"]}>
                        <div className={`${styles["footer__contacts"]}`}>
                            < ContactsIcons onApplicationClick={onApplicationClick} />
                        </div>
                    </div>
                </footer>
             )}
        </>
    )
};
export default Header;