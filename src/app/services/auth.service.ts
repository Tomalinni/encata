import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {ApiConnectService} from './api-connect.service';

@Injectable()
export class AuthService {

  constructor(private http: Http,
              private router: Router,
              private cookieService: CookieService,
              private apiURL: ApiConnectService) {
  }

  isAuthenticated() {
    if (localStorage.getItem('Authenticated') === null) {
      localStorage.setItem('Authenticated', 'false');
      return false;
    } else if (localStorage.getItem('Authenticated') === 'false') {
      return false;
    } else if (localStorage.getItem('Authenticated') === 'true') {
      return true;
    }

  }

  signIn(login, password) {
    const authorization: string = 'Basic ' + btoa(login + ':' + password);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': authorization
    });
    // return this.http.get('http://localhost:3000/fullUsers?login=' + login + '&password=' + password, {headers: headers});
    return this.http.get(this.apiURL.logIn, {headers: headers});
    // return this.http.get('http://46.101.175.193/backend/auth/user', {headers: headers});
  }

  signOut() {
    localStorage.setItem('Authenticated', 'false');
    this.cookieService.deleteAll();

    this.http.post(this.apiURL.logOut, null)
    // this.http.post('http://46.101.175.193/backend/logout', null)
      .subscribe((res) => {
          console.log(res);
        },
        (error) => console.log(error)
      );

    this.router.navigate(['/signin']);
  }

}
