// Компонент модального окна
import React from "react";
import { Box, Modal } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px',
    width: '90vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: { xs: 2, sm: 4, md: 6 },
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