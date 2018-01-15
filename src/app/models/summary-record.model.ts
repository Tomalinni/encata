export class SummaryRecord {
  public averageMark: number;
  public totalAbsent: number;
  public totalDays: number;
  public totalDelay: number;
  public totalDelayedDays: number;
  public totalOvertime: number;
  public totalWorkingHours: number;
  public username: string;


  constructor(averageMark: number, totalAbsent: number, totalDays: number, totalDelay: number, totalDelayedDays: number,
              totalOvertime: number, totalWorkingHours: number, username: string) {
    this.averageMark = averageMark;
    this.totalAbsent = totalAbsent;
    this.totalDays = totalDays;
    this.totalDelay = totalDelay;
    this.totalDelayedDays = totalDelayedDays;
    this.totalOvertime = totalOvertime;
    this.totalWorkingHours = totalWorkingHours;
    this.username = username;
  }
}
