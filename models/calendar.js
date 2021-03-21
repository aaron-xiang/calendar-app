import moment from "moment";

export function getCalendarDays(year, month) {
  const firstDayOfMonth = moment(new Date(year, month, 1));
  const lastDayOfMonth = moment(firstDayOfMonth).endOf("month");
  const firstDay = moment(firstDayOfMonth).startOf("week");
  const lastDay = moment(lastDayOfMonth).endOf("week");
  const d = moment(firstDay);
  const days = [];
  while (d.isBefore(lastDay)) {
    days.push(d.toDate());
    d.add(1, "d");
  }
  return days;
}

export function getWeekdayNames() {
  const firstDay = moment().startOf("week");
  const lastDay = moment().endOf("week");
  const weekDays = [];
  const d = moment(firstDay);
  while (d.isBefore(lastDay)) {
    weekDays.push(d.format("ddd").toUpperCase());
    d.add(1, "d");
  }
  return weekDays;
}
