import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import {AdminService} from '../../../services/admin.service';


@Component({
  selector: 'app-create-standard',
  templateUrl: './create-standard.component.html',
  styleUrls: ['./create-standard.component.css']
})
export class CreateStandardComponent implements OnInit {

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
  }

  sendFile(form: NgForm) {
    const file: File = form.value.pic;

    const fl = {
      file: file
    };

    console.log(file);
    console.log(form.value.pic);

    this.adminService.sendFile(fl).subscribe(
      (response: Response) => {
        console.log('Ok');
        console.log(response);
      },
      (error) => {
        console.log('Error');
        console.log(error);
      }
    );

  }

}
