import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getWeekdayNames } from "../models/calendar";

const fields = [
  ["startDate", "Start Date"],
  ["endDate", "End Date"],
  ["startTime", "Start Time"],
  ["endTime", "End Time"],
  ["description", "Description"],
  // ["isRecurrent", "Is Recurrent?"],
  // ["weekdays", "Weekdays"],
];

const days = getWeekdayNames();

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const Weekdays = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-between;
`;

function Event() {
  const router = useRouter();
  const data = JSON.parse(router.query.data);
  const [event, setEvent] = useState(data);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setEvent((event) => ({
      ...event,
      [e.target.name]: e.target.value,
    }));
  };
  const onCheck = (e) => {
    setEvent((event) => ({
      ...event,
      [e.target.name]: !event[e.target.name],
    }));
  };
  const changeWeekday = (e) => {};
  return (
    <Container onSubmit={onSubmit}>
      {fields.map(([key, label]) => (
        <label>
          {`${label}: `}
          <input name={key} value={event[key]} onChange={onChange} />
        </label>
      ))}
      <label>
        {"Is recurrent? "}
        <input
          type="checkbox"
          name="isRecurrent"
          defaultChecked={event.isRecurrent}
          onChange={onCheck}
        />
      </label>
      {event.isRecurrent ? (
        <Weekdays>
          {event.weekdays.map((v, i) => (
            <label>
              {`${days[i]} `}
              <input
                name={days[i]}
                type="checkbox"
                defaultChecked={v}
                onChange={changeWeekday}
              />
            </label>
          ))}
        </Weekdays>
      ) : null}
    </Container>
  );
}

export default Event;
