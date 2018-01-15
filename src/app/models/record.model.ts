export class Record {
  public absent: boolean;
  public delay: number;
  public endWork: string;
  public overtimeMinutes: number;
  public startWork: string;
  public testingMark: number;
  public workingHours: number;


  constructor(absent: boolean, delay: number, endWork: string, overtimeMinutes: number, startWork: string,
              testingMark: number, workingHours: number) {
    this.absent = absent;
    this.delay = delay;
    this.endWork = endWork;
    this.overtimeMinutes = overtimeMinutes;
    this.startWork = startWork;
    this.testingMark = testingMark;
    this.workingHours = workingHours;
  }
}
