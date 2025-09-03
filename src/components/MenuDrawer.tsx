import { useState } from "react";
import {Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {sections} from "@/libs/const";
import styles from "@/components/Header/Header.module.css";

export function MenuDrawer() {
    // Проктурка страницы при клике на пункте меню
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    // Отображение меню
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = (newOpen: boolean) => () => {
        setOpenMenu(newOpen);
    };

    return (
        <div className={styles["header__menu"]}>
            <Button onClick={toggleMenu(true)}
                    sx={{color: 'white', fontSize: '25px', fontWeight: '200', fontFamily: 'inherit'}}>МЕНЮ</Button>
            <Drawer open={openMenu} onClose={toggleMenu(false)}>

                <Box sx={{width: 250}} role="presentation" onClick={toggleMenu(false)}>
                    <List>
                        {sections.map(({text, id, icon: Icon}) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => scrollToSection(id)}>
                                    <ListItemIcon>
                                        <Icon/>
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List>
                        {['Позвонить', 'Написать Whatsup', 'Написать Telegram', 'Заявка на консультацию'].map((text, icon) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {}
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Drawer>
        </div>
    )
}