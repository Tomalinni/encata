import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-company-structure',
  templateUrl: './company-structure.component.html',
  styleUrls: ['./company-structure.component.css']
})
export class CompanyStructureComponent implements OnInit {

  noGroupsInfo = true;
  getGroupsErrorInfo = false;
  isLoaded = false;

  allGroupList: any[];

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getAllGroups().subscribe(
      (response: Response) => {
        this.allGroupList = response.json();
        this.getGroupsErrorInfo = false;
        if (this.allGroupList.length > 0) {
          this.noGroupsInfo = false;
        } else {
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
