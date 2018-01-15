import {Injectable} from '@angular/core';

@Injectable()
export class ApiConnectService {

  // backend server URL:
  public baseApiUrl = 'http://localhost/backend';
  // routes:
  public logIn = this.baseApiUrl + '/auth/user/';
  public logOut = this.baseApiUrl + '/logout';
  public recordLogoutTime = this.baseApiUrl + '/common/time/logout/';
  // Get
  public getUserById = this.baseApiUrl + '/common/user/'; // +ID
  public getAllUsers = this.baseApiUrl + '/common/users/';
  public getMyGroups = this.baseApiUrl + '/common/user/'; // {id}/groups';
  public getAllSchedules = this.baseApiUrl + '/admin/schedules/';
  public getAllGroups = this.baseApiUrl + '/common/head/groups/';
  public getGroupById = this.baseApiUrl + '/common/group/'; // +ID
  public getTasks = this.baseApiUrl + '/common/tasks/';
  public getAllStandards = this.baseApiUrl + '/admin/standards/';
  public getFileById = this.baseApiUrl + '/common/standard/file/';
  public getStandard = this.baseApiUrl + '/common/standard/';
  public getMyReport = this.baseApiUrl + '/common/report';
  public getUsersOutsideOfGroup = this.baseApiUrl + '/common/head/usersoutside/'; // +{g_id}

  // Create
  public createSchedule = this.baseApiUrl + '/admin/schedule/';
  public createPosition = this.baseApiUrl + '/common/head/group/'; // 59cb9ea7a9a98a12e49fc260/position
  public createUser = this.baseApiUrl + '/admin/user/';
  public createGroup = this.baseApiUrl + '/admin/group/';
  public addFileToStandard = this.baseApiUrl + '/common/head/standard/file/';

  // set headers
  // Put
  public putUserOfGroup = this.baseApiUrl + '/common/head/group/'; // {g_id}/adduser/{u_id}/{p_id}
  // Patch
  public setHeadsForGroup = this.baseApiUrl + '/common/head/group/'; // {g_id}/setheads/{h_id}/{d_id}
  public changeUserStatusInGroup = this.baseApiUrl + '/common/head/group/'; // {g_id}/{u_id}/status
  constructor() {
  }

}
