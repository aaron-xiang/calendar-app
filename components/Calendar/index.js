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
  return eventList.filter((e) => e.weekdays.includes(moment(date).day()));
}

export default Calendar;
