import {SummaryRecord} from './summary-record.model';
import {Record} from './record.model';

export class Report {
  public firstName: string;
  public lastName: string;
  public records: Record[];
  public summaryRecord: SummaryRecord;


  constructor(firstName: string, lastName: string, records: Record[], summaryRecord: SummaryRecord) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.records = records;
    this.summaryRecord = summaryRecord;
  }
}
