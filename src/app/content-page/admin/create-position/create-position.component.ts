import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-create-position',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.css']
})
export class CreatePositionComponent implements OnInit {

  private successInfo = false;
  private errorInfo = false;

  private groupList: any[];

  private selectedGroup = 'Select';
  private groupIDForm = null;

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    // get groups
    this.adminService.getAllGroups().subscribe(
      (response: Response) => {
        this.groupList = response.json();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectedGro(id, groupName) {
    this.selectedGroup = groupName;
    // Send position object;
    this.groupIDForm = id;
  }

  createPos(form: NgForm) {

    const position = {
      name: form.value.name
    };

    if (this.groupIDForm != null) {
      this.adminService.createPosition(position, this.groupIDForm).subscribe(
        (response: Response) => {
          console.log(response.status);
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
      this.successInfo = false;
      this.errorInfo = true;
    }

  }

}
