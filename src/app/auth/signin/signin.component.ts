import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import {CookieService} from 'ngx-cookie-service';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  private user: User;
  private signinError = false;

  constructor(private userService: UserService,
              private cookieService: CookieService,
              private authService: AuthService,
              private router: Router) {

  }

  onSignin(form: NgForm) {
    const login = form.value.login;
    const password = form.value.password;

    this.authService.signIn(login, password).subscribe(
      (response: Response) => {
        this.cookieService.deleteAll();
        localStorage.setItem('Authenticated', 'true');
        const data = response.json();

        // console.log(JSON.stringify(data));

        this.user = new User(
          data.id,
          data.roles[data.roles.length - 1],
          data.fullName,
          data.access,
          data.testing,
          data.status);

        this.userService.setLocal(this.user);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.signinError = true;
      }
    );

  }


}
