import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../../services/admin.service';
import {Response} from '@angular/http';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {Group} from '../../../models/group.model';
import {NgbModal, NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import {AddMemberPopupComponent} from './popups/add-member-popup/add-member-popup.component';
import {EditGroupPopupComponent} from './popups/edit-group-popup/edit-group-popup.component';
import {SetHeadDeputyComponent} from './popups/set-head-deputy/set-head-deputy.component';
import {ViewStandardsComponent} from './popups/view-standards/view-standards.component';
import {FullUser} from '../../../models/full-user.model';
import {ConfirmationPopupComponent} from './popups/confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {

  private user: User;
  isAdmin = false;
  isHead = false;
  isUser = false;

  group: Group;
  isLoaded = false;
  errorInfo = false;


  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private adminService: AdminService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.user = this.userService.getLocal();
    if (this.user.role === 'ROLE_ADMIN') {
      this.isAdmin = true;
      this.isHead = true;
      this.isUser = true;
    } else if (this.user.role === 'ROLE_HEAD') {
      this.isAdmin = false;
      this.isHead = true;
      this.isUser = true;
    } else if (this.user.role === 'ROLE_USER') {
      this.isAdmin = false;
      this.isHead = false;
      this.isUser = true;
    }

    this.adminService.getGroupByID(this.route.snapshot.params['id']).subscribe(
      (response: Response) => {
        if (response.status === 200) {
          this.group = response.json();
          this.isLoaded = true;
          this.errorInfo = false;
        }
      },
      (error) => {
        this.isLoaded = true;
        this.errorInfo = true;
        console.log(error);
      });
  }

  changeActiveStatus(user) {
    const modalRef = this.modalService.open(ConfirmationPopupComponent);
    modalRef.componentInstance.state = 'inactive';
    modalRef.componentInstance.username = user.user.firstName + ' ' + user.user.lastName;
    modalRef.result.then((result) => {
      if (result === 'ok') {
        this.adminService.changeUserStatusInGroup(this.group.id, user.user.id, 'ACTIVE').subscribe(
          (response: Response) => {
            if (response.status === 200) {
              const index = this.group.activeUsers.indexOf(user);
              if (index > -1) {
                this.group.activeUsers.splice(index, 1);
                this.group.inactiveUsers.push(user);
              }
            }
          },
          (error) => {
            console.log(error);
          });
      }
    });
  }

  changeInactiveStatus(user){
    const modalRef = this.modalService.open(ConfirmationPopupComponent);
    modalRef.componentInstance.state = 'active';
    modalRef.componentInstance.username = user.user.firstName + ' ' + user.user.lastName;
    modalRef.result.then((result) => {
      if (result === 'ok') {
        this.adminService.changeUserStatusInGroup(this.group.id, user.user.id, 'INACTIVE').subscribe(
          (response: Response) => {
            console.log(response.status)
            if (response.status === 200) {
              const index = this.group.inactiveUsers.indexOf(user);
              if (index > -1) {
                this.group.inactiveUsers.splice(index, 1);
                this.group.activeUsers.push(user);
              }
            }
          },
          (error) => {
            console.log(error);
          });
      }
    });
  }

  openAddMember() {
    const modalRef = this.modalService.open(AddMemberPopupComponent);
    modalRef.componentInstance.setGroup(this.group);
  }

  openEditGroup() {
    const modalRef = this.modalService.open(EditGroupPopupComponent);
    modalRef.componentInstance.name = 'World';
  }

  openSetHeadDeputy() {
    const modalRef = this.modalService.open(SetHeadDeputyComponent);
    modalRef.componentInstance.setGroup(this.group);
  }

  openViewStandards() {
    const modalRef = this.modalService.open(ViewStandardsComponent);
    modalRef.componentInstance.name = 'World';
  }

}
