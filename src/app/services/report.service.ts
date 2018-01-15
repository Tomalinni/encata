import {Injectable} from '@angular/core';
import {Report} from '../models/report.model';

@Injectable()
export class ReportService {
  private _reports: Report[];

  constructor() {}

  get reports(): Report[] {
    return this._reports;
  }

  set reports(value: Report[]) {
    this._reports = value;
  }
}
