// Base API url
export const API_URL = 'https://gateway.scan-interfax.ru/api/v1';

// URL's
export const HOME_URL = '/';
export const AUTH_URL = '/authorization';
export const SEARCH_PAGE_URL = '/search';
export const NA_PAGE_URL = '/notavailable';

// Home page slider data
import SliderPic2 from '@/assets/slider_base.svg';
import SliderPic3 from '@/assets/slider_defence.svg';
import SliderPic1 from '@/assets/slider_time.svg';

export const SliderStore = [
  {
    id: 1,
    pic: SliderPic1,
    text: 'Высокая и оперативная скорость обработки заявки',
  },
  {
    id: 2,
    pic: SliderPic2,
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
  },
  {
    id: 3,
    pic: SliderPic3,
    text: ' Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
  },
];

// Home page tariff data
import homeTarifCenterIcon from '@/assets/home__tarifs_center_icon.svg';
import homeTarifCurTarifIcon from '@/assets/home__tarifs_current_tarif.svg';
import homeTarifLeftIcon from '@/assets/home__tarifs_left_icon.svg';
import homeTarifRightIcon from '@/assets/home__tarifs_right_icon.svg';

export const TarifsStore = [
  {
    id: 1,
    color: '#FFB64F',
    name: 'card_left',
    title_left_h3: 'Beginner',
    title_left_p: 'Для небольшого исследования',
    title_right: homeTarifLeftIcon,
    current_tarif: homeTarifCurTarifIcon,
    rate_h3_new: '799 ₽  ',
    rate_h3_old: '1 200 ₽',
    rate_p: 'или 150 ₽/мес. при рассрочке на 24 мес.',
    rate_description_h4: 'В тариф входит:',
    rate_description_li1: 'Безлимитная история запросов',
    rate_description_li2: 'Безопасная сделка',
    rate_description_li3: 'Поддержка 24/7',
    button: 'Перейти в личный кабинет',
  },
  {
    id: 2,
    color: '#7CE3E1',
    name: 'card_center',
    title_left_h3: 'Pro',
    title_left_p: 'Для HR и фрилансеров',
    title_right: homeTarifCenterIcon,
    current_tarif: homeTarifCurTarifIcon,
    rate_h3_new: '1 299 ₽  ',
    rate_h3_old: '2 600 ₽',
    rate_p: 'или 279 ₽/мес. при рассрочке на 24 мес.',
    rate_description_h4: 'В тариф входит:',
    rate_description_li1: 'Все пункты тарифа Beginner',
    rate_description_li2: 'Экспорт истории',
    rate_description_li3: 'Рекомендации по приоритетам',
    button: 'Подробнее',
  },
  {
    id: 3,
    color: '#000000',
    name: 'card_right',
    title_left_h3: 'Business',
    title_left_p: 'Для корпоративных клиентов',
    title_right: homeTarifRightIcon,
    current_tarif: homeTarifCurTarifIcon,
    rate_h3_new: '2 379 ₽',
    rate_h3_old: '3 700 ₽',
    rate_p: '',
    rate_description_h4: 'В тариф входит:',
    rate_description_li1: 'Все пункты тарифа Pro',
    rate_description_li2: 'Безлимитное количество запросов',
    rate_description_li3: 'Приоритетная поддержка',
    button: 'Подробнее',
  },
];
