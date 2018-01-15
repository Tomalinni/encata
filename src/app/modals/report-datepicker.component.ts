import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../services/user.service';
import {Response} from '@angular/http';
import * as moment from 'moment';
import {Report} from '../models/report.model';
import {ReportService} from '../services/report.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-report-datepicker',
  templateUrl: './report-datepicker.component.html',
  styleUrls: ['./report-datepicker.component.css']
})
export class ReportDatepickerComponent {
  from: NgbDateStruct;
  to: NgbDateStruct;

  wrongIntervalError = false;
  noScheduleError = false;
  emptyIntervalError = false;

  constructor(public activeModal: NgbActiveModal,
              private reportService: ReportService,
              private userService: UserService,
              private router: Router) {
    const today: Date = new Date();
    const fromDate: Date = new Date(today.getFullYear(), today.getMonth(), 28);
    const toDate: Date = new Date(today.getFullYear(), today.getMonth() + 1, 3);
    this.from = {year: fromDate.getFullYear(), month: fromDate.getMonth(), day: 28};
    this.to = {year: toDate.getFullYear(), month: toDate.getMonth(), day: 3};
  }

  sendRequest() {
    this.wrongIntervalError = false;
    this.noScheduleError = false;
    this.emptyIntervalError = false;

    const fromDate: Date = new Date(this.from.year, this.from.month - 1, this.from.day);
    const toDate: Date = new Date(this.to.year, this.to.month - 1, this.to.day);
    const fromString: string = moment(fromDate).format('YYYY-MM-DD');
    const toString: string = moment(toDate).format('YYYY-MM-DD');

    this.userService.getReport(fromString, toString).subscribe(
      (response: Response) => {
        if (response.status === 200) {
          this.reportService.reports = response.json();
          this.router.navigate(['/dashboard/report']);
          this.activeModal.close();
        }
      },
      (error: any) => {
        if (error.status === 412) {
          this.wrongIntervalError = true;
        }
        if (error.status === 424) {
          this.noScheduleError = true;
        }
        if (error.status === 428) {
          this.emptyIntervalError = true;
        }
      }
    );
  }
}
