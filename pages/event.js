import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getWeekdayNames, getWeekdayNumber } from "../models/calendar";
import { updateEvent, deleteEvent, createEvent } from "../services/event";

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
  align-items: center;
  margin-top: 20px;
  label {
    margin: 5px;
  }
`;

const Weekdays = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  justify-content: space-between;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  button {
    margin: 10px;
    width: 70px;
  }
`;

const Message = styled.div`
  margin: 20px;
`;

function Event() {
  const router = useRouter();
  const data = JSON.parse(router.query.data);
  const [event, setEvent] = useState(data);
  const [message, setMessage] = useState("");
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
    setEvent((event) => {
      const newEvent = {
        ...event,
        [e.target.name]: e.target.checked,
        weekdays: e.target.checked
          ? [...event.weekdays]
          : [false, false, false, false, false, false, false],
      };
      return newEvent;
    });
  };

  const changeWeekday = (e) => {
    const weekday = e.target.name;
    const index = getWeekdayNumber(weekday);
    const newEvent = { ...event };
    newEvent.weekdays[index] = e.target.checked;
    setEvent(newEvent);
  };

  const cancel = () => {
    router.push("./");
  };

  const saveEvt = async () => {
    let updatedEvent = null;
    if (event.id) {
      const updatedEvent = await updateEvent(event);
    } else {
      const updatedEvent = await createEvent(event);
    }
    if (updateEvent) {
      setMessage("Event update successfully");
    } else {
      setMessage("Unable to save event");
    }
  };

  const deleteEvt = async () => {
    const deletedEvent = await deleteEvent(event);
    if (deletedEvent) {
      setMessage("Event deleted successfully");
    } else {
      setMessage("Unable to delete event");
    }
  };

  return (
    <Container onSubmit={onSubmit}>
      <div>Event ID: {event.id}</div>
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
      <Toolbar>
        <button onClick={saveEvt}>Save</button>
        <button onClick={deleteEvt}>Delete</button>
        <button onClick={cancel}>Cancel</button>
      </Toolbar>
      <Message>{message}</Message>
    </Container>
  );
}

export default Event;
