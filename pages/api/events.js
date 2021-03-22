const events = [
  {
    startDate: "2021-01-01",
    endDate: "2021-04-30",
    startTime: "09:30",
    endTime: "10:00",
    description: "Event #1",
    isRecurrent: true,
    weekdays: [false, true, true, false, false, false, false],
  },
  {
    startDate: "2021-03-01",
    endDate: "2021-05-30",
    startTime: "13:30",
    endTime: "14:00",
    description: "Event 2",
    isRecurrent: true,
    weekdays: [false, false, false, true, true, false, false],
  },
  {
    startDate: "2021-04-01",
    startTime: "13:30",
    endTime: "14:00",
    description: "Event 3",
    isRecurrent: false,
  },
];

export default (req, res) => {
  return res.status(200).json(events);
};
