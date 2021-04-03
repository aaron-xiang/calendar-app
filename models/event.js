import moment from "moment";

class Event {
  constructor(
    startDate = moment().format("YYYY-MM-DD"),
    endDate = "",
    startTime = "",
    endTime = "",
    description = ""
  ) {
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
