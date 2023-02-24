export default class Segment {
  OVERNIGHT_START = 22;
  OVERNIGHT_END = 6;


  constructor(readonly distance: number, readonly date: Date) {
    if (!this.isValidDistance()) throw new Error("Invalid distance");
    if (!this.isValidDate()) throw new Error("Invalid date");
  }

  isOvernight() {
    return (
      this.date.getHours() >= this.OVERNIGHT_START || this.date.getHours() <= this.OVERNIGHT_END
    );
  }

  isSunday() {
    return this.date.getDay() === 0;
  }

  isValidDistance() {
    return (
      this.distance != null &&
      this.distance != undefined &&
      typeof this.distance === "number" &&
      this.distance > 0
    );
  }

  isFirstDay() {
    return this.date.getDate() === 1;
  }

  isValidDate() {
    return (
      this.date != null &&
      this.date != undefined &&
      this.date instanceof Date &&
      this.date.toString() !== "Invalid Date"
    );
  }
}
