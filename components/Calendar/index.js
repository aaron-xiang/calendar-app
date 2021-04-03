import styled from "styled-components";
import moment from "moment";
import { getCalendarDays, getWeekdayNames } from "../../models/calendar";
import Cell from "./Cell";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 50px;
  grid-gap: 1px;
  border: 2px solid black;
`;

const Header = styled.div`
  color: white;
  background-color: navy;
  font-size: 120%;
  font-weight: bold;
  text-align: center;
`;

function Calendar({ year, month, eventList = [] }) {
  const days = getCalendarDays(year, month);
  // const eventList = [];
  return (
    <div>
      <Container>
        {getWeekdayNames().map((w) => (
          <Header key={w}>{w}</Header>
        ))}
        {days.map((d) => {
          const events = getDailyEvents(eventList, d);
          return <Cell key={d.toString()} date={d} events={events} />;
        })}
      </Container>
    </div>
  );
}

function getDailyEvents(eventList, date) {
  return eventList.filter((e) => {
    return e.isRecurrent
      ? checkRecurrentEvent(e, date)
      : checkNonRecurrentEvent(e, date);
  });
}

function checkRecurrentEvent(event, date) {
  const startDate = moment(event.StartDate);
  const endDate = event.endDate ? moment(event.endDate) : null;
  const today = moment(date);
  const weekday = today.day();
  const weekdays = event.weekdays.map((v, i) => (v ? i : -1));
  if (
    today.isSameOrAfter(startDate) &&
    (today.isSameOrBefore(endDate) || !endDate) &&
    weekdays.includes(weekday)
  )
    return true;
  else return false;
}

function checkNonRecurrentEvent(event, date) {
  const today = moment(date).format("YYYY-MM-DD");
  return event.startDate === today;
}

export default Calendar;
