export class Schedule {
  public id: string;
  public workStart: any;
  public firstBreakStart: any;
  public firstBreakEnd: any;
  public lunchStart: any;
  public lunchEnd: any;
  public secondBreakStart: any;
  public secondBreakEnd: any;
  public workEnd: any;

  constructor(workStart: any,
              firstBreakStart: any,
              firstBreakEnd: any,
              lunchStart: any,
              lunchEnd: any,
              secondBreakStart: any,
              secondBreakEnd: any,
              workEnd: any) {
    // this.id = id;
    this.workStart = workStart;
    this.firstBreakStart = firstBreakStart;
    this.firstBreakEnd = firstBreakEnd;
    this.lunchStart = lunchStart;
    this.lunchEnd = lunchEnd;
    this.secondBreakStart = secondBreakStart;
    this.secondBreakEnd = secondBreakEnd;
    this.workEnd = workEnd;
  }
}
