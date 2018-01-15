import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  private successInfo = false;
  private errorInfo = false;
  private errorGetScheduleInfo = false;
  private errorValidateInfo = false;

  selectedBranch = 'Branch';
  // private selectedHeadName = 'Select user';
  // private selectedDepName = 'Select user';
  private selectedScheduleName = 'Select';

  // private headIdProp = null;
  // private depIDProp = null;

  private scheduleIDProp = null;
  private isBranchProp = true;

  // private usersForHeading: any[];
  private schedulesList: any[];

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    // this.adminService.getAllFullUsers().subscribe(
    //   (response: Response) => {
    //     this.usersForHeading = response.json();
    //   },
    //   (error) => {
    //     this.errorGetScheduleInfo = true;
    //     console.log(error);
    //   }
    // );
    this.adminService.getSchedules().subscribe(
      (response: Response) => {
        this.schedulesList = response.json();
      },
      (error) => {
        this.errorGetScheduleInfo = true;
        console.log(error);
      }
    );
  }

  // selectedHead(userId, userName) {
  //   this.selectedHeadName = userName;
  //   this.headIdProp = userId;
  // }

  // selectedDep(userId, userName) {
  //   this.selectedDepName = userName;
  //   this.depIDProp = userId;
  // }

  selectedSchedule(id, start, end) {
    this.selectedScheduleName = start + ' - ' + end;
    this.scheduleIDProp = id;
  }

  selectedBran(branchStatus) {
    this.selectedBranch = branchStatus;
    if (branchStatus === 'Branch') {
      this.isBranchProp = true;
    } else {
      this.isBranchProp = false;
    }

  }

  createDivision(form: NgForm) {

    this.successInfo = false;
    this.errorInfo = false;
    this.errorGetScheduleInfo = false;
    this.errorValidateInfo = false;

    // if (this.headIdProp != null && this.depIDProp != null && form.value.title !== '') {
    if (this.scheduleIDProp != null && form.value.title !== '') {
      const group = {
        // title: form.value.title,
        // headId: this.headIdProp,
        // depID: this.depIDProp,
        // isBranch: this.isBranchProp

        name: form.value.title,
        workSchedule: {
          id: this.scheduleIDProp
        },
        signBranch: this.isBranchProp
      };

      this.adminService.createGroup(group).subscribe(
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
    } else {
      this.errorValidateInfo = true;
    }
  }

}
