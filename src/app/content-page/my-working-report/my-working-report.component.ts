import { Component, OnInit } from '@angular/core';
import {ReportService} from '../../services/report.service';
import {Report} from '../../models/report.model';

@Component({
  selector: 'app-my-working-report',
  templateUrl: './my-working-report.component.html',
  styleUrls: ['./my-working-report.component.css']
})
export class MyWorkingReportComponent implements OnInit {
  reports: Report[];
  userNames: string[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.reports = this.reportService.reports;
    for (const report of this.reports) {
      this.userNames.push(report.summaryRecord.username);
    }
  }
}
