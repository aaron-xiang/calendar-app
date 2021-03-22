import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  background-color: azure;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
`;

function CalendarEvent({ event }) {
  const router = useRouter();
  const { startTime, endTime, description } = event;
  return (
    <Container
      onClick={(e) => {
        e.preventDefault();
        router.push({
          pathname: "event",
          query: { data: JSON.stringify(event) },
        });
      }}
    >
      <div>
        {startTime}-{endTime}
      </div>
      <div>{description}</div>
    </Container>
  );
}

export default CalendarEvent;
