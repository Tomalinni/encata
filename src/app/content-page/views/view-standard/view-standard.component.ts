import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Response} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Standard} from '../../../models/standard.model';

@Component({
  selector: 'app-view-standard',
  templateUrl: './view-standard.component.html',
  styleUrls: ['./view-standard.component.css']
})
export class ViewStandardComponent implements OnInit {
  standard: Standard;

  isLoaded = false;
  errorInfo = false;

  errorMessage: string;

  constructor(private adminService: AdminService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.adminService.getStandard(this.route.snapshot.params['id']).subscribe(
      (response: Response) => {
        if (response.status === 200) {
          this.standard = response.json();
          console.log(this.standard);
          this.isLoaded = true;
          this.errorInfo = false;
        } else if (response.status === 204) {
          this.isLoaded = true;
          this.errorInfo = true;
          this.errorMessage = 'No standard with such id';
        } else {
          this.isLoaded = true;
          this.errorInfo = true;
          this.errorMessage = 'Internal server error';
        }
      },
      (error) => {
        this.isLoaded = true;
        this.errorInfo = true;
        console.log(error);
      }
    );
  }

}
