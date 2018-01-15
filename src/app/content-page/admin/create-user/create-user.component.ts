import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import {AdminService} from '../../../services/admin.service';
import {FullUser} from '../../../models/full-user.model';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  private fullUser: FullUser;

  successInfo = false;
  errorInfo = false;
  errorGetDataListInfo = false;
  errorValidationInfo = false;

  selectedRole = 'USER';

  selectedTesting = 'Disable testing';
  private testingForm = true;

  // remove if it is for css
  yesTestingStatus = false;
  noTestingStatus = true;

  selectedAccess = 'Disable remote access';
  private remoteAccessForm = false;

  // remove if it is for css
  noAccessStatus = true;
  yesAccessStatus = false;

  selectedLanguage = 'ENGLISH';
  selectedSchedule = 'Select';
  private scheduleForm = null;

  selectedStatus = 'ACTIVE';

  // for css
  activeStatus = true;
  inactiveStatus = false;

  selectedGroup = 'Select';
  private groupIDForm = null;

  selectedPosition = 'Select';
  private positionForm = null;

  groupList: any[];
  schedulesList: any[];
  positionList: any[];

  momentToday;

  static getTodayDate() {
    return moment().format('YYYY') + '-' + moment().format('MM') + '-' + moment().format('DD');
  }

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.momentToday = moment().format('LL');

    // get groups
    this.adminService.getAllGroups().subscribe(
      (response: Response) => {
        this.groupList = response.json();
      },
      (error) => {
        this.errorGetDataListInfo = true;
        console.log(error);
      }
    );

    // get schedules
    // );
    this.adminService.getSchedules().subscribe(
      (response: Response) => {
        this.schedulesList = response.json();
      },
      (error) => {
        this.errorGetDataListInfo = true;
        console.log(error);
      }
    );

    // get positions
    // );
    // this.adminService.getAllPositions().subscribe(
    //   (response: Response) => {
    //     this.positionList = response.json();
    //   },
    //   (error) => {
    //     this.errorGetDataListInfo = true;
    //     console.log(error);
    //   }
    // );

  }

  selectRole(role) {
    this.selectedRole = role;
  }


  selectedTest(testing) {
    if (testing === 'Disable testing') {
      this.yesTestingStatus = false;
      this.noTestingStatus = true;
    } else {
      this.yesTestingStatus = true;
      this.noTestingStatus = false;
    }

    this.selectedTesting = testing;
  }

  selectedRemouteAccess(access) {
    if (access === 'Disable remote access') {
      this.yesAccessStatus = false;
      this.noAccessStatus = true;
    } else {
      this.yesAccessStatus = true;
      this.noAccessStatus = false;
    }

    this.selectedAccess = access;
  }

  selectedLang(language) {
    this.selectedLanguage = language;
  }

  selectedSched(id, start, end) {
    this.selectedSchedule = start + ' - ' + end;
    this.scheduleForm = id;
  }

  selectedStat(status) {
    if (status === 'Active') {
      this.activeStatus = true;
      this.inactiveStatus = false;
    } else {
      this.activeStatus = false;
      this.inactiveStatus = true;
    }

    this.selectedStatus = status;
  }


  selectedGro(id, groupName, positions) {
    console.log(groupName);
    console.log(id);
    console.log(positions);

    this.selectedPosition = 'Select';
    this.positionForm = null;
    this.selectedGroup = groupName;
    this.groupIDForm = id;
    this.positionList = positions;

  }

  selectedPos(id, posTitle) {
    this.selectedPosition = posTitle;
    this.positionForm = id;
  }


  formValidte() {

    // hide all notifications
    this.successInfo = false;
    this.errorInfo = false;
    this.errorGetDataListInfo = false;
    this.errorValidationInfo = false;

    // required fields

    // from buttons
    // testing
    this.testingForm = this.selectedTesting === 'Disable testing';
    // access
    this.remoteAccessForm = this.selectedAccess !== 'Disable remote access';
    // schedule
    if (this.scheduleForm === null) {
      this.errorValidationInfo = true;
      return false;
    }
    // position
    if (this.positionForm === null) {
      this.errorValidationInfo = true;
      return false;
    }
    return true;
  }

  // ******************************************************************************************************

  createFullUser(form: NgForm) {

    if (this.formValidte()) {

      this.fullUser = new FullUser(
        form.value.login,
        form.value.password,
        form.value.firstName,
        form.value.lastName,
        form.value.patronymicName,
        CreateUserComponent.getTodayDate(),
        this.selectedLanguage, // **
        [
          this.selectedRole
        ],
        {
          'id': this.scheduleForm // **
        },
        this.selectedStatus, // **
        form.value.internalNumber,
        this.remoteAccessForm,
        form.value.phone,
        form.value.email,
        this.testingForm,
        this.groupIDForm
      );

      const groupObj = {
        'id': this.groupIDForm
      };

      const positionObj = {
        'id': this.positionForm
      };

      this.adminService.createFullUser(this.fullUser, groupObj, positionObj).subscribe(
        (response: Response) => {
          if (response.status === 201) {
            this.successInfo = true;
            this.errorInfo = false;
          }
        },
        (error) => {
          this.successInfo = false;
          this.errorInfo = true;
          console.log(error);
        }
      );

    } else {
      console.log('Form requared error');
    }

  }

  // ******************************************************************************************************

}

