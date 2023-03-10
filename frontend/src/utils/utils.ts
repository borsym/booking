import { MILLISECONDS_PER_DAY } from './static';

export function dayDifference(date1: string | Date, date2: string | Date) {
  date1 = new Date(date1);
  date2 = new Date(date2);

  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return 3; //diffDays;
}

export function getDatesInRange(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const date = new Date(start.getTime());

  const dates = [];

  while (date <= end) {
    dates.push(new Date(date).getTime());
    date.setDate(date.getDate() + 1);
  }

  return dates;
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

export function isAvailable(roomNumber: any, alldates: any) {
  const isFound = roomNumber.unavailableDates.some((date) =>
    alldates.includes(new Date(date).getTime())
  );

  return !isFound;
}
