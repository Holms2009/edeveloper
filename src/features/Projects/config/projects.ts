import promo from '../assets/promo.png';
import avito from '../assets/avito.png';
import codeservice from '../assets/codeservice.png';
import kitchen from '../assets/kitchen.png';

export const projects: TProject[] = [
  {
    name: 'Цифровой музей архитектуры России',
    link: 'https://museum.avito.ru/',
    stack: ['JavaScript', 'PUG', 'SCSS', 'GSAP'],
    description: 'Промо-сайт для авито. Основной упор сделан на анимации. Проект завершен.',
    img: avito
  },
  {
    name: 'Code + Service',
    link: 'https://codeservice.pro',
    stack: ['React', 'Redux', 'redux-toolkit', 'React-router', 'TypeScript', 'SCSS', 'Webpack', '@tanstack/react-table'],
    description: 'Сервис подбора и найма разработчиков, дизайнеров и т.д. Проект находится в активной разработке.',
    img: codeservice
  },
  {
    name: 'Kitchen Consulting',
    link: 'https://kitchen.consulting',
    stack: ['JavaScript', 'CSS', 'Webflow'],
    description: 'Лэндинг для Kitchen Consulting. По желанию клиента, сайт построен на базе конструктора Webflow. Анимация переходов между блоками - видео, управляемое из кастомного JS-кода.',
    img: kitchen
  }
]