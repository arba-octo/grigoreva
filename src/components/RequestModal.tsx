// Компонент модального окна
import React from "react";
import { Box, Modal } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
type TApplicationModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export function RequestModal({ open, onClose, children }: TApplicationModalProps) {
    return (
       <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
        </Modal>
    );
}