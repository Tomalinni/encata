import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private user: User;
  userAPI;

  private isLoaded = false;
  private errorInfo = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.getLocal();

    this.userService.getUserFromAPI(this.user.id).subscribe(
      (response: Response) => {

        // From fake API:
        const data = response.json();
        // console.log('USERRRRL: ' + JSON.stringify(data));

        this.userAPI = data;
        this.isLoaded = true;
        this.errorInfo = false;
        // From real API:
        // this.userAPI = response.json();
      },
      (error) => {
        this.isLoaded = true;
        this.errorInfo = true;
        console.log(error);
      });
  }

}
