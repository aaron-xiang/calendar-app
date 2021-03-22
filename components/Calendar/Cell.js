import styled from "styled-components";
import CalendarEvent from "../CalendarEvent";

const Container = styled.div`
  background-color: ${(props) => (props.isToday ? "#fff0f5" : "#eee")};
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  overflow: scroll;
  max-height: 100px;
`;

const EventList = styled.div`
  margin-top: 5px;
`;

function isToday(date) {
  const today = new Date();
  return (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  );
}

function Cell({ date, events = [] }) {
  const day = date.getDate();
  return (
    <Container key={date.toString()} isToday={isToday(date)}>
      <div>{day}</div>
      <EventList>
        {events.map((event) => (
          <CalendarEvent key={event.description} event={event} />
        ))}
      </EventList>
    </Container>
  );
}

export default Cell;
