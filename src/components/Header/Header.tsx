import styles from "@/components/Header/Header.module.css";
import {useState, RefObject, useEffect} from "react";
import Image from "next/image";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Button, Drawer} from "@mui/material";
import {sections} from "@/libs/const";

type THeaderMainProps = {
    mainPageRef: RefObject<HTMLDivElement | null>;
}

function Header({ mainPageRef }: THeaderMainProps) {
    // Отображение иконок контактов в header
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

    // Отображение меню
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = (newOpen: boolean) => () => {
        setOpenMenu(newOpen);
    };

    // Проктурка страницы при клике на пункте меню
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const MenuList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleMenu(false)}>
            <List>
                {sections.map(({ text, id, icon: Icon }) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => scrollToSection(id)}>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Позвонить', 'Написать Whatsup', 'Написать Telegram', 'Заявка на консультацию'].map((text, icon) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className={styles["header__bg"]}>
            <div className={styles["header-main"]}>
                <h1 className={styles["header__logo"]}>GRIGOREVA</h1>

                <div className={styles["header__right"]}>

                        <div className={ `${styles["header__contacts"]} ${styles["header__contacts_no"]} ${showContactsInHeder ? styles["header__contacts_yes"] : ""}` }>
                            <a
                                href="№"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Consultation"
                            >
                                < Image width={30} height={30} src="/images/consulting.png" alt="Заказать консультацию"/>
                            </a>
                            <a
                                href="№"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Calls"
                            >
                                < Image width={30} height={30} src="/images/calls.png" alt="Позвонить"/>
                            </a>
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

                    <div className={styles["header__menu"]}>
                        <Button onClick={toggleMenu(true)} sx={{ color: 'white', fontSize: '25px', fontWeight: '200', fontFamily: 'inherit' }}>МЕНЮ</Button>
                        <Drawer open={openMenu} onClose={toggleMenu(false)}>
                            {MenuList}
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;