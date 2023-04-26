import { format, isDate, parseISO } from "date-fns";

export const dashTimeFormatter = "yyyy-MM-dd HH:mm:ss";
export const dateFormatter = "yyyy-MM-dd";
export const yearFormatter = "yyyy";
export const yearMonthFormatter = "yyyy-MM";
export const monthDayFormatter = "MM-dd";

export const formatTime = (
  date: Date | string,
  formatter = dashTimeFormatter
): string => {
  if (!date) {
    return "-";
  }

  if (isDate(date)) {
    return format(date as Date, formatter);
  }

  return format(parseISO(date as string), formatter);
};
