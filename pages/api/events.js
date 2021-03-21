const events = [
  {
    startTime: "09:30",
    endTime: "10:00",
    description: "Event 1",
    isRecurrent: true,
    weekdays: [1, 2],
  },
  {
    startTime: "13:30",
    endTime: "14:00",
    description: "Event 2",
    isRecurrent: true,
    weekdays: [3, 4],
  },
];

export default (req, res) => {
  return res.status(200).json(events);
};
