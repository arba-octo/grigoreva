// Компонент модального окна
import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { ApplicationForm} from "@/components/ApplicationForm";
import Image from "next/image";

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

export function ApplicationModal() {
    // Модальное окно с формой отправки заявки с сайта
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen}>
            < Image width={30} height={30} src="/images/consulting.png" alt="Заказать консультацию"/>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    < ApplicationForm />
                </Box>
            </Modal>

        </>

    );
}