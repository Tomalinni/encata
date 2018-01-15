import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Group} from '../../../../../models/group.model';
import {Position} from '../../../../../models/position.model';
import {AdminService} from '../../../../../services/admin.service';
import {Response} from '@angular/http';
import {FullUser} from '../../../../../models/full-user.model';
import {GroupUser} from '../../../../../models/group-user.model';

@Component({
  selector: 'app-add-member-popup',
  templateUrl: './add-member-popup.component.html',
  styleUrls: ['./add-member-popup.component.css'],
})
export class AddMemberPopupComponent implements OnInit{

  @Input() name;
  public group: Group;
  public selectedPosition: Position;
  public selectedUser: FullUser;
  public users: FullUser[];
  private successInfo = false;
  private already = false;
  private errorInfo = false;


  constructor(public activeModal: NgbActiveModal,
              private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getUserOutSide(this.group.id).subscribe(
      (response: Response) => {
        console.log(response.status);
        if (response.status === 200) {
          const users: FullUser[] = response.json();
          this.users = users;
          this.selectedUser = users[0];
          this.selectedPosition = this.group.positions[0];
        }
      },
      (error) => {
        console.log(error);
      });
  }

  setGroup(group: Group) {
    this.group = group;
    console.log(this.group);
  }

  selectedP(position: Position) {
    this.selectedPosition = position;
    console.log(position);
  }

  selectUser(user: FullUser) {
    this.selectedUser = user;
    console.log(user);
  }

  addMember() {
    this.adminService.putUserOfGroup(this.group.id, this.selectedUser.id, this.selectedPosition.id).subscribe(
      (response: Response) => {
        console.log(response.status);
        if (response.status === 200) {
            this.group.activeUsers.push(new GroupUser(this.selectedUser, this.selectedPosition));
            this.successInfo = true;
            this.already = false;
            this.errorInfo = false;
        } if (response.status === 208) {
          this.successInfo = false;
          this.already = true;
          this.errorInfo = false;
        } if (response.status === 412) {
          this.successInfo = false;
          this.already = false;
          this.errorInfo = true;
        }
      },
      (error) => {
        console.log(error);
      });
  }
}
