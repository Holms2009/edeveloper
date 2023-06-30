import promo from '../assets/promo.png';
import avito from '../assets/avito.png';

export const projects: TProject[] = [
  {
    name: 'Evgen Developer',
    link: '/',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'framer-motion'],
    description: 'Моя личная страница. Собственно, тут вы и находитесь.',
    img: promo
  },
  {
    name: 'Цифровой музей архитектуры России',
    link: 'https://museum.avito.ru/',
    stack: ['JavaScript', 'PUG', 'SCSS', 'GSAP'],
    description: '',
    img: avito
  }
]