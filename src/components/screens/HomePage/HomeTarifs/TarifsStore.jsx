// TarifStore.jsx

import homeTarifCenterIcon from '@/assets/home__tarifs_center_icon.svg';
import homeTarifLeftIcon from '@/assets/home__tarifs_left_icon.svg';
import homeTarifRightIcon from '@/assets/home__tarifs_right_icon.svg';

const TarifsStore = [
  {
    id: 1,
    color: '#FFB64F',
    name: 'card_left',
    title_left_h3: 'beginner',
    title_left_p: 'Для небольшого исследования',
    title_right: homeTarifLeftIcon,
    rate_h3_new: '799 ₽  ',
    rate_h3_old: '1 200 ₽',
    rate_p: 'или 150 ₽/мес. при рассрочке на 24 мес.',
    rate_description_h4: 'В тариф входит:',
    rate_description_li1: 'Безлимитная история запросов',
    rate_description_li2: 'Безопасная сделка',
    rate_description_li3: 'Поддержка 24/7',
  },
  {
    id: 2,
    color: '#7CE3E1',
    name: 'card_center',
    title_left_h3: 'pro',
    title_left_p: 'Для HR и фрилансеров',
    title_right: homeTarifCenterIcon,
    rate_h3_new: '1 299 ₽  ',
    rate_h3_old: '2 600 ₽',
    rate_p: 'или 279 ₽/мес. при рассрочке на 24 мес.',
    rate_description_h4: 'В тариф входит:',
    rate_description_li1: 'Все пункты тарифа Beginner',
    rate_description_li2: 'Экспорт истории',
    rate_description_li3: 'Рекомендации по приоритетам',
  },
  {
    id: 3,
    color: '#000000',
    name: 'card_right',
    title_left_h3: 'business',
    title_left_p: 'Для корпоративных клиентов',
    title_right: homeTarifRightIcon,
    rate_h3_new: '2 379 ₽',
    rate_h3_old: '3 700 ₽',
    rate_p: '',
    rate_description_h4: 'В тариф входит:',
    rate_description_li1: 'Все пункты тарифа Pro',
    rate_description_li2: 'Безлимитное количество запросов',
    rate_description_li3: 'Приоритетная поддержка',
  },
];

export default TarifsStore;
