import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => (props.isToday ? "#fff0f5" : "#eee")};
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: 100px;
`;

function isToday(date) {
  const today = new Date();
  return (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  );
}

function Cell({ date }) {
  const day = date.getDate();
  return (
    <Container key={date.toString()} isToday={isToday(date)}>
      <div>{day}</div>
    </Container>
  );
}

export default Cell;
