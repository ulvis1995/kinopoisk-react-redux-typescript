export const filterType: {value: string, text: string}[] = [
  {value: 'ALL', text: 'Все'},
  {value: 'FILM', text: 'Фильмы'},
  {value: 'TV_SHOW', text: 'ТВ-Шоу'},
  {value: 'TV_SERIES', text: 'ТВ-сериалы'},
  {value: 'MINI_SERIES', text: 'Мини-сериалы'}
];

export const filterMonth: {value: string, text: string}[]  = [
  {value: 'JANUARY', text: 'Январь'},
  {value: 'FEBRUARY', text: 'Февраль'},
  {value: 'MARCH', text: 'Март'},
  {value: 'APRIL', text: 'Апрель'},
  {value: 'MAY', text: 'Май'},
  {value: 'JUNE', text: 'Июнь'},
  {value: 'JULY', text: 'Июль'},
  {value: 'AUGUST', text: 'Август'},
  {value: 'SEPTEMBER', text: 'Сентябрь'},
  {value: 'OCTOBER', text: 'Октябрь'},
  {value: 'NOVEMBER', text: 'Ноябрь'},
  {value: 'DECEMBER', text: 'Декабрь'},
];

const filterYearStart: number[] = []
for (let i = new Date ().getFullYear() ; i > 1899; i--) {
  filterYearStart.push(i)
};

export const filterYear = filterYearStart;