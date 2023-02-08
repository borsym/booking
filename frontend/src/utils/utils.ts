import { MILLISECONDS_PER_DAY } from './static';

export function dayDifference(date1: any, date2: any) {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return diffDays;
}

export function convertDateIntoISO(date: any) {
  return date.map((date: any) => ({
    ...date,
    startDate: date.startDate.toISOString(),
    endDate: date.endDate.toISOString(),
  }));
}
export function rating(rating: number) {
  switch (rating) {
    case 1:
    case 2:
    case 3:
      return 'Very bad';
    case 4:
    case 5:
    case 6:
      return 'Bad';
    case 7:
    case 8:
    case 9:
      return 'Good';
    case 10:
      return 'Excellent';
    default:
      return 'No rating';
  }
}
