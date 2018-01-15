import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import {Schedule} from '../../../models/schedule.model';
import {AdminService} from '../../../services/admin.service';
import * as moment from 'moment';

@Component({
  selector: 'app-create-schedule-popup',
  templateUrl: './create-schedule-popup.component.html',
  styleUrls: ['./create-schedule-popup.component.css']
})
export class CreateSchedulePopupComponent implements OnInit {

  private schedule: Schedule;
  private successInfo = false;
  private errorInfo = false;


  constructor(private adminService: AdminService) {
  }

  ngOnInit() {

    // console.log(moment().utcOffset());

  }

  createSchedule(form: NgForm) {
    const workStart = form.value.workStart;
    const firstBreakStart = form.value.firstBreakStart;
    const firstBreakEnd = form.value.firstBreakEnd;
    const lunchStart = form.value.lunchStart;
    const lunchEnd = form.value.lunchEnd;
    const secondBreakStart = form.value.secondBreakStart;
    const secondBreakEnd = form.value.secondBreakEnd;
    const workEnd = form.value.workEnd;

    this.schedule = new Schedule(
      workStart,
      firstBreakStart,
      firstBreakEnd,
      lunchStart,
      lunchEnd,
      secondBreakStart,
      secondBreakEnd,
      workEnd);

    this.adminService.createSchedule(this.schedule).subscribe(
      (response: Response) => {
        this.successInfo = true;
        this.errorInfo = false;
      },
      (error) => {
        this.successInfo = false;
        this.errorInfo = true;
        console.log(error);
      }
    );

  }

}
