import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

type TContactsIconsProps = {
    onApplicationClick: () => void;
}

function ContactsIcons({ onApplicationClick }: TContactsIconsProps) {

    return (
        <>
            <Tooltip title="Отправить заявку на консультацию">
                <span>
                    < Image
                        width={30}
                        height={30}
                        src="/images/consulting.png"
                        alt="Заказать консультацию"
                        onClick={onApplicationClick}
                    />
                </span>
            </Tooltip>
            <Tooltip title="Позвонить">
                <span>
                    <a
                        href="tel:+79991234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Calls"
                    >
                        < Image width={30} height={30} src="/images/calls.png" alt="Calls"/>
                    </a>
                </span>
            </Tooltip>
            <Tooltip title="ОткрытьWhatsUp">
                <span>
                    <a
                        href="https://wa.me/79218696715"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                    >
                        < Image width={30} height={30} src="/images/whatsup.png" alt="Whatsup"/>
                    </a>
                </span>
            </Tooltip>
            <Tooltip title="Написать в Telegram">
                <span>
                    <a
                        href="https://t.me/@dariya_grigorevaS"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                    >
                        < Image width={30} height={30} src="/images/telegram.png" alt="Telegram"/>
                    </a>
                </span>
            </Tooltip>
        </>
    )
}

export default ContactsIcons;