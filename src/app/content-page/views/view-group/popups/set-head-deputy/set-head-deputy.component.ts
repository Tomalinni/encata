import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Group} from '../../../../../models/group.model';
import {FullUser} from '../../../../../models/full-user.model';
import {GroupUser} from '../../../../../models/group-user.model';
import {AdminService} from '../../../../../services/admin.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-set-head-deputy',
  templateUrl: './set-head-deputy.component.html',
  styleUrls: ['./set-head-deputy.component.css']
})
export class SetHeadDeputyComponent implements OnInit {

  public successInfo = false;
  public errorInfo = false;
  public group: Group;
  public selectedHead: FullUser;
  public selectedDeputy: FullUser;
  public activeUsers: GroupUser[];
  public users: FullUser[] = [];

  constructor(public activeModal: NgbActiveModal,
              public adminService: AdminService) {}

  ngOnInit() {
  this.activeUsers = this.group.activeUsers;
    for (const activeUser of this.activeUsers) {
     this.users.push(activeUser.user);
    }
    this.selectedHead = this.users[0];
    this.selectedDeputy = this.users[0];
  }

  setGroup(group: Group) {
    this.group = group;
    console.log(this.group);
  }
  selectedH(user: FullUser) {
    this.selectedHead = user;
  }

  selectedD(user: FullUser) {
    this.selectedDeputy = user;
  }
  setHeadDeputy() {
    this.adminService.setHeadsForGroup(this.group.id, this.selectedHead.id, this.selectedDeputy.id).subscribe(
      (response: Response) => {
        console.log(response.status);
        if (response.status === 200) {
          this.group.deputy = this.selectedDeputy;
          this.group.head = this.selectedHead;
          this.successInfo = true;
          this.errorInfo = false;
        }
      },
      (error) => {
        this.successInfo = false;
        this.errorInfo = true;
        console.log(error);
      });
  }
}
