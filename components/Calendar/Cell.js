import styled from "styled-components";
import CalendarEvent from "../CalendarEvent";
import { useRouter } from "next/router";
import Event from "../../models/event";
import moment from "moment";

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
  const router = useRouter();
  const day = date.getDate();
  const dateString = moment(date).format("YYYY-MM-DD");
  return (
    <Container
      key={date.toString()}
      isToday={isToday(date)}
      onClick={(e) => {
        e.preventDefault();
        router.push({
          pathname: "event",
          query: { data: JSON.stringify(new Event(dateString)) },
        });
      }}
    >
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
