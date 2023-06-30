import promo from '../assets/promo.png';
import avito from '../assets/avito.png';
import codeservice from '../assets/codeservice.png';

export const projects: TProject[] = [
  {
    name: 'Evgen Developer',
    link: '/',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'CSS-Modules', 'Vite', 'framer-motion'],
    description: 'Моя личная страница. Собственно, тут вы и находитесь.',
    img: promo
  },
  {
    name: 'Цифровой музей архитектуры России',
    link: 'https://museum.avito.ru/',
    stack: ['JavaScript', 'PUG', 'SCSS', 'GSAP'],
    description: '',
    img: avito
  },
  {
    name: 'Code + Service',
    link: 'https://codeservice.pro',
    stack: ['React', 'Redux', 'redux-toolkit', 'React-router', 'TypeScript', 'SCSS', 'Webpack', '@tanstack/react-table'],
    description: '',
    img: codeservice
  }
]