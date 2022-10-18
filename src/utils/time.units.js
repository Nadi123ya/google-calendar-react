import moment from "moment";

export const getWeekStartDate = (date) => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;
  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = (startDate) => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(":");
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

const monthsNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getDisplayedMonth = (date) => {
  const weekStart = date;
  const weekEnd = moment(date).add(6, "days");
  const startMonth = new Date(weekStart).getMonth();
  const startYear = new Date(weekStart).getFullYear();
  const endMonth = new Date(weekEnd).getMonth();
  const endYear = new Date(weekEnd).getFullYear();
  const isSameMonth = startMonth === endMonth;
  if (isSameMonth) {
    return `${monthsNames[startMonth]} ${startYear}`;
  }
  const isSameYear = startYear === endYear;
  return isSameYear
    ? `${monthsNames[startMonth]} - ${monthsNames[endMonth]} ${startYear}`
    : `${monthsNames[startMonth]} ${startYear} - ${monthsNames[endMonth]} ${endYear}`;
};

export const createNumbersArray = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }
  return result;
};
