import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {AdminService} from '../../../services/admin.service';
import {UserService} from '../../../services/user.service';
import {saveAs} from 'file-saver/FileSaver';
import {Standard} from '../../../models/standard.model';

@Component({
  selector: 'app-all-standards',
  templateUrl: './all-standards.component.html',
  styleUrls: ['./all-standards.component.css']
})
export class AllStandardsComponent implements OnInit {

  noStandardsInfo = true;
  getStandardErrorInfo = false;
  isLoaded = false;

  allStandardList: Standard[];

  constructor(private adminService: AdminService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.adminService.getAllStandards().subscribe(
      (response: Response) => {
        if (response.status === 200) {
          this.allStandardList = response.json();
          this.getStandardErrorInfo = false;
          if (this.allStandardList.length > 0) {
            this.noStandardsInfo = false;
          } else {
            this.noStandardsInfo = true;
          }
        }
        if (response.status === 204) {
          this.getStandardErrorInfo = false;
          this.noStandardsInfo = true;
        }
        this.isLoaded = true;

      },
      (error) => {
        this.noStandardsInfo = true;
        this.getStandardErrorInfo = true;
        this.isLoaded = true;
        console.log(error);
      }
    );
  }

  downloadFile(fileId: string) {
    this.isLoaded = false;
    this.userService.getFile(fileId).subscribe(
      (response) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(response.blob());
        link.download = response.headers.get('filename');
        link.click();
        link.remove();
      },
      () => {}, () => {
        this.isLoaded = true;
      }
    );
  }

  // TODO: MAKE IT BETTER
  openFileInBlank(fileId: string) {
    this.userService.getFile(fileId).subscribe(
      (response) => {
        console.log(response);
        const url = saveAs(response.blob(), response.headers.get('filename'));
        window.open(url, '_blank');
      }
    );
  }
}
