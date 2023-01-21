import { differenceInMonths, differenceInYears } from 'date-fns';
import { getNumeral } from '../../../../shared/lib/utils';

function getDeveloperInfo() {
  return [
    {
      title: 'Фамилия',
      text: 'Банифатов'
    },
    {
      title: 'Имя',
      text: 'Евгений'
    },
    {
      title: 'Отчество',
      text: 'Александрович'
    },
    {
      title: 'Возраст',
      text: getAge()
    },
    {
      title: 'Опыт',
      text: getExperience()
    },
    {
      title: 'Основной стек',
      text: 'TS, React, Redux, SCSS, Vite'
    },
  ]
}

function getAge() {
  let number = differenceInYears(Date.now(), new Date(1990, 0, 26));

  return getNumeral(+number, ['год', 'года', 'лет']);
}

function getExperience() {
  let number = (differenceInMonths(Date.now(), new Date(2021, 7, 1)) / 12).toFixed(1);

  return ((+number ^ 0) === +number) ? getNumeral(+number, ['год', 'года', 'лет']) : `${number} года`;
}

export { getDeveloperInfo };