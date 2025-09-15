'use client';

import styles from "@/components/MenuDrawer.module.css";

type TMenuDrawerProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function MenuDrawer({ open, onClose, children }: TMenuDrawerProps) {

    return (
        <>
            {/* Overlay - блокирует и затемняет всю тсраницу, кроме меню */}
            <div
                className={`${styles.overlay} ${open ? styles.overlayVisible : ""}`}
                onClick={onClose}
            />
            {/* Drawer panel - сама панель с меню */}
            <aside
                className={`${styles.drawer} ${
                    open ? styles.drawerOpen : ""
                }`}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
            >
                <button className={styles.closeBtn} onClick={onClose}>
                    ×
                </button>
                <div className={styles.content}>{children}</div>
            </aside>
        </>
    );
}