const locale = 'pt-BR';

export const getWeekday = (date, type = 'long') => new Intl.DateTimeFormat(locale, { weekday: type }).format(date);

export const getHour = (date, type = 'numeric') => new Intl.DateTimeFormat(locale, { hour: type }).format(date);

export const getTime = (date, type = 'numeric') => new Intl.DateTimeFormat(locale, { hour: type, minute: type }).format(date);

export default {
  getWeekday,
  getHour,
  getTime,
};
