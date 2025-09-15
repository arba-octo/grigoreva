import BenefitsIcon from '@mui/icons-material/Recommend';
import DisputesIcon from '@mui/icons-material/RealEstateAgent';
import ResultsIcon from '@mui/icons-material/HomeRepairService';
import FeedbacksIcon from '@mui/icons-material/HistoryEdu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import TelegramIcon from '@mui/icons-material/Telegram';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// Какие секции (разделы) есть на главное тсранице сайта, они участвуют в навигации черех меню
export const sections = [
    { text: 'Споры', id: 'disputes', icon: DisputesIcon},
    { text: 'Преимущества', id: 'benefits', icon:  BenefitsIcon},
    { text: 'Наши результаты', id: 'results', icon: ResultsIcon },
    { text: 'Отзывы', id: 'feedbacks', icon: FeedbacksIcon }
];
export const contacts = [
    { text: "Позвонить", id: "calls", icon: CallIcon, link: "tel:+79991234567" },
    { text: "Написать WhatsUp", id: "whatsup", icon: WhatsAppIcon, link: "https://wa.me/79218696715" },
    { text: "Написать Telegram", id: "telegram", icon: TelegramIcon, link: "https://t.me/dariya_grigorevaS" },
    { text: "Заявка на консультацию", id: "application", icon: SupportAgentIcon },
]