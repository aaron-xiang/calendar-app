import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

const dbFile = path.join("db", "events.json");
const events = JSON.parse(fs.readFileSync(dbFile));

function createNewEvent(event) {
  event.id = uuidv4();
  events.push(event);
  fs.writeFileSync(dbFile, JSON.stringify(events, null, 2));
  return event;
}

function updateEvent(event) {
  const index = events.findIndex((e) => e.id === event.id);
  const newEvent = { ...events[index], ...event };
  events[index] = newEvent;
  fs.writeFileSync(dbFile, JSON.stringify(events, null, 2));
  return newEvent;
}

function deleteEvent(event) {
  const index = events.findIndex((e) => e.id === event.id);
  const deletedEvent = events[index];
  events.splice(index, 1);
  fs.writeFileSync(dbFile, JSON.stringify(events, null, 2));
  return deletedEvent;
}

export default (req, res) => {
  switch (req.method) {
    case "GET":
      return res.status(200).json(events);
      break;
    case "POST":
      const newEvent = createNewEvent(req.body);
      return res.status(200).json(newEvent);
      break;
    case "PUT":
      console.log(req.body);
      const updatedEvent = updateEvent(req.body);
      return res.status(200).json(updatedEvent);
      break;
    case "DELETE":
      const deletedEvent = deleteEvent(req.body);
      return res.status(200).json(deletedEvent);
      break;
    default:
      return res.status(405).end();
      break;
  }
};
