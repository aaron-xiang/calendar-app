import config from "../config/config";

export async function getAllEvents() {
  console.log("event url:", config.eventUrl);
  const res = await fetch(config.eventUrl);
  return res.json();
}

export async function updateEvent(event) {
  const res = await fetch(config.eventUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  return res.json();
}

export async function deleteEvent(event) {
  const res = await fetch(config.eventUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  return res.json();
}

export async function createEvent(event) {
  const res = await fetch(config.eventUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  return res.json();
}
