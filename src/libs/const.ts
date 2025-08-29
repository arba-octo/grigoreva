import BenefitsIcon from '@mui/icons-material/Recommend';
import DisputesIcon from '@mui/icons-material/RealEstateAgent';
import ResultsIcon from '@mui/icons-material/HomeRepairService';
import FeedbacksIcon from '@mui/icons-material/HistoryEdu';


// Какие секции (разделы) есть на главное тсранице сайта, они участвуют в навигации черех меню
export const sections = [
    { text: 'Споры', id: 'disputes', icon: DisputesIcon},
    { text: 'Преимущества', id: 'benefits', icon:  BenefitsIcon},
    { text: 'Наши результаты', id: 'results', icon: ResultsIcon },
    { text: 'Отзывы', id: 'feedbacks', icon: FeedbacksIcon }
];