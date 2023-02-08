import { MILLISECONDS_PER_DAY } from './static';

export function dayDifference(date1: any, date2: any) {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return diffDays;
}
