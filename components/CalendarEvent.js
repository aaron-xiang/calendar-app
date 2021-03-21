import styled from "styled-components";

const Container = styled.div`
  background-color: azure;
  border: 1px solid black;
  border-radius: 5px;
  height: 100%;
  display: flex;
`;

function CalendarEvent({ startTime, endTime, description }) {
  return (
    <Container>
      <div>
        {startTime}-{endTime}
      </div>
      <div>{description}</div>
    </Container>
  );
}

export default CalendarEvent;
