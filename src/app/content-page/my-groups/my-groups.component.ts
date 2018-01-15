import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {ApiService} from '../../services/api.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  private noGroupsInfo = true;
  private getGroupsErrorInfo = false;
  private isLoaded = false;

  private myGroupList: any[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getMyGroups().subscribe(
      (response: Response) => {

        if (response.status === 200) {
          this.myGroupList = response.json();
          this.getGroupsErrorInfo = false;
          if (this.myGroupList.length > 0) {
            this.noGroupsInfo = false;
          } else {
            this.noGroupsInfo = true;
          }
        }
        if (response.status === 204) {
          this.getGroupsErrorInfo = false;
          this.noGroupsInfo = true;
        }

        this.isLoaded = true;
      },
      (error) => {
        this.noGroupsInfo = true;
        this.getGroupsErrorInfo = true;
        this.isLoaded = true;
        console.log(error);
      }
    );
  }

}
