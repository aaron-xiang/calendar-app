import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import moment from "moment";
import { getCalendarDays } from "../models/calendar";
import Calendar from "../components/Calendar/";
import { getAllEvents } from "../services/event";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0px 100px;
  font-size: 120%;
  font-weight: bold;
`;

const today = new Date();

function Home({ eventList }) {
  const [date, setDate] = useState(new Date());
  const adjustMonth = (n) => {
    setDate((d) => moment(d).add(n, "month").toDate());
  };
  return (
    <div>
      <Head>
        <title>Calendar App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>
          <button onClick={(e) => adjustMonth(-1)}>Prev</button>
          <div>{moment(date).format("MMMM YYYY")}</div>
          <button onClick={(e) => adjustMonth(1)}>Next</button>
        </Header>
        <Calendar
          year={date.getFullYear()}
          month={date.getMonth()}
          eventList={eventList}
        />
      </Container>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  // console.log("get init props");
  const eventList = await getAllEvents();
  // console.log(eventList);
  return { eventList };
};

export default Home;
