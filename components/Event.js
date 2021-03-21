import styled from "styled-components";

const Container = styled.div`
  background-color: azure;
  border: 1px solid black;
  border-radius: 5px;
  height: 100%;
`;

function Event({ start, end, description }) {
  return (
    <Container>
      <div>
        {start}-{end}
      </div>
      <div>Decription</div>
    </Container>
  );
}

export default Event;
