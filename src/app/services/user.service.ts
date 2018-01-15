import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, RequestOptionsArgs, ResponseContentType} from '@angular/http';
import {User} from '../models/user.model';
import {ApiConnectService} from './api-connect.service';
import * as moment from 'moment';


@Injectable()
export class UserService {

  private timeUTC;

  constructor(private http: Http,
              private apiURL: ApiConnectService) {
  }

  setLocal(user: User) {
    localStorage.setItem('User', JSON.stringify(user));
  }

  getLocal() {
    return JSON.parse(localStorage.getItem('User'));
  }

  deleteLocal() {
    localStorage.removeItem('User');
  }

  getUserFromAPI(userID: string) {
    // return this.http.get('http://localhost:3000/fullUsers?id=' + userID);
    return this.http.get(this.apiURL.getUserById + userID);
  }

  getFile(fileId: string) {
    const requestOptions: RequestOptionsArgs = {
      responseType: ResponseContentType.Blob
    };
    return this.http.get(this.apiURL.getFileById + fileId, requestOptions);
  }

  getTimezoneOffset() {
    if (moment().utcOffset() >= 0) {
      if (moment().utcOffset() / 60 < 10) {
        // return '+0' + moment().utcOffset() / 60 + ':00';
        this.timeUTC = '+0' + moment().utcOffset() / 60 + ':00';
        // console.log(this.timeUTC);
      } else {
        // return '+' + moment().utcOffset() / 60 + ':00';
        this.timeUTC = '+' + moment().utcOffset() / 60 + ':00';
        // console.log(this.timeUTC);
      }
    } else {
      if (moment().utcOffset() / 60 > -10) {
        // return '-0' + (moment().utcOffset() / 60).toString().split('-')[1] + ':00';
        this.timeUTC = '-0' + (moment().utcOffset() / 60).toString().split('-')[1] + ':00';
        // console.log(this.timeUTC);
      } else {
        // return moment().utcOffset() / 60 + ':00';
        this.timeUTC = moment().utcOffset() / 60 + ':00';
        // console.log(this.timeUTC);
      }
    }
    // return this.timeUTC;
  }


  // 'X-XSRF-TOKEN': this.cookieService.get('X-XSRF-TOKEN')

  writeLogoutTime() {
    this.getTimezoneOffset();
    console.log(this.timeUTC);

    const reqHeaders = new Headers({'offset': this.timeUTC});
    // const headers = new Headers().set(
    //   'offset', this.timeUTC);
    console.log(reqHeaders);

    // return this.http.post(this.apiURL.recordLogoutTime, {headers: headers});
    this.http.post(
      this.apiURL.recordLogoutTime, null, {headers: reqHeaders}).subscribe();
  }

  // const now = moment();
  // console.log('hello world: ', now.format());
  // console.log('hello timezone: ', now.zoneAbbr());


  /*
   signinUser(login: string, password: string) {
   const token: string = 'Basic ' + btoa(login + ':' + password);
   const headers = new Headers({
   'Content-Type': 'application/json',
   'X-Requested-With': 'XMLHttpRequest',
   'Authorization': token
   });
   console.log(headers);
   return this.http.get(this.apiURL + '/auth/user', {headers: headers});
   }*/

  /*  updateUser(user: User) {
   return this.http.post(this.apiURL + '/update', user);
   }*/

  getAllUsers() {
    // const headers = new Headers({
    //   'X-XSRF-TOKEN': this.cookieService.get('X-XSRF-TOKEN')
    // });

    return this.http.get(this.apiURL.getAllUsers);
    // return this.http.get('http://46.101.175.193/backend/common/users/get');

    // , {headers: headers}
  }

  getReport(from: string, to: string) {
    console.log(from);
    console.log(to);
    const headers = new Headers({
      'from' : from,
      'to' : to
    });

    return this.http.get(this.apiURL.getMyReport, {headers : headers});
  }
}
