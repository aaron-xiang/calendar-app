class Event {
  constructor(startDate, endDate, startTime, endTime, description) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.startTime = startTime;
    this.endTime = endTime;
    this.description = description;
    this.isRecurrent = false;
    this.weekdays = [false, false, false, false, false, false, false];
  }
}

export default Event;
